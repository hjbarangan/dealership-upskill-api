const {
  getAllCarsQuery,
  getCarByIdQuery,
  createCarQuery,
  updateCarQuery,
  deleteCarQuery,
} = require("../queries/car.query");

async function getAllCarsService() {
  try {
    const result = await getAllCarsQuery();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getCarByIdService(id) {
  try {
    const result = await getCarByIdQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function createCarService(car) {
  try {
    const result = await createCarQuery(car);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function updateCarService(id, car) {
  try {
    const result = await updateCarQuery(id, car);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function deleteCarService(id) {
  try {
    const result = await deleteCarQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { createCarService, updateCarService, deleteCarService, getAllCarsService, getCarByIdService}