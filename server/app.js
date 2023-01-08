const express = require("express");
const app = express();
app.use(express.json());

// CORS
const cors=require("cors");
const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))
// END CORS

const start = async () => {
  try {
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send(200);
})

let username;
let password;

app.post("/login", (req, res) => {
  username = req.body.username;
  password = req.body.password;
  console.log(req.body);
  if(username === 'user' && password === '123') {
    res.send({username: req.body.username, password: req.body.password});
  } else {
    res.status(400).send({
      message: "Incorrect username and password"
    })
  }
})

app.get("/loginData", (req, res) => {
  res.send({username: username, password: password})
})

start();
