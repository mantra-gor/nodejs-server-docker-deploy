exports.getHealth = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Server health is OKAY!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
