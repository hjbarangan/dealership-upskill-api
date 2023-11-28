const {
  getAllSalespersonService,
  getSalespersonByIdService,
  createSalespersonService,
  updateSalespersonService,
  deleteSalespersonService,
} = require("../services/salesperson.service");

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

module.exports = {
  getSalespersonController,
  getSalespersonByIdController,
  createSalespersonController,
  updateSalespersonController,
  deleteSalespersonController,
};
