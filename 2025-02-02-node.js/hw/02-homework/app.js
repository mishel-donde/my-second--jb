const express = require("express");
const axios = require(" axios");

const app = express();

const getUsers = async (req, res, next) => {
  const users = await axios("https://jsonplaceholder.typicode.com/users");
  res.json(users);
};

Server.get("/user", getUsers);
Server.get("/user", getUser);

app.listen(3000, () => console.log("started..."));
