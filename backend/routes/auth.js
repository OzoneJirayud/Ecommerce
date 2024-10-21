const express = require("express");
const router = express.Router();

const {
  register,
  login,
  current_user,
  current_admin,
} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/current-user", current_user);
router.post("/current-admin", current_admin);

module.exports = router;
