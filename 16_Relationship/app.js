const express = require("express");
const app = express();
const PORT = 8080;
const sequelize = require("./models");
// db=

// set middleware
app.set("view engie", "ejs");
app.use(express.urlencoded({}));
app.use(());

// router 설정

// sync()
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
