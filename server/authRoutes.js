const express = require("express");
const collection = require("./MongoDB");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const check = await collection.findOne({ email });

    if (check) {
      const isMatch = await bcrypt.compare(password, check.password);
      if (isMatch) {
        res.json("exist");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const check = await collection.findOne({email: email });

    if (check) {
      return res.json("exist");
    } 
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
      name,
      email,
      password: hashedPassword, // Store the hashed password
    };
    
    await collection.insertMany([data]);
    res.json("Sign Up Successfull");
    
  } catch (e) {                                       
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("Auth Port Connected");
});

