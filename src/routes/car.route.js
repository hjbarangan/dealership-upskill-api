const express = require("express");
const router = express.Router();

const {
  getCarsController,
  getCarByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
} = require("../controllers/cars.controller");

router.get("/cars", getCarsController);
router.get("/cars/:id", getCarByIdController);
router.post("/cars", createCarController);
router.put("/cars/:id", updateCarController);
router.delete("/cars/:id", deleteCarController);

module.exports = router