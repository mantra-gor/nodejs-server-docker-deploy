const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
