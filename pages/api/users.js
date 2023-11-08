import connectMongoDB from "../../libs/mongodb";
import Information from "../../models/info";

export default async function apiHandler(req, res) {
  const { method } = req;

  if (method === "POST") {
    await handlePOST(req, res);
  } else if (method === "GET") {
    await handleGET(req, res); // Pass `req` as the first argument
  } else if (method === "DELETE") {
    await handleDELETE(req, res); // Pass `req` and `res`
  } else if (method === "PUT") {
    await handlePUT(req, res); // Pass `req` and `res`
  }
}

async function handlePOST(req, res) {
  const { username, prodid, cid, pnumber, address } = req.body;
  await connectMongoDB();

  try {
    const newInfo = await Information.create({
      username,
      prodid,
      cid,
      pnumber,
      address,
    });
    res.status(201).json({ message: "Information created", data: newInfo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleGET(req, res) {
  // Add `req` and `res` as parameters
  try {
    await connectMongoDB();
    const informations = await Information.find();
    res.status(200).json({ informations });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleDELETE(req, res) {
  // Add `req` and `res` as parameters
  const { id } = req.query;
  await connectMongoDB();

  try {
    const deletedInfo = await Information.findByIdAndDelete(id);
    if (!deletedInfo) {
      return res.status(404).json({ message: "Information not found" });
    }
    res.status(201).json({ message: "Information deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handlePUT(req, res) {
  // Add `req` and `res` as parameters
  const { id } = req.query;
  const { username, prodid, cid, pnumber, address } = req.body;

  try {
    await connectMongoDB();
    const updateData = {
      username,
      prodid,
      cid,
      pnumber,
      address,
    };
    const updatedInformation = await Information.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedInformation) {
      return res.status(404).json({ message: "Information not found" });
    }

    res
      .status(200)
      .json({ message: "Information updated", data: updatedInformation });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
