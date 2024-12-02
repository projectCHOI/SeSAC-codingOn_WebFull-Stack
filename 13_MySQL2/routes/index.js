// 13_MySQL2/routes/index.js
const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitors", controller.getVistors);
module.exports = router;
