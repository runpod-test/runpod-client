const getErrorMessage = (error) => {
  if (error.response) {
    return error.response.data;
  }

  return error.message;
};

module.exports = {
  getErrorMessage,
}
