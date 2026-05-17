const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");
const { getHealth } = require("../controllers/healthCheckup");

router.get("/", (req, res) => {
  return res.status(200).json({
    data: "Hello World",
  });
});

router.get("/health", getHealth);
router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

module.exports = router;
