// Example: cars.route.js

const express = require("express");
const router = express.Router();

const carRoutes = require("./car.route");
const userRoutes = require("./user.route");
const customerRoutes = require("./customer.route");
const salespersonRoutes = require("./salesperson.route");
const invoiceRoutes = require("./invoice.route");

router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/customers", customerRoutes);
router.use("/salespersons", salespersonRoutes);
router.use("/invoices", invoiceRoutes);

module.exports = router;
