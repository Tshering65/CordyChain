import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => {
          // You can use a regular expression or a library like validator.js to validate email format
          // Return true if valid, false if not
        },
        message: "Invalid email format",
      },
    },
    walletaddress: {
      type: String,
    },
    password: {
      type: String,
    },
    confirmpassword: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const registerInfo =
  mongoose.models.RegisterInfo ||
  mongoose.model("RegisterInfo", registerSchema);

export default registerInfo;
