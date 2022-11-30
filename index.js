require("dotenv").config();
// console.log("Hello World");
const express = require("express");

const server = express();

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
