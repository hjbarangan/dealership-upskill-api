const {
  getAllCustomersService,
  createCustomersService,
  updateCustomersService,
  deleteCustomersService,
} = require("../services/customers.service");

const getCustomersController = async (req, res) => {
  try {
    const result = await getAllCustomersService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCustomerByIdController = async (req, res) => {
  try {
    const result = await getCustomerByIdService(req.params.id);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCustomersController = async (req, res) => {
  console.log(
    "🚀 ~ file: cars.controller.js:81 ~ createCustomersController ~ req:",
    req.body
  );
  try {
    const result = await createCustomersService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCustomersController = async (req, res) => {
  try {
    const result = await updateCustomersService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCustomersController = async (req, res) => {
  try {
    const result = await deleteCustomersService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCustomersController,
  createCustomersController,
  getCustomerByIdController,
  updateCustomersController,
  deleteCustomersController,
};
