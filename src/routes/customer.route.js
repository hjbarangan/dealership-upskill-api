const express = require("express");
const router = express.Router();

const {
  getCustomersController,
  getCustomerByIdController,
  createCustomersController,
  updateCustomersController,
  deleteCustomersController,
} = require("../controllers/customer.controller");

router.get("/", getCustomersController);
router.get("/:id", getCustomerByIdController);
router.post("/", createCustomersController);
router.put("/:id", updateCustomersController);
router.delete("/:id", deleteCustomersController);

module.exports = router