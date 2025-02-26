const express = require('express');
const { getMinNumber, getMaxNumber, getAvgNumber, getSortedNumbers, getCountNumber } = require('./util.js');

const app = new express();
const port = 3000;

// 1. GET /number/max - Returns the maximum number from a list of numbers
app.get('/number/max', (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // const numbers = [5, 10, 3, 99, 2];
    const result = getMaxNumber(num1, num2);

    res.status(result.status).json(result.data);

});

// 2. GET /number/avg - Returns the average of a list of numbers
app.get('/number/avg', (req, res) => {
    const numbers = req.query.numbers;

    const result = getAvgNumber(numbers);
    res.send(result);
}); ///number/avg?numbers=1,4,7,44,676,......n

// 3. GET /number/sort - Returns a list of numbers sorted in ascending or descending order
app.get('/number/sort', (req, res) => {
    const numbersParam = req.query.numbers;
    const sortType = req.query.type;
    const result = getSortedNumbers(numbersParam, sortType);
    res.status(result.status).json(result.data);
}); ///number/sort?numbers=1,4,7,44,676,......n&type (asc |dec)

// 4. GET /number/count - Counts occurrences of a specific value in a list
app.get('/number/count', (req, res) => {
    const numbers = req.query.numbers;
    const search = req.query.search;

    // Validate required parameters
    if (!numbers || !search) {
        return res.status(400).json({
            error: "Both 'numbers' and 'search' parameters are required"
        });
    }

    const result = getCountNumber(numbers, search);
    res.status(result.status).json(result.data);
}); ///number/count?numbers=1,A,saman,Kamal,676,......n&search=saman //need to return how many occurances

app.get('/number/min', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = getMinNumber(num1, num2);

    res.status(result.status).json(result.data);
});
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});