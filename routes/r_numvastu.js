const express = require("express");
const router = express.Router();
const Vastu = require("../models/m_numvastu");

//Retrive vastudetail
router.get("/", async (req, res) => {
  try {
    const vastu = await Vastu.find();
    res.json(vastu);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get vastudetail by id
router.get("/:id", async (req, res) => {
  try {
    const vastudetail = await Vastu.findById(req.params.id);
    res.json(vastudetail);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert vastudetail
router.post("/", async (req, res) => {
  try {
    const vastu = new Vastu({
      name: req.body.name,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      title: req.body.title,
      description: req.body.description,
    });
    const a1 = await vastu.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update vastudetail
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vastu = await Vastu.findByIdAndUpdate(id, req.body);

    if (!vastu) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatevastudetail = await Vastu.findById(id);
    res.status(200).json(updatevastudetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete vastudetail
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vastudetail = await Vastu.findByIdAndDelete(id, req.body);
    if (!vastudetail) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletevastudetail = await Vastu.findById(id);
    res.json({ deletevastudetail, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
