async function getAllInvoiceService() {
  try {
    const result = await getAllInvoiceQuery();
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getInvoiceByIdService(id) {
  try {
    const result = await getInvoiceByIdQuery(id);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createInvoiceService(user) {
  try {
    const result = await createInvoiceQuery(user);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function updateInvoiceService(id, user) {
  try {
    const result = await updateInvoiceQuery(id, user);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getAllInvoiceService,
  getInvoiceByIdService,
  createInvoiceService,
  updateInvoiceService,
};
