const axios = require("axios");
const { PORT } = require("../config/constants");

async function meExample() {
  try {
    const responseLogin = await axios.post(`http://localhost:${PORT}/login`, {
      email: "test@test.com",
      password: "test1234",
    });
    console.log("RESPONSE FROM SERVER", responseLogin.data);

    const token = responseLogin.data.token;

    const responseMe = await axios.get(`http://localhost:${PORT}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(responseMe);
  } catch (error) {
    console.log("OH NO AN ERROR", error.message);
    console.log("WHAT HAPPENED?", error.response.data);
  }
}

meExample();
