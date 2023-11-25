const express = require("express");
const {
  createMaterial,
  getAllMaterials,
  getMaterialsByMaterialType,
} = require("../controller/materialCtrl");
const materialRouter = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

materialRouter.post("/create", upload.single("file"), createMaterial);
materialRouter.get("/get-all-material", getAllMaterials);
materialRouter.get(
  "/by-material-type/:materialType",
  getMaterialsByMaterialType
);

module.exports = materialRouter;
