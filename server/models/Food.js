
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  foodName:{
    type:String,
    require:true,
  },
   
  selenium:{
    type:String,
    require:true,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;