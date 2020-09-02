"use strict";

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "john@john.com" },
    });

    const user5 = await User.findOne({
      where: { email: "frank@frank.com" },
    });

    const user7 = await User.findOne({
      where: { email: "tim@tim.com" },
    });

    await queryInterface.bulkInsert(
      "barbershops",
      [
        {
          title: "Gentlemen’s Barbershop",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 38,
          beardcutPrice: 35,
          comboPrice: 65,
          website: "https://gentlemensbarbershop.nl",
          email: "info@gentlemensbarbershop.nl",
          phoneNum: "+31-20-789-4211",
          openingHours:
            "MON-WED 8.20-19.00, THU-FRI 8.20-21.00, SAT 10.00-19.00",
          description:
            "At Gentlemen's Barbershop, Amsterdam, the 'old school barbershop' and the 'gentlemen look and feel' come together in a 'country and western style’.",
          image:
            "https://gentlemensbarbershop.nl/wp-content/uploads/2019/03/barbershop-mkm-amsterdam.jpg",
          rate: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          title: "The Barbershop Amsterdam",
          haircut: true,
          beardcut: true,
          combo: false,
          haircutPrice: 27.5,
          beardcutPrice: 27.5,
          comboPrice: null,
          website: "https://thebarbershopamsterdam.mytreatwell.nl",
          email: "info@thebarbershopamsterdam.nl",
          phoneNum: "+31-20-411-6688",
          openingHours:
            "TUE-FRI 10.00-19.00, MON&SAT 10.00-17.00, SUN 11.00-17.00",
          description:
            "For the real 'barber experience' you go to The Barbershop Amsterdam. The classic interior with custom-made motorcycles, together with the Chesterfields, provide the warm living room feeling for which you always want to return.",
          image:
            "https://cdn1.treatwell.net/images/view/v2.i1557154.w1080.h720.x6586F469/",
          rate: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "MOKUM Barbers",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 38,
          beardcutPrice: 35,
          comboPrice: 65,
          website: "https://mokumbarbers.com",
          email: "info@mokumbarbers.com",
          phoneNum: "+31-20-363-7656",
          openingHours:
            "MON-WED 10.00-19.00, THU&FRI 10.00-21.00, SAT&SUN 10.00-19.00",
          description:
            "MOKUM Barber is specialized in beards and men’s hair. We offer haircuts, fades and beard trims.",
          image: "https://mokumbarbers.com/wp-content/uploads/Barber-Model.jpg",
          rate: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Cut Throat Barber & Coffee",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 41,
          beardcutPrice: 31,
          comboPrice: 61,
          website: "https://cutthroatbarber.nl",
          email: null,
          phoneNum: "+31-6-253-43769",
          openingHours:
            "MON-WED 11.00-20.00, THU&FRI 11.00-00.00, SAT 10.00-00.00, SUN 11.00-19.00",
          description:
            "Cut Throat was never about a look or trend it was about creating a place we would want to hang out ourselves.",
          image:
            "https://cutthroatbarber.nl/wp-content/uploads/2018/09/Cutthroat-42-480x640.jpg",
          rate: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Van de Hare Amsterdam Barbers",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 50,
          beardcutPrice: 30,
          comboPrice: 77.5,
          website: "https://www.vandeharebarbers.amsterdam",
          email: "info@vandehare.nl",
          phoneNum: "+31-20-624-2089",
          openingHours: "TUE-FRI 8.30-17.30, SUN&MON Closed",
          description:
            "Van de Hare Amsterdam Barbers is located in the heart of Amsterdam and combines a rich history with contemporary Amsterdam flair. Exceeding your expectations is what drives us. That’s why we also offer traditional barber treatments. Lay back and enjoy the luxury of an Italian style shave.",
          image:
            "https://images.squarespace-cdn.com/content/v1/5e269dd34c567070ac02efad/1591363569964-NQZ8UNFZ5AIIZ2EUAORG/ke17ZwdGBToddI8pDm48kPg1j9_P-XkA-m6r16A64f97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s2R59z2HWVKMNU9GXmUK4UuBtEuUuWoOkJ9ezBk5falbtaC0kw418V_W48nZrnewA/9H2A1210-min.JPG?format=1500w",
          rate: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user5.id,
        },
        {
          title: "District Barber",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 45,
          beardcutPrice: 30,
          comboPrice: 55,
          website: "https://www.barberdistrict.nl",
          email: "thedistrictbarbers@gmail.com",
          phoneNum: "+31-20-772-9064",
          openingHours: "MON-SUN 11.00-19.00",
          description:
            "We offer premium barbering services by a friendly and skilled staff, plus a wide range of products for hair, beard and mustache care. Visit our barbershop in Amsterdam, we’re located right in the redlight district area.",
          image:
            "https://cdn1.treatwell.net/images/view/v2.i2349591.w720.h480.xC3F60BEF/",
          rate: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Barbershop Jordaan",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 35,
          beardcutPrice: 20,
          comboPrice: 47.5,
          website: "https://www.barbershopjordaan.nl",
          email: "info@barbershopjordaan.nl",
          phoneNum: "+31-6-489-33524",
          openingHours:
            "MON 12.00-18.00, TUE&WED  10.30-18.00, THU 10.30-19.00, FRI&SAT 10.30-18.00, SUN Closed",
          description:
            "In recent years we have grown into a unique barbershop, where craftsmanship & passion for the profession comes into its own. Years of experience in cutting ensures that we create unique hairstyles.",
          image:
            "https://www.barbershopjordaan.nl/wp-content/uploads/2020/07/barbershop_jordaan_yamo_2_optimized.jpg",
          rate: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Rogue Razor - Barbershop",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 49,
          beardcutPrice: 30,
          comboPrice: 73,
          website: "https://www.roguerazor.nl/index.html",
          email: "mail@roguerazor.nl",
          phoneNum: "+31-20-845-3778",
          openingHours: "TUE-THU 12.00-20.00, FRI&SUN  10.00-18.00, MON Closed",
          description:
            "Inspiration, creativity and personal services are key to our business. We strive for sustainability with interior choices and products - Sustainable Beauty. For example over 95% of the lighting is LED or similar, bamboo floor, we wash towels on low temperatures and we use Green Choice for energy.",
          image:
            "https://www.barbershopjordaan.nl/wp-content/uploads/2020/07/barbershop_jordaan_yamo_2_optimized.jpg",
          rate: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user7.id,
        },
        {
          title: "Barbershop Qlippers",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 30,
          beardcutPrice: 30,
          comboPrice: 40,
          website: "https://www.qlippers.com",
          email: null,
          phoneNum: "+31-6-469-50140",
          openingHours: "TUE-SAT 11.00-19.00, SUN&MON Closed",
          description:
            "Barbershop Qlippers is a salon where the professionalism, house rules, ambience and love for the craft are prioritized. A warm greeting from everyone to everyone is something that plays a big part in the warm and familiar feeling that we like to see back in the daily atmosphere. Our dream team consists of real professionals who can handle all hair types and styles. Book your appointment! And come along to taste the atmosphere and treat yourself to one of our treatments!",
          image:
            "https://static.wixstatic.com/media/2a982b_05698ba474804165a9a76c3021332dda~mv2.png/v1/fill/w_1920,h_1080,al_c,q_95/2a982b_05698ba474804165a9a76c3021332dda~mv2.webp",
          rate: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "HaarBarbaar",
          haircut: true,
          beardcut: true,
          combo: true,
          haircutPrice: 50,
          beardcutPrice: 20,
          comboPrice: 65,
          website: "https://haarbarbaar.nl/",
          email: "info@haarbarbaar.nl",
          phoneNum: "+31-20-341-7683",
          openingHours: "MON-FRI 10.30-18.00, SAT  10.00-17.00, SUN Closed",
          description: "The real barbershop!",
          image: "https://haarbarbaar.nl/wp-content/uploads/2019/07/shop.jpg",
          rate: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("barbershops", null, {});
  },
};
