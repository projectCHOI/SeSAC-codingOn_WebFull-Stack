const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET /
router.get("/", controller.main);

router.post("/login", controller.login);

module.exports = router;
