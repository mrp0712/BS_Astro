const express = require("express");
const router = express.Router();
const Kundli_Match = require("../models/m_kundli_matching");

//Retrive kundli_match
router.get("/", async (req, res) => {
  try {
    const kundli = await Kundli_Match.find();
    res.json(kundli);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get kundli_match by id
router.get("/:id", async (req, res) => {
  try {
    const kundli_match = await Kundli_Match.findById(req.params.id);
    res.json(kundli_match);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert kundli_match
router.post("/", async (req, res) => {
  try {
    const kundli = new Kundli_Match({
      mday: req.body.mday,
      mmonth: req.body.mmonth,
      myear: req.body.myear,
      mhour: req.body.mhour,
      mmin: req.body.mmin,
      mlat: req.body.mlat,
      mlon: req.body.mlon,
      mtzone: req.body.mtzone,
      
      fday: req.body.fday,
      fmonth: req.body.fmonth,
      fyear: req.body.fyear,
      fhour: req.body.fhour,
      fmin: req.body.fmin,
      flat: req.body.flat,
      flon: req.body.flon,
      ftzone: req.body.ftzone,
      male_astro_details: req.body.male_astro_details,
      female_astro_details: req.body.female_astro_details
    });
    const a1 = await kundli.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update kundli_match
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const kundli = await Kundli_Match.findByIdAndUpdate(id, req.body);

    if (!kundli) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatekundli_match = await Kundli_Match.findById(id);
    res.status(200).json(updatekundli_match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete kundli_match
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const kundli_match = await Kundli_Match.findByIdAndDelete(id, req.body);
    if (!kundli_match) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletekundli_match = await Kundli_Match.findById(id);
    res.json({ deletekundli_match, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;