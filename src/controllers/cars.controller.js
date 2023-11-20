const {
  getAllCarsService,
  getCarByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
} = require("../services/cars.service");

const {
  getAllCustomersService,
  createCustomersService,
  updateCustomersService,
  deleteCustomersService,
} = require("../services/customers.service");

const getCarsController = async (req, res) => {
  try {
    const result = getAllCarsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCarByIdController = async (req, res) => {
  try {
    const result = await getCarByIdService(req.params.id);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCarController = async (req, res) => {
  try {
    const result = await createCarService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCarController = async (req, res) => {
  try {
    const result = await updateCarService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCarController = async (req, res) => {
  try {
    const result = await deleteCarService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCustomersController = async (req, res) => {
  try {
    const result = await getAllCustomersService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCustomersController = async (req, res) => {
  try {
    const result = await createCustomersService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCustomersController = async (req, res) => {};

const deleteCustomersController = async (req, res) => {};

const getSalespersonController = async (req, res) => {};

const getSalespersonByIdController = async (req, res) => {};

const createSalespersonController = async (req, res) => {};

const deleteSalespersonController = async (req, res) => {};

const updateSalespersonController = async (req, res) => {};

const getAllUsersController = (req, res) => {};

const getUserByIdController = async (req, res) => {};

const createUserController = async (req, res) => {};

const updateUserController = async (req, res) => {};

const deleteUserController = async (req, res) => {};

const createSalesInvoiceController = async (req, res) => {};

const getSalesInvoiceController = async (req, res) => {};

module.exports = {
  createCarController,
  getCarsController,
  getCarByIdController,
  updateCarController,
  deleteCarController,
  getCustomersController,
  createCustomersController,
  updateCustomersController,
  deleteCustomersController,
  getSalespersonController,
  getSalespersonByIdController,
  createSalespersonController,
  deleteSalespersonController,
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
  createSalesInvoiceController,
  getSalesInvoiceController,
};
