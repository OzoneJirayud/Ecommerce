exports.create = async (req, res) => {
  try {
    res.send("Created Category");
  } catch (error) {
    console.log(error);
    res.status(500).send({ mesage: "Error creating category" });
  }
};

exports.list = async (req, res) => {
  try {
    res.send("List Category");
  } catch (error) {
    console.log(error);
    res.status(500).send({ mesage: "Error list category" });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;

    res.send(`Remove Category ${id}`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ mesage: "Error remove category" });
  }
};
