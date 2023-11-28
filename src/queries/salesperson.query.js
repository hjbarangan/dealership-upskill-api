const pool = require("../config");

const getAllSalespersonQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM v_all_salesperson");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSalespersonByIdQuery = async (id) => {
  try {
    const result = await pool.query(
      "SELECT * FROM salesperson WHERE salesperson_id = $1",
      [id]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSalespersonQuery = async (salesperson) => {
  try {
    const { salesperson_firstname, salesperson_lastname, contact_no } =
      salesperson;
    const result = await pool.query("CALL add_salesperson($1, $2, $3)", [
      salesperson_firstname,
      salesperson_lastname,
      contact_no,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateSalespersonQuery = async (id, salesperson) => {
  try {
    const { salesperson_firstname, salesperson_lastname, contact_no } =
      salesperson;
    const result = await pool.query(
      "CALL update_salesperson($1, $2, $3, $4)",
      [id, salesperson_firstname, salesperson_lastname, contact_no]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteSalespersonQuery = async (id) => {
  try {
    const result = await pool.query("CALL delete_salesperson($1)", [id]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllSalespersonQuery,
  getSalespersonByIdQuery,
  createSalespersonQuery,
  updateSalespersonQuery,
  deleteSalespersonQuery,
};
