const express = require("express");
const app = express();
const databse = require("./config/database");
// const cookieParser = require("cookie-parser");
const Cors = require("cors");
const foodRouter = require("./routes/food")
const userRoute = require("./routes/user")

databse.connect()
require("dotenv").config();
// app.use(cookieParser())

app.use(express.json());
app.use(
  Cors({
      origin:"http://localhost:3000",
      credentials:true,
  })
)
app.use("/api/v1/food",foodRouter);
app.use("/api/v1/food/user",userRoute);

const PORT = process.env.PORT || 4000;

app.get("/",(req,res) => {
    return res.status(200).json({
    success:true,
    message:"data fetch successfully"
  });
})

app.listen(4000, () => {
  console.log(`Server started on port 4000`);
});
