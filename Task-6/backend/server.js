require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authroutes")
const productRoutes = require("./routes/productRoutes")
const path = require("path")

const app = express();

app.use(cors())
app.use(express.json())
 

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(" Database Error:", err.message);
  });

  app.use("/api/auth", authRoutes)
  app.use("/api/products", productRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
