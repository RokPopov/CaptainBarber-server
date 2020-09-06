const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const Barbershop = require("../models").barbershop;
const Location = require("../models").location;
const Review = require("../models").review;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const barbershops = await Barbershop.findAll({
    limit,
    offset,
    include: [Location],
  });
  res.status(200).send(barbershops);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const barbershopById = await Barbershop.findByPk(parseInt(id), {
    include: [{ model: Location, include: [Review] }],
  });
  if (!barbershopById) {
    return res.status(400).send("Barbershop doesn't exist");
  }
  if (isNaN(parseInt(id))) {
    return res.status(400).send("Id should be a number");
  }
  res.status(200).send(barbershopById);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  const barbershop = await Barbershop.findByPk(parseInt(id));
  if (!barbershop) {
    return res.status(400).send("Barbershop does not exist");
  }
  const updatedBarbershop = await barbershop.increment({
    rate: 1,
  });
  res.status(200).send(updatedBarbershop);
});

router.post("/addbarbershop", authMiddleware, async (req, res) => {
  const {
    title,
    haircut,
    beardcut,
    combo,
    haircutPrice,
    beardcutPrice,
    comboPrice,
    website,
    email,
    phoneNum,
    openingHours,
    description,
    image,
  } = req.body;
  const user = req.user;
  if (!title || !haircut || !beardcut || !combo || !website || !openingHours) {
    return res.status(400).send("Please provide all required information");
  }

  try {
    const addBarbershop = await Barbershop.create({
      title,
      haircut,
      beardcut,
      combo,
      haircutPrice,
      beardcutPrice,
      comboPrice,
      website,
      email,
      phoneNum,
      openingHours,
      description,
      image,
      userId: user.id,
    });
    res.status(200).send({ addBarbershop });
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
