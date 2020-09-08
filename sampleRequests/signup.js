const axios = require("axios");
const { PORT } = require("../config/constants");

async function signUpExample() {
  try {
    const response = await axios.post(`http://localhost:${PORT}/signup`, {
      email: "testwithaxios@test.com",
      password: "testwithaxios1234",
      name: "testwithaxios",
    });
    console.log("RESPONSE FROM SERVER", response.data);
  } catch (error) {
    console.log("OH NO AN ERROR", error.message);
    console.log("WHAT HAPPENED?", error.response.data);
  }
}

signUpExample();
