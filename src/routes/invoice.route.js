const express = require("express");
const router = express.Router();

const {
  getSalesInvoiceController,
  getSalesInvoiceByIdController,
  createSalesInvoiceController,
  updateSalesInvoiceController,
} = require("../controllers/invoice.controller");

router.get("/", getSalesInvoiceController);
router.post("/", createSalesInvoiceController);
router.get("/:id", getSalesInvoiceByIdController);
router.put("/:id", updateSalesInvoiceController);

module.exports = router;
