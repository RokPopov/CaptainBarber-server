const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const Barbershop = require("../models").barbershop;
const Location = require("../models").location;

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

module.exports = router;
