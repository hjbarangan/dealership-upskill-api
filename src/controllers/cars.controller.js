const {
  getAllCarsService,
  getCarByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
} = require("../services/cars.service");

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

module.exports = {
  createCarController,
  getCarsController,
  getCarByIdController,
  updateCarController,
  deleteCarController,
};
