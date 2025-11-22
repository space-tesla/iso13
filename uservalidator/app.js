const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: "error",
      message: "Name and email are required"
    });
  }

  users.push({ name, email });

  res.json({
    status: "success",
    message: "User added successfully",
    data: { name, email }
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js

// TEST USING TERMINAL (curl):
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Vaibhav","email":"vaibhav@gmail.com"}' http://localhost:3000/users

// VIEW ALL USERS IN BROWSER:
// http://localhost:3000/users
