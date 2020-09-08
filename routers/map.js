const { Router } = require("express");

const Barbershop = require("../models").barbershop;
const Location = require("../models").location;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  const locations = await Location.findAll({
    limit,
    offset,
    include: [Barbershop],
  });
  res.status(200).send(locations);
});

module.exports = router;
