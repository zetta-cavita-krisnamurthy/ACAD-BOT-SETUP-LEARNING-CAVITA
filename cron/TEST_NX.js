async function TEST_N1() {
  try {
    return new Promise(async (resolve) => {
      console.log('Testing Start');

      // Simulate an asynchronous operation, e.g., using setTimeout
      setTimeout(() => {
        console.log(`Testing completed. sent notifications`);
        resolve(`Testing completed. sent notifications`);
      }, 1000); // Adjust the delay time as needed
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  TEST_N1,
};
