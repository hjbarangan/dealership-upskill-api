const pool = require("../config");

const getAllInvoiceQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM v_sales_invoice_details");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getInvoiceByIdQuery = async (id) => {
  try {
    const result = await pool.query(
      "SELECT * FROM sales_invoices WHERE invoice_number = $1",
      [id]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createInvoiceQuery = async (car) => {
  try {
    const { invoice_date, car_id, customer_id, salesperson_id } = car;
    const result = await pool.query("CALL add_sales_invoice($1, $2, $3, $4)", [
      invoice_date,
      car_id,
      customer_id,
      salesperson_id,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateInvoiceQuery = async (id, car) => {
  try {
    const { invoice_date, car_id, customer_id, salesperson_id } = car;
    const result = await pool.query(
      "CALL update_sales_invoice($1, $2, $3, $4, $5)",
      [id, invoice_date, car_id, customer_id, salesperson_id]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllInvoiceQuery,
  getInvoiceByIdQuery,
  createInvoiceQuery,
  updateInvoiceQuery,
};
