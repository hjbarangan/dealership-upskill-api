const validateCar = async (car) => {
  const { brand, model, year, serial_no, color, car_price, brand_new } = car;

  // Validate brand
  if (!brand) {
    throw new Error("Missing required field: brand");
  }

  // Validate model
  if (!model) {
    throw new Error("Missing required field: model");
  }

  // Validate year
  if (!year) {
    throw new Error("Missing required field: year");
  }

  // Validate serial_no
  if (!serial_no) {
    throw new Error("Missing required field: serial no");
  }

  // Validate color
  if (!color) {
    throw new Error("Missing required field: color");
  }

  if (!car_price) {
    throw new Error("Missing required field: car_price");
  }

  if (!brand_new) {
    throw new Error("Missing required field: brand_new");
  }
};

module.exports = validateCar;
