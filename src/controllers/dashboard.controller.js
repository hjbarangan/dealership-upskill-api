const {
  getMonthlyCustomersService,
  getMonthlyNumberOfSalesService,
  getMonthlyRevenueService,
  getTopSellingBrandsService,
} = require("../services/dashboard.service");

const getMonthlyCustomersController = async (req, res) => {
  try {
    const result = await getMonthlyCustomersService();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getMonthlyNumberOfSalesController = async (req, res) => {
  try {
    const result = await getMonthlyNumberOfSalesService();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getMonthlyRevenueController = async (req, res) => {
  try {
    const result = await getMonthlyRevenueService();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getTopSellingBrandsController = async (req, res) => {
  try {
    const result = await getTopSellingBrandsService();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  getMonthlyCustomersController,
  getMonthlyNumberOfSalesController,
  getMonthlyRevenueController,
  getTopSellingBrandsController,
};
