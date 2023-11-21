// Example: cars.route.js

const express = require("express");
const router = express.Router();

const {
  getCarsController,
  getCarByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
} = require("../controllers/cars.controller");
const {
  getCustomersController,
  getCustomerByIdController,
  createCustomersController,
  updateCustomersController,
  deleteCustomersController,
} = require("../controllers/cars.controller");
// const {
//   getSalespersonController,
//   getSalespersonByIdController,
//   createSalespersonController,
//   updateSalespersonController,
//   deleteSalespersonController,
// } = require("../controllers/cars.controller");

// const {
//   getAllUsersController,
//   getUserByIdController,
//   createUserController,
//   updateUserController,
//   deleteUserController,
// } = require("../controllers/cars.controller");
// const {
//   getSalesInvoiceController,
//   createSalesInvoiceController,
// } = require("../controllers/cars.controller");

router.get("/cars", getCarsController);
router.get("/cars/:id", getCarByIdController);
router.post("/cars", createCarController);
router.put("/cars/:id", updateCarController);
router.delete("/cars/:id", deleteCarController);
// Other route definitions...

router.get("/customers", getCustomersController);
router.get("/customers/:id", getCustomerByIdController);
router.post("/customers", createCustomersController);
router.put("/customers/:id", updateCustomersController);
router.delete("/customers/:id", deleteCustomersController);

// router.get("/salesperson", getSalespersonController);
// router.get("/salesperson/:id", getSalespersonByIdController);
// router.post("/salesperson", createSalespersonController);
// router.put("/salesperson/:id", updateSalespersonController);
// router.delete("/salesperson/:id", deleteSalespersonController);

// router.get("/users", getAllUsersController);
// router.get("/users/:id", getUserByIdController);
// router.post("/users", createUserController);
// router.put("/users/:id", updateUserController);
// router.delete("/users/:id", deleteUserController);

// router.get("/salesinvoice", getSalesInvoiceController);
// router.post("/salesinvoice", createSalesInvoiceController);

module.exports = router;
