const {
  getMonthlyNumberOfSalesQuery,
  getMonthlyRevenueQuery,
  getMonthlyCustomersQuery,
  getTopSellingBrandsQuery,
} = require("../queries/dashboard.query");

const getMonthlyNumberOfSalesService = async () => {
  try {
    const result = await getMonthlyNumberOfSalesQuery();
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMonthlyRevenueService = async () => {
  try {
    const result = await getMonthlyRevenueQuery();
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMonthlyCustomersService = async () => {
  try {
    const result = await getMonthlyCustomersQuery();
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTopSellingBrandsService = async () => {
  try {
    const result = await getTopSellingBrandsQuery();
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getMonthlyNumberOfSalesService,
  getMonthlyRevenueService,
  getMonthlyCustomersService,
  getTopSellingBrandsService,
};
