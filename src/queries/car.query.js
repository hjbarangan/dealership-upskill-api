const pool = require("../config");
const validateCar = require("../validation/car.validation");

const getAllCarsQuery = async () => {
  try {
    const result = await pool.query("SELECT * FROM v_all_car");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCarByIdQuery = async (car_id) => {
  try {
    const result = await pool.query("SELECT * FROM cars WHERE car_id = $1", [
      car_id,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createCarQuery = async (car) => {
  try {
    const { brand, model, year, serial_no, color, car_price, brand_new } = car;

    await validateCar(car);
    const checkSerialNo = await pool.query(
      "SELECT * FROM cars WHERE serial_no = $1",
      [serial_no]
    );

    if (checkSerialNo.rowCount > 0) {
      throw new Error("Serial number already exists");
    }

    const result = await pool.query(
      "CALL add_cars($1, $2, $3, $4, $5, $6, $7)",
      [brand, model, year, serial_no, color, car_price, brand_new]
    );

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCarQuery = async (id, car) => {
  try {
    const { brand, model, year, serial_no, color, car_price, brand_new } = car;

    const checkExistingCar = await pool.query(
      "SELECT * FROM cars WHERE car_id = $1",
      [id]
    );
    if (checkExistingCar.rowCount === 0) {
      throw new Error("Car does not exist");
    }
    const result = await pool.query(
      "CALL update_cars($1, $2, $3, $4, $5, $6, $7, $8)",
      [id, brand, model, year, serial_no, color, car_price, brand_new]
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteCarQuery = async (id) => {
  try {
    const result = await pool.query("CALL delete_car($1)", [id]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createCarQuery,
  updateCarQuery,
  deleteCarQuery,
  getAllCarsQuery,
  getCarByIdQuery,
};
