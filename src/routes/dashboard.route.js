const express = require("express");
const router = express.Router();

const {
  getMonthlyCustomersController,
  getMonthlyNumberOfSalesController,
  getMonthlyRevenueController,
  getTopSellingBrandsController,
} = require("../controllers/dashboard.controller");

router.get("/monthly-customers", getMonthlyCustomersController);
router.get("/sales", getMonthlyNumberOfSalesController);
router.get("/monthly-revenue", getMonthlyRevenueController);
router.get("/top-sellers", getTopSellingBrandsController);

module.exports = router;
