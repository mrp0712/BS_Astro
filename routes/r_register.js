const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Register = require("../models/m_register");


//Retrive register
router.get("/", async (req, res) => {
  try {
    const register = await Register.find();
    res.json(register);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get register by id
router.get("/:id", async (req, res) => {
  try {
    const register = await Register.findById(req.params.id);
    res.json(register);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert register
router.post("/", async (req, res) => {
  try {
    const { name, email, dob, password } = req.body;
    const regi = new Register({ name, email, dob, password });
    const savedRegister = await regi.save();
    res.json(savedRegister);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

// Update register
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findByIdAndUpdate(id, req.body);

    if (!register) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updateregister = await Register.findById(id);
    res.status(200).json(updateregister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete chaughadiya
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findByIdAndDelete(id, req.body);
    if (!register) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deleteregister = await Register.findById(id);
    res.json({ deleteregister, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;