"use strict";

const Barbershop = require("../models").barbershop;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const location1 = await Barbershop.findOne({
      where: { title: "Gentlemen’s Barbershop" },
    });

    const location2 = await Barbershop.findOne({
      where: { title: "The Barbershop Amsterdam" },
    });

    const location3 = await Barbershop.findOne({
      where: { title: "MOKUM Barbers" },
    });

    const location4 = await Barbershop.findOne({
      where: { title: "Cut Throat Barber & Coffee" },
    });

    const location5 = await Barbershop.findOne({
      where: { title: "Van de Hare Amsterdam Barbers" },
    });

    const location6 = await Barbershop.findOne({
      where: { title: "District Barber" },
    });

    const location7 = await Barbershop.findOne({
      where: { title: "Barbershop Jordaan" },
    });

    const location8 = await Barbershop.findOne({
      where: { title: "Rogue Razor - Barbershop" },
    });

    const location9 = await Barbershop.findOne({
      where: { title: "Barbershop Qlippers" },
    });

    const location10 = await Barbershop.findOne({
      where: { title: "HaarBarbaar" },
    });

    await queryInterface.bulkInsert(
      "locations",
      [
        {
          address: "Kinkerstraat 4, 1053 DT Amsterdam",
          longitude: 4.8635883,
          latitude: 52.3648857,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location1.id,
        },
        {
          address: "Burgemeester Rendorpstraat 11-15, 1064 EL Amsterdam",
          longitude: 4.826533,
          latitude: 52.373998,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location2.id,
        },
        {
          address: "Bakkersstraat 13, 1017 CW Amsterdam",
          longitude: 4.897414,
          latitude: 52.366769,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location3.id,
        },
        {
          address: "Beursplein 5, 1012 JW Amsterdam",
          longitude: 4.895919,
          latitude: 52.374174,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location4.id,
        },
        {
          address: "Singel 274, 1016 AC Amsterdam",
          longitude: 4.888125,
          latitude: 52.372335,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location5.id,
        },
        {
          address: "Oudezijds Achterburgwal 80 B, 1012 DR Amsterdam",
          longitude: 4.898404,
          latitude: 52.373193,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location6.id,
        },
        {
          address: "Eerste Looiersdwarsstraat 2, 1016 VM Amsterdam",
          longitude: 4.880697,
          latitude: 52.369322,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location7.id,
        },
        {
          address: "Mauritskade 112H, 1093 RT Amsterdam",
          longitude: 4.926435,
          latitude: 52.365466,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location8.id,
        },
        {
          address: "Willem Schoutenstraat 53, 1057 DM Amsterdam",
          longitude: 4.850458,
          latitude: 52.366684,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location9.id,
        },
        {
          address: "Rosmarijnsteeg 4, 1012 RP Amsterdam",
          longitude: 4.889554,
          latitude: 52.370478,
          createdAt: new Date(),
          updatedAt: new Date(),
          barbershopId: location10.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
