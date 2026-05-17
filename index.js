const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());
app.use("/", userRoutes);

const PORT = process.env.PORT;

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
