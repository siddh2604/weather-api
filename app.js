const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const fetch = require("node-fetch");

const https = require("https");
// const { log } = require("console");

app.listen(3000, function () {
    console.log("server 3000");
});

app.get("/", async function (req, res) {
    const api = "https://api.openweathermap.org/data/2.5/weather?q=rajkot&appid=b125b808313c83b447073ce4ad42bd02&units=metric";


    //Using https module
    // https.get(api, function (resp) {
    //     console.log(resp.statusCode);

    //     resp.on("data", function (data) {

    //         const a = JSON.parse(data);
    //         const temp = a.main.temp;

    //         const wdesc = a.weather[0].description

    //         res.send("Temperature at " + a.name + " is " + temp + " " + wdesc);
    //     });
    // });



    //Using fetch api 
    // try {
    //     const weather = await fetch(api);
    //     console.log(await weather.json());
    // } catch (error) {
    //     // TypeError: Failed to fetch
    //     console.log("asdfasdf   ",error);
    // }

    const weather = await fetch(api);
    const a = await weather.json();
    const temp = a.main.temp;
    const wdesc = a.weather[0].description;
    const icon = a.weather[0].icon;
    // const img = fetch("https://openweathermap.org/img/wn/"+icon+".png");
    // console.log(await weather.json());
    res.write("<h1>Temperature at " + a.name + " is " + temp + "</h1>");//we can have multiple res.write methods but we can have only one res.send method
    res.write("<p>The weather description is " + wdesc + "</p>");
    res.write(`<img src="https://openweathermap.org/img/wn/` + icon + `@2x.png" style="background-color:blue;">`)
    res.send();
});

app.get("/index1.html", function (req, res) {
    res.sendFile(__dirname + "/index1.html");
});
app.post("/index1.html", async function (req, res) {
    const city = req.body.cityName;
    console.log(city);
    const apiKey = "b125b808313c83b447073ce4ad42bd02";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";


    const weather = await fetch(url);
    const a = await weather.json();
    const temp = a.main.temp;
    const wdesc = a.weather[0].description;
    const icon = a.weather[0].icon;

    res.write("<h1>Temperature at " + a.name + " is " + temp + "</h1>");//we can have multiple res.write methods but we can have only one res.send method
    res.write("<p>The weather description is " + wdesc + "</p>");
    res.write(`<img src="https://openweathermap.org/img/wn/` + icon + `@2x.png" style="background-color:lightblue;">`);
    res.send();
});

