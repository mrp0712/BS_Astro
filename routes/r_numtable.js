const express = require("express");
const router = express.Router();
const Numtable = require("../models/m_numtable");

//Retrive numero
router.get("/", async (req, res) => {
  try {
    const numtable = await Numtable.find();
    res.json(numtable);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get numero by id
router.get("/:id", async (req, res) => {
  try {
    const numero = await Numtable.findById(req.params.id);
    res.json(numero);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert numero
router.post("/", async (req, res) => {
  try {
    const numtable = new Numtable({
      name: req.body.name,
      date: req.body.date,
      destiny_number: req.body.destiny_number,
      radical_number: req.body.radical_number,
      name_number: req.body.name_number,
      evil_num: req.body.evil_num,
      fav_color: req.body.fav_color,
      fav_day: req.body.fav_day,
      fav_god: req.body.fav_god,
      fav_mantra: req.body.fav_mantra,
      fav_metal: req.body.fav_metal,
      fav_stone: req.body.fav_stone,
      fav_substone: req.body.fav_substone,
      friendly_num: req.body.friendly_num,
      neutral_num: req.body.neutral_num,
      radical_num: req.body.radical_num,
      radical_ruler: req.body.radical_ruler,
    });
    const a1 = await numtable.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update numero
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const numtable = await Numtable.findByIdAndUpdate(id, req.body);

    if (!numtable) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatenumero = await Numtable.findById(id);
    res.status(200).json(updatenumero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete numero
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const numero = await Numtable.findByIdAndDelete(id, req.body);
    if (!numero) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletenumero = await Numtable.findById(id);
    res.json({ deletenumero, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
