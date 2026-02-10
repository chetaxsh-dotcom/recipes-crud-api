const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/recipesDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const recipeRoutes = require("./routes/recipeRoutes");
app.use("/", recipeRoutes);

app.get("/test", (req, res) => res.send("test ok"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
