const express = require("express");
const app = express();
const cors = require('cors');

app.listen(3000,()=>console.log(`server 3000`));

app.use((req,res,next)=>{
    console.log(req);
    next();
});

app.use(cors({
    origin: 'http://localhost:5000/'
}));

const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

app.get('/ingredients', (req, res) =>{
    res.send(ingredients);
});