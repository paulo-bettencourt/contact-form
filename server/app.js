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

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({username: req.body.username, password: req.body.password});
})

start();
