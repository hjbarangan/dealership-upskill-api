const pool = require("../config");

const getAllUsersQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM v_all_user");
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
    const { user_firstname, user_lastname, email, password } = user;
    const result = await pool.query("CALL add_user($1, $2, $3, $4)", [
      user_firstname,
      user_lastname,
      email,
      password,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUserQuery = async (id, user) => {
  try {
    const { user_firstname, user_lastname, email, password } = user;
    const result = await pool.query(
      "CALL update_user($1, $2, $3, $4, $5)",
      [id, user_firstname, user_lastname, email, password]
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


const checkUserQuery = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}  


module.exports = {
  checkUserQuery,
  getAllUsersQuery,
  getUserByIdQuery,
  createUserQuery,
  updateUserQuery,
  deleteUserQuery,
};
