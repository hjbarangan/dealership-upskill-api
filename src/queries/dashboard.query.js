const pool = require("../config");

const getMonthlyNumberOfSalesQuery = async () => {
  try {
    const result = await pool.query(
      `SELECT COUNT(invoice_number) FROM sales_invoices WHERE invoice_date >= DATE_TRUNC('month', CURRENT_DATE);`
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMonthlyRevenueQuery = async () => {
  try {
    const result = await pool.query(
      `SELECT SUM(C.car_price) as month_revenue FROM sales_invoices S INNER JOIN cars C on S.car_id = C.car_id
      WHERE S.invoice_date  >= DATE_TRUNC('month', CURRENT_DATE);`
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMonthlyCustomersQuery = async () => {
  try {
    const result = await pool.query(
      `SELECT COUNT(SI.customer_id) FROM customers
      INNER JOIN sales_invoices SI on customers.customer_id = SI.customer_id
      WHERE SI.invoice_date >= DATE_TRUNC('month', CURRENT_DATE);`
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTopSellingBrandsQuery = async () => {
  try {
    const result = await pool.query(
      `SELECT C.brand as carBrand, SUM(C.car_price) as BrandSales, COUNT(C.car_id) FROM sales_invoices S INNER JOIN cars C on S.car_id = C.car_id
      GROUP BY C.brand ORDER by BrandSales DESC LIMIT 10;`
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getMonthlyCustomersQuery,
  getMonthlyNumberOfSalesQuery,
  getMonthlyRevenueQuery,
  getTopSellingBrandsQuery,
};
