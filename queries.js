const Barbershop = require("./models").barbershop;
const Review = require("./models").review;
const Location = require("./models").location;
const User = require("./models").user;

const oneBarbershop = async (id) => {
  try {
    const barbershop = await Barbershop.findByPk(id, {
      include: [{ model: Location, include: [Review] }],
    });
    console.log(barbershop.get({ plain: true }).locations[0].reviews);
  } catch (e) {
    console.log("error", e.message);
  }
};

const oneUser = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Review, include: [Location] }],
    });
    console.log(user.get({ plain: true }).reviews[0].location.address);
  } catch (e) {
    console.log("error", e.message);
  }
};

//oneBarbershop(5);
oneUser(2);
