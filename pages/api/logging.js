// pages/api/login.js
import jwt from "jsonwebtoken";
import connectMongoDB from "../../libs/mongodb";
import registerInfo from "../../models/register";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }
    try {
      await connectMongoDB();
      const user = await registerInfo.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "User not found." });
      }
      const userEmail = email.toLowerCase();
      const storedEmail = user.email.toLowerCase();
      if (userEmail !== storedEmail) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ token });
      } else {
        return res.status(401).json({ error: "Invalid password" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
