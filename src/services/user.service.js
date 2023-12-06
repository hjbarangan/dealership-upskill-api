const {
  getAllUsersQuery,
  getUserByIdQuery,
  createUserQuery,
  updateUserQuery,
  deleteUserQuery,
  checkUserQuery,
} = require("../queries/user.query");

const generateToken = require("../utils/generate-token.util");

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

async function loginService(user) {
  try {
    let token;
    const { email, password } = user;
    const UserExists = await checkUserQuery(email);

    if (!UserExists) {
      throw new Error("User not found!");
    } else {
      token = generateToken(UserExists.user_id);
    }

    if (UserExists.password !== password) {
      throw new Error("Password is incorrect!");
    }

    return { token: token, user: UserExists };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  loginService,
  getAllUsersService,
  createUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
};
