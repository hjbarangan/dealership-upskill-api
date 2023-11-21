const {
  getAllCustomersQuery,
  getCustomerByIdQuery,
  createCustomerQuery,
  updateCustomerQuery,
  deleteCustomerQuery,
} = require("../queries/customer.query");

async function getAllCustomersService() {
  try {
    const result = await getAllCustomersQuery();
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getCustomerByIdService(id) {
  try {
    const result = await getCustomerByIdQuery(id);
   
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createCustomersService(customer) {
  try {
    const result = await createCustomerQuery(customer);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function updateCustomersService(id, customer) {
  try {
    const result = await updateCustomerQuery(id, customer);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteCustomersService(id) {
  try {
    const result = await deleteCustomerQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  createCustomersService,
  updateCustomersService,
  deleteCustomersService,
  getAllCustomersService,
  getCustomerByIdService,
};
