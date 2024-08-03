// const express = require('express');
// const app = express();

// const data = [
//   {
//     "foodName": "Abalone",
//     "selenium_content": "45.6 mcg per 100g"
//   },
//   // ... rest of the data ...
// ];

// const foodNameData = {};
// data.forEach((item) => {
//   foodNameData[item.foodName] = item.selenium_content;
// });

// app.use(express.json());

// app.get('/api/selenium-content', (req, res) => {
//   const foodNameName = req.query.foodName;
//   if (foodNameName) {
//     const seleniumContent = foodNameData[foodNameName];
//     if (seleniumContent) {
//       res.json({ seleniumContent , foodNameName  });
//     } else {
//       res.status(404).json({ error: 'foodName not found' });
//     }
//   } else {
//     res.status(400).json({ error: 'foodName name is required' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });





// app.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// // Connect to MongoDB database
// mongoose.connect(
//   "mongodb+srv://gaurav:9rbkkNZRnwHbR0w2@cluster0.gcnth0p.mongodb.net/foodNameAndSelenium",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// // Define the foodName model
// const foodNameSchema = new mongoose.Schema({
//   foodName: String,
//   selenium_content: String,
// });

// const foodName = mongoose.model("foodName", foodNameSchema);

// app.post("/api/foodName", (req, res) => {
//   if (!req.body || !Array.isArray(req.body)) {
//     return res.status(400).send({ message: "Invalid request body" });
//   }

//   const foodNameData = req.body;
//   foodName.insertMany(foodNameData, (err, docs) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send({ message: "Error storing foodName data" });
//     } else {
//       res.send({ message: "foodName data stored successfully" });
//     }
//   });
// });

// // Create a route to store foodName data
// // app.post('/api/foodName', (req, res) => {
// //   const foodNameData = req.body;
// //   foodName.insertMany(foodNameData, (err, docs) => {
// //     if (err) {
// //       res.status(500).send({ message: 'Error storing foodName data' });
// //     } else {
// //       res.send({ message: 'foodName data stored successfully' });
// //     }
// //   });
// // });

// // Create a route to search for a specific foodName item by name
// app.get("/api/foodName/search/:foodNameName", (req, res) => {
//   const foodNameName = req.params.foodNameName;
//   foodName.findOne({ foodName: foodNameName }, (err, foodName) => {
//     if (err) {
//       res.status(404).send({ message: "foodName not found" });
//     } else if (!foodName) {
//       res.status(404).send({ message: "foodName not found" });
//     } else {
//       res.send({ selenium_content: foodName.selenium_content });
//     }
//   });
// });

app.get("/", (req, res) => {
    res.status("hlo");
//   return res.status(200).json({
//     success:true,
//     message:"data fetch successfully"
//   });
});

// Start the server
const port = 4000;
app.listen(4000, () => {
  console.log(`Server started on port ${port}`);
});
