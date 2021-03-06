var express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var router = express.Router();
var User = require("../Model/User");
var auth = require("../middleware/auth");
const SECRET_KEY = "qwerty";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", async (req, res, next) => {
  // console.log(req.body)
  let { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please fill all field" });
  }
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "user already exist" });

    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            SECRET_KEY,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});
router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "please fill all field" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "user does not exist" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        SECRET_KEY,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

router.get("/user", auth, (req, res) => {
  console.log(req.body);
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({
        msg: "error",
      });
    });
});

module.exports = router;

