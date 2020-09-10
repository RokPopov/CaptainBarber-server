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

    const location8 = await Location.findOne({
      where: { address: "Mauritskade 112H, 1093 RT Amsterdam" },
    });

    const location9 = await Location.findOne({
      where: { address: "Willem Schoutenstraat 53, 1057 DM Amsterdam" },
    });

    const location10 = await Location.findOne({
      where: { address: "Rosmarijnsteeg 4, 1012 RP Amsterdam" },
    });

    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          time: new Date(),
          content: "Amazing!",

          userId: user2.id,
          locationId: location1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "What a great barbershop!",

          userId: user4.id,
          locationId: location2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "What a treatment!",
          userId: user6.id,
          locationId: location3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Great attention to customer needs!",
          userId: user8.id,
          locationId: location4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "I feel like a new person!",
          userId: user2.id,
          locationId: location5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Reborn!",
          userId: user9.id,
          locationId: location6.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Fresh!",
          userId: user10.id,
          locationId: location7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Absolutely mesmerizing!",
          userId: user2.id,
          locationId: location8.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Some of the nicest people I ever met!",
          userId: user6.id,
          locationId: location9.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "I feel extraordinary!",
          userId: user4.id,
          locationId: location10.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Quick and amazing!",
          userId: user9.id,
          locationId: location3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Thank you for the best haircut ever!",

          userId: user8.id,
          locationId: location5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "They just made my day!",

          userId: user3.id,
          locationId: location7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "What a rush!",

          userId: user6.id,
          locationId: location9.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "So nice!",

          userId: user3.id,
          locationId: location10.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
