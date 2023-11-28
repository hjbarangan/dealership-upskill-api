const express = require("express");
const router = express.Router();

const {
  getCarsController,
  getCarByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
} = require("../controllers/cars.controller");

router.get("/", getCarsController);
router.get("/:id", getCarByIdController);
router.post("/", createCarController);
router.put("/:id", updateCarController);
router.delete("/:id", deleteCarController);

module.exports = router