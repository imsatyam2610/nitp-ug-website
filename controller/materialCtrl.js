const Material = require("../models/materials");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const createMaterial = async (req, res) => {
  try {
    const { title, Studentclass, section, subject, material } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "Please upload a file" });
    }

    const bufferAsString = file.buffer.toString("base64");

    const cloudinaryResponse = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${bufferAsString}`
    );

    const newMaterial = new Material({
      title,
      class: Studentclass,
      section,
      subject,
      material,
      fileUrl: cloudinaryResponse.secure_url,
    });

    await newMaterial.save();

    res.status(201).json(newMaterial);
  } catch (error) {
    console.error("Error creating material:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.find();

    res.status(200).json(materials);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching materials" });
  }
};

const getMaterialsByMaterialType = async (req, res) => {
  try {
    const { materialType } = req.params;

    if (!materialType) {
      return res.status(400).json({ error: "Material type not specified" });
    }

    const materials = await Material.find({ material: materialType }).select(
      "title fileUrl"
    );

    res.status(200).json(materials);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while fetching materials by material type",
    });
  }
};

module.exports = {
  createMaterial,
  getAllMaterials,
  getMaterialsByMaterialType,
};
