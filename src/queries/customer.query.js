const pool = require("../config");

const getAllCustomersQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM v_all_customer");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCustomerByIdQuery = async (id) => {
  try {
    const result = await pool.query(
      "SELECT * FROM customers WHERE customer_id = $1",
      [id]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createCustomerQuery = async (customer) => {
  try {
    const {
      customer_firstname,
      customer_lastname,
      customer_address,
      contact_no,
    } = customer;
    const result = await pool.query("CALL add_customers($1, $2, $3, $4)", [
      customer_firstname,
      customer_lastname,
      customer_address,
      contact_no,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCustomerQuery = async (id, car) => {
  try {
    const {
      customer_firstname,
      customer_lastname,
      customer_address,
      contact_no,
    } = car;
    const result = await pool.query(
      "CALL update_customers($1, $2, $3, $4, $5)",
      [id, customer_firstname, customer_lastname, customer_address, contact_no]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteCustomerQuery = async (id) => {
  try {
    const result = await pool.query("CALL delete_customer($1)", [id]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createCustomerQuery,
  updateCustomerQuery,
  deleteCustomerQuery,
  getAllCustomersQuery,
  getCustomerByIdQuery,
};
