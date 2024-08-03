const Food = require('../models/Food');
exports.searchFoodQuery = async (req,res) =>{
    const foodName = req.query.food;
  try {
    const food = await Food.findOne({ foodName });
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }


    res.json({
          foodName:food.foodName,
        selenium: food.selenium});
        
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



exports.searchFoodBody = async (req, res) => {
  const { foodName } = req.body;
  try {
    const food = await Food.findOne({ foodName });
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    res.json({
      foodName: food.foodName,
      selenium: food.selenium
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

exports.searchFoodParams = async (req, res) => {
  const foodName = req.params.foodName;
  try {
    const food = await Food.findOne({ foodName });
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    res.json({
      foodName: food.foodName,
      selenium: food.selenium
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}