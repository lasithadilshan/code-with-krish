const express = require('express');
const { getMinNumber } = require('./util.js');

const app = express();
const port = 3000;

app.get('/number/max', (req, res) => {});
app.get('/number/avg', (req, res) => {}); ///number/avg?numbers=1,4,7,44,676,.....n
app.get('/number/sort', (req, res) => {});///
app.get('/number/count', (req, res) => {});

// const greeting = { message: "Hello node" };

app.get('/number/min', (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = getMinNumber(num1, num2);

    res.status(result.status).json(result.data);

    // console.log(`compare ${num1} with ${num2} as num1<num2 ${num1 < num2}`);

    // if (isNaN(num1) || isNaN(num2)) {
    //     res.status(400).json({error: 'both values must be number'});
    // }
    // res.json({min: Math.min(num1, num2)});
    // res.json({min: num1 > num2 ? num2 : num1});
    // res.json(getValue);

});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});