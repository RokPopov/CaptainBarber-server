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

module.exports = router;
