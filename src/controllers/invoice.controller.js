const {
  getAllInvoiceService,
  getInvoiceByIdService,
  createInvoiceService,
  updateInvoiceService,
} = require("../services/invoice.service");

const createSalesInvoiceController = async (req, res) => {
  try {
    const result = await createInvoiceService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalesInvoiceController = async (req, res) => {
  try {
    const result = await getAllInvoiceService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSalesInvoiceController = async (req, res) => {
  try {
    const result = await updateInvoiceService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalesInvoiceByIdController = async (req, res) => {
  try {
    const result = await getInvoiceByIdService(req.params.id);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSalesInvoiceController,
  getSalesInvoiceController,
  getSalesInvoiceByIdController,
  updateSalesInvoiceController,
};
