const express = require("express");
const router = express.Router();

const {
  getSalespersonController,
  getSalespersonByIdController,
  createSalespersonController,
  updateSalespersonController,
  deleteSalespersonController,
} = require("../controllers/salesperson.controller");

router.get("/", getSalespersonController);
router.get("/:id", getSalespersonByIdController);
router.post("/", createSalespersonController);
router.put("/:id", updateSalespersonController);
router.delete("/:id", deleteSalespersonController);

module.exports = router;