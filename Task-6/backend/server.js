require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authroutes")
const productRoutes = require("./routes/productRoutes")

const app = express();

app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ Database Error:", err.message);
  });


 
  //ROutes 
  app.use("/api/auth", authRoutes)
  app.use("/api/products", productRoutes)

//TEst routs 

app.get("/", (req, res) => {
    res.json({message: "Inventory Management API Running"})
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
