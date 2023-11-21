const pool = require("../config");

const getAllUsersQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM v_all_users");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserByIdQuery = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUserQuery = async (user) => {
  try {
    const {
      user_name,
      user_phone,
      user_email,
      user_address,
      user_password,
      user_role,
    } = user;
    const result = await pool.query("CALL add_user($1, $2, $3, $4, $5, $6)", [
      user_name,
      user_phone,
      user_email,
      user_address,
      user_password,
      user_role,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUserQuery = async (id, user) => {
  try {
    const {
      user_name,
      user_phone,
      user_email,
      user_address,
      user_password,
      user_role,
    } = user;
    const result = await pool.query(
      "CALL update_user($1, $2, $3, $4, $5, $6, $7)",
      [
        id,
        user_name,
        user_phone,
        user_email,
        user_address,
        user_password,
        user_role,
      ]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUserQuery = async (id) => {
  try {
    const result = await pool.query("CALL delete_user($1)", [id]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllUsersQuery,
  getUserByIdQuery,
  createUserQuery,
  updateUserQuery,
  deleteUserQuery,
};
