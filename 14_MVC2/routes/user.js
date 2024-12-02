const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET /
router.get("/", controller.main);

// POST /login
router.post("/login", controller.login);

module.exports = router;
