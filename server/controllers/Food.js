const mongoose = require("mongoose");
const Food = require("../models/Food");

exports.createFood = async (req, res) => {
  try {
    const { foodName, selenium } = req.body;

    if (!foodName || !selenium) {
      res.json({
        success: false,
        message: "all fields require",
      });
    }

    const food = await Food.create({ foodName, selenium });

    console.log(food);

    return res.status(200).json({
      success: true,
      message: "Success",
      food,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.createManyFood = async (req, res) => {
  try {
    const foods = req.body;

    if (!foods || !Array.isArray(foods)) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
      });
    }

    const result = await Food.insertMany( foods
    );

    return res.status(201).json({
      success: true,
      message: "Food data inserted successfully",
      result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getallFood = async (req, res) => {
  try {
    const foods = await Food.find().exec();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};