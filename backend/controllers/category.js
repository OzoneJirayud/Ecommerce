const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    res.send({ mesage: "Create category successfully", category });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mesage: "Error creating category" });
  }
};

exports.list = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.send(category);
  } catch (error) {
    console.log(error);
    res.status(500).send({ mesage: "Error list category" });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.send("Delete category successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({ mesage: "Error remove category" });
  }
};
