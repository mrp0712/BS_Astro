const express = require("express");
const router = express.Router();
const Astro = require("../models/m_astro");

//Retrive astrodetail
router.get("/", async (req, res) => {
  try {
    const astro = await Astro.find();
    res.json(astro);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get astrodetail by id
router.get("/:id", async (req, res) => {
  try {
    const astrodetail = await Astro.findById(req.params.id);
    res.json(astrodetail);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert astrodetail
router.post("/", async (req, res) => {
  try {
    const astro = new Astro({
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      hour: req.body.hour,
      min: req.body.min,
      lat: req.body.lat,
      lon: req.body.lon,
      tzone: req.body.tzone,
      ascendant: req.body.ascendant,
      ascendant_lord: req.body.ascendant_lord,
      Varna: req.body.Varna,
      Vashya: req.body.Vashya,
      Yoni: req.body.Yoni,
      Gan: req.body.Gan,
      Nadi: req.body.Nadi,
      SignLord: req.body.SignLord,
      sign: req.body.sign,
      Naksahtra: req.body.Naksahtra,
      NaksahtraLord: req.body.NaksahtraLord,
      Charan: req.body.Charan,
      Yog: req.body.Yog,
      Karan: req.body.Karan,
      Tithi: req.body.Tithi,
      yunja: req.body.yunja,
      tatva: req.body.tatva,
      name_alphabet: req.body.name_alphabet,
      paya: req.body.paya
    });
    const a1 = await astro.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update astrodetail
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const astro = await Astro.findByIdAndUpdate(id, req.body);

    if (!astro) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updateastrodetail = await Astro.findById(id);
    res.status(200).json(updateastrodetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete astrodetail
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const astrodetail = await Astro.findByIdAndDelete(id, req.body);
    if (!astrodetail) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deleteastrodetail = await Astro.findById(id);
    res.json({ deleteastrodetail, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;