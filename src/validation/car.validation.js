const validateCar = async (car) => {
  const { brand, model, year, serial_no, color, car_price, brand_new } = car;

  // Validate brand
  if (!brand) {
    throw new Error("Missing required field: 'brand'");
  }

  // Validate model
  if (!model) {
    throw new Error("Missing required field: 'model'");
  }

  // Validate year
  if (!year || typeof year !== "number") {
    throw new Error("Year must be a valid number");
  }

  // Validate serial_no
  if (!serial_no) {
    throw new Error("Missing required field: 'serial_no'");
  }
  if (serial_no.length < 5) {
    throw new Error("Serial number must be at least 5 characters long");
  }

  // Validate color
  if (!color) {
    throw new Error("Missing required field: 'color'");
  }

  // Validate car_price
  if (!car_price || typeof car_price !== "number") {
    throw new Error("Car price must be a valid number");
  }

  // Validate brand_new
  if (!brand_new || typeof brand_new !== 'boolean') {
    throw new Error("Brand new must be a valid boolean value (true or false)");
  }
};

module.exports = validateCar;
