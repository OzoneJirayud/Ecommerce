const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email) {
      return res.status(400).json({ msg: "Please enter email !!!" });
    }

    if (!password) {
      return res.status(400).json({ msg: "Please enter password !!!" });
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (user) {
      return res.status(404).json({ msg: "Email already exit !!" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email: email,
        passwords: hashPassword,
      },
    });

    res.send(`Register success ${email} : ${password}`);
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user || !user.enabled) {
      return res.status(400).json({ msg: "User Not found or not Enabled" });
    }

    const isMatch = await bcrypt.compare(password, user.passwords);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) {
        res.status(500).json({ msg: "Error signing request" });
      }
      res.json({ payload, token });
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.current_user = async (req, res) => {
  try {
    res.send("Hello Current User!");
  } catch (error) {
    console.log(error.message);
  }
};

exports.current_admin = async (req, res) => {
  try {
    res.send("Hello Current Admin!");
  } catch (error) {
    console.log(error.message);
  }
};
