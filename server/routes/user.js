const express = require("express");
const router = express.Router();

const {searchFoodQuery , searchFoodBody , searchFoodParams} = require("../controllers/user");

router.get("/search",searchFoodQuery);

router.post('/searchFood', searchFoodBody);

router.get('/searchFood/:foodName', searchFoodParams);





module.exports = router;