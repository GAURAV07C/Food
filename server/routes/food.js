const express = require("express");
const router = express.Router();

const {createFood,createManyFood,getallFood } = require("../controllers/Food");

router.post("/create",createFood);
router.post("/create/many",createManyFood);



router.get("/get/all",getallFood)






module.exports = router;