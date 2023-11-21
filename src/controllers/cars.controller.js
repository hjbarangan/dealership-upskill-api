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
    const result = await getAllCarsService();
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

const getCustomerByIdController = async (req, res) => {
  try {
    const result = await getCustomerByIdService(req.params.id);
    res.status(200).json(result.rows[0]);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const createCustomersController = async (req, res) => {
  console.log("🚀 ~ file: cars.controller.js:81 ~ createCustomersController ~ req:", req.body);
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

const getSalespersonController = async (req, res) => {
  try {
    const result = await getAllSalespersonService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalespersonByIdController = async (req, res) => {
  try {
    const result = await getSalespersonByIdService(req.params.id);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createSalespersonController = async (req, res) => {
  try {
    const result = await createSalespersonService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSalespersonController = async (req, res) => {
  try {
    const result = await deleteSalespersonService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSalespersonController = async (req, res) => {
  try {
    const result = await updateSalespersonService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const result = await getAllUsersService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    const result = await getUserByIdService(req.params.id);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserController = async (req, res) => {
  try {
    const result = await createUserService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    const result = await updateUserService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const result = await deleteUserService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
  createCarController,
  getCarsController,
  getCarByIdController,
  updateCarController,
  deleteCarController,
  getCustomersController,
  createCustomersController,
  getCustomerByIdController,
  updateCustomersController,
  deleteCustomersController,
  getSalespersonController,
  getSalespersonByIdController,
  createSalespersonController,
  updateSalespersonController,
  deleteSalespersonController,
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
  createSalesInvoiceController,
  getSalesInvoiceController,
};
