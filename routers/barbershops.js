const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const Barbershop = require("../models").barbershop;
const Location = require("../models").location;
const Review = require("../models").review;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 20;
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
    include: [{ model: Location, include: { model: Review, include: [User] } }],
  });
  console.log("what do we get", barbershopById);
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
    address,
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

    const location = await Location.create({
      address,
      barbershopId: addBarbershop.id,
    });

    res.status(200).send({ addBarbershop, location });
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/:id/review", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  const user = req.user;
  //const location = req.location;
  if (!user) {
    return res.status(400).send("User doesn't exist");
  }

  if (!content) {
    return res.status(400).send("Please provide some review content");
  }

  if (isNaN(parseInt(id))) {
    return res.status(400).send("Id is not a number");
  }

  try {
    console.log("what is request", req.body);
    console.log("user", user);

    const barbershop = await Barbershop.findByPk(parseInt(id), {
      include: [{ model: Location, include: [Review] }],
    });
    console.log("barbershop", barbershop);
    const postReview = await Review.create({
      time: new Date(),
      content,
      userId: user.id,
      locationId: barbershop.id,
    });

    console.log("new review", postReview);
    res.status(200).send(postReview);
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
