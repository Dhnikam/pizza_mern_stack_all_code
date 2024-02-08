const express = require("express");
const router = express.Router();
const pizzaModel = require('../models/PizzaModel');

router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newPizza = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      variants: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      cheese: pizza.cheese, // Add cheese property
      sauce: pizza.sauce, // Add sauce property
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error.message });
  }
});



router.post("/getpizzabyid", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await pizzaModel.findOne({ _id: pizzaId });
    res.send(pizza);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/updatepizza", async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await pizzaModel.findOne({ _id:updatedPizza._id });
    pizza.name = updatedPizza.name;
    pizza.image = updatedPizza.image;
    pizza.category = updatedPizza.category;
    pizza.cheese = updatedPizza.cheese; // Update cheese property
    pizza.sauce =updatedPizza.sauce; // Update sauce property
    pizza.prices = updatedPizza.prices;
    await pizza.save();
    res.status(200).send("Pizza updated successfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await pizzaModel.deleteOne({ _id: pizzaId });
    res.status(200).send("Pizza deleted successfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
