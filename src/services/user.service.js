const {getUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController,} = require("../controllers/users.controller");

async function getAllUsersService() {
  try {
    const result = await getAllUsersQuery();
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getUserByIdService(id) {
  try {
    const result = await getUserByIdQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createUserService(user) {
    try {
        const result = await createUserQuery(user);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
    }

async function updateUserService(id, user) {
  try {
    const result = await updateUserQuery(id, user);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteUserService(id) {
  try {
    const result = await deleteUserQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
    getAllUsersService,
    createUserService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
    };