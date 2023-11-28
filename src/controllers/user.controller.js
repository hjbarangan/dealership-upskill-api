const {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} = require("../services/user.service");

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

module.exports = {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
};
