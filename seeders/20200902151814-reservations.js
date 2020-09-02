"use strict";

const User = require("../models").user;
const Location = require("../models").location;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user2 = await User.findOne({
      where: { email: "sam@sam.com" },
    });

    const user3 = await User.findOne({
      where: { email: "michael@michael.com" },
    });

    const user4 = await User.findOne({
      where: { email: "andrew@andrew.com" },
    });

    const user6 = await User.findOne({
      where: { email: "carl@carl.com" },
    });

    const user8 = await User.findOne({
      where: { email: "robert@robert.com" },
    });

    const user9 = await User.findOne({
      where: { email: "luis@luis.com" },
    });

    const user10 = await User.findOne({
      where: { email: "kenny@kenny.com" },
    });

    const location1 = await Location.findOne({
      where: { address: "Kinkerstraat 4, 1053 DT Amsterdam" },
    });

    const location2 = await Location.findOne({
      where: { address: "Burgemeester Rendorpstraat 11-15, 1064 EL Amsterdam" },
    });

    const location3 = await Location.findOne({
      where: { address: "Bakkersstraat 13, 1017 CW Amsterdam" },
    });

    const location4 = await Location.findOne({
      where: { address: "Beursplein 5, 1012 JW Amsterdam" },
    });

    const location5 = await Location.findOne({
      where: { address: "Singel 274, 1016 AC Amsterdam" },
    });

    const location6 = await Location.findOne({
      where: { address: "Oudezijds Achterburgwal 80 B, 1012 DR Amsterdam" },
    });

    const location7 = await Location.findOne({
      where: { address: "Eerste Looiersdwarsstraat 2, 1016 VM Amsterdam" },
    });

    await queryInterface.bulkInsert(
      "reservations",
      [
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user2.id,
          locationId: location1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user3.id,
          locationId: location4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user4.id,
          locationId: location5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user6.id,
          locationId: location6.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user8.id,
          locationId: location2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user9.id,
          locationId: location3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          haircut: false,
          beardcut: false,
          combo: true,
          userId: user10.id,
          locationId: location7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reservations", null, {});
  },
};
