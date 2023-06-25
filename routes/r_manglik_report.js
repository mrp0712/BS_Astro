const express = require("express");
const router = express.Router();
const Manglik = require("../models/m_manglik_report");

//Retrive manglik_report
router.get("/", async (req, res) => {
  try {
    const manglik = await Manglik.find();
    res.json(manglik);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get manglik_report by id
router.get("/:id", async (req, res) => {
  try {
    const manglik_report = await Manglik.findById(req.params.id);
    res.json(manglik_report);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert manglik_report
router.post("/", async (req, res) => {
  try {
    const manglik = new Manglik({
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

      male: req.body.male,
      female: req.body.female,
      conclusion: req.body.conclusion
      
    });
    const a1 = await manglik.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update manglik_report
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const manglik = await Manglik.findByIdAndUpdate(id, req.body);

    if (!manglik) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatemanglik_report = await Manglik.findById(id);
    res.status(200).json(updatemanglik_report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete manglik_report
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const manglik_report = await Manglik.findByIdAndDelete(id, req.body);
    if (!manglik_report) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletemanglik_report = await Manglik.findById(id);
    res.json({ deletemanglik_report, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;