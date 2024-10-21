exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email) {
      return res.status(400).json({ msg: "Please enter email !!!" });
    }

    if (!password) {
      return res.status(400).json({ msg: "Please enter password !!!" });
    }

    res.send(`Register success ${email} : ${password}`);
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    res.send("Hello Login!");
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
