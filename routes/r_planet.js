const express = require("express");
const router = express.Router();
const Planet = require("../models/m_planet");

//Retrive planetdetail
router.get("/", async (req, res) => {
  try {
    const planet = await Planet.find();
    res.json(planet);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get planetdetail by id
router.get("/:id", async (req, res) => {
  try {
    const planetdetail = await Planet.findById(req.params.id);
    res.json(planetdetail);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert planetdetail
router.post("/", async (req, res) => {
  try {
    const planets = new Planet({
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      hour: req.body.hour,
      min: req.body.min,
      lat: req.body.lat,
      lon: req.body.lon,
      tzone: req.body.tzone,
      planet: req.body
        });
    const a1 = await planets.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update planetdetail
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByIdAndUpdate(id, req.body);

    if (!planet) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updateplanetdetail = await Planet.findById(id);
    res.status(200).json(updateplanetdetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete planetdetail
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const planetdetail = await Planet.findByIdAndDelete(id, req.body);
    if (!planetdetail) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deleteplanetdetail = await Planet.findById(id);
    res.json({ deleteplanetdetail, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;