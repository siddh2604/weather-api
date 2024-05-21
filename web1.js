const express = require("express");
const app = express();
const fetch = require("node-fetch");
const axios = require("axios");
app.listen(5000, () => console.log(`server 5000`));

const cors = require('cors');


app.get("/", async (req, res) => {

    axios.post('http://localhost:3000/',)
      .then(function (response) {
        // console.log(response);
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    res.send("hello");

});

