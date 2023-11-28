const express = require("express");
const router = express.Router();

const {
  getCustomersController,
  getCustomerByIdController,
  createCustomersController,
  updateCustomersController,
  deleteCustomersController,
} = require("../controllers/cars.controller");

router.get("/customers", getCustomersController);
router.get("/customers/:id", getCustomerByIdController);
router.post("/customers", createCustomersController);
router.put("/customers/:id", updateCustomersController);
router.delete("/customers/:id", deleteCustomersController);
