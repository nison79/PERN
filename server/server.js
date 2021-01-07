require("dotenv").config();
const db = require("./db");

const morgan = require("morgan");

const express = require("express");

const app = express();

//middleware
app.use(express.json());



//get all users
app.get("/api/v1/users" , async (req , res) => {

  const results = await db.query("SELECT * FROM users");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      users: ["george","elli","stella"]
    }
  })
});

//GET ONE USER
app.get("/api/v1/users/:id" ,(req ,res) => {
  console.log(req.params);
  res.status(200).json({
    status:"success", 
    data: {
      user:"petros"
    }
  })
});

//CREATE USER

app.post("/api/v1/users" , (req , res) => {
  console.log(req.body);
  res.status(201).json({
    status:"success", 
    data: {
      user:"petros"
    }
  })
})

//Update users
app.put("/api/v1/users/:id" , (req , res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status:"success", 
    data: {
      user:"petros"
    }
  });
});

//DELETE USER

app.delete("/api/v1/users/:id" , (req , res) => {
  res.status(204).json({
    status: "success"
  });
});


const port =process.env.PORT || 3001;


app.listen(port , () => {
  console.log(`server is running in port ${port}`);
});