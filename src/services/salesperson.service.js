const {
  getAllSalespersonQuery,
  getSalespersonByIdQuery,
  createSalespersonQuery,
  updateSalespersonQuery,
  deleteSalespersonQuery,
} = require("../queries/salesperson.query");

async function getAllSalespersonService() {
  try {
    const result = await getAllSalespersonQuery();
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createSalespersonService(salesperson) {
  try {
    const result = await createSalespersonQuery(salesperson);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getSalespersonByIdService(id) {
  try {
    const result = await getSalespersonByIdQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function updateSalespersonService(id, salesperson) {
  try {
    const result = await updateSalespersonQuery(id, salesperson);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function deleteSalespersonService(id) {
  try {
    const result = await deleteSalespersonQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getAllSalespersonService,
  createSalespersonService,
  getSalespersonByIdService,
  updateSalespersonService,
  deleteSalespersonService,
};
