const {
  getAllCarsService,
  getCarByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
} = require("../services/cars.service");

const createSalesInvoiceController = async (req, res) => {
  try {
    const result = await createSalesInvoiceService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalesInvoiceController = async (req, res) => {
  try {
    const result = await getSalesInvoiceService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSalesInvoiceController,
  getSalesInvoiceController,
};
