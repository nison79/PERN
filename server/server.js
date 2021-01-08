require("dotenv").config();
const db = require("./db");

const morgan = require("morgan");

const express = require("express");

const app = express();

//middleware
app.use(express.json());



//get all users
app.get("/api/v1/users" , async (req , res) => {
  try {
    const results = await db.query("SELECT * FROM users");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        users: results.rows ,
      },
    });
  } catch (error) {
    console.log(err);
  }

});



//GET ONE USER
app.get("/api/v1/users/:id" , async (req ,res) => {
  console.log(req.params.id);


  try {
    const results = await db.query("SELECT * FROM users WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status:"success", 
      data: {
        user: results.rows[0],
      }
    })
  } catch (error) {
    console.log(err);
  }

  
});




//CREATE USER



app.post("/api/v1/users" , async (req , res) => {
  console.log(req.body);

  try {
    const results = await db.query("INSERT INTO users(id,ip,name,time_in,time_out,places_visits,email) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *"  , [req.body.id, req.body.ip, req.body.name, req.body.time_in, req.body.time_out, req.body.places_visits, req.body.email]);
    console.log(results);
    res.status(201).json({
      status:"success", 
      data: {
        user: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error)
  }

  
});




//Update users
app.put("/api/v1/users/:id" , async  (req , res) => {
try {
  const results = await db.query("UPDATE users SET id=$1 , ip=$2 , name=$3, time_in=$4, time_out=$5 , places_visits=$6 , email=$7 WHERE id=$8 returning *" , [req.body.id, req.body.ip, req.body.name, req.body.time_in, req.body.time_out, req.body.places_visits, req.body.email, req.params.id]);
  console.log(results);
  res.status(200).json({
    status:"success", 
    data: {
      user: results.rows[0],
    },
  });
} catch (error) {
  console.log(error);
}

});





//DELETE USER

app.delete("/api/v1/users/:id" , async  (req , res) => {
  try {
    const results = db.query("DELETE FROM users WHERE id = $1" , [req.params.id])
    res.status(204).json({
      status: "success"
    });
  } catch (error) {
    console.log(error)
  }
  
});









const port =process.env.PORT || 3001;


app.listen(port , () => {
  console.log(`server is running in port ${port}`);
});