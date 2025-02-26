function getMinNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return {
            status: 400,
            data: {
                error: `both parameters should be numbers`,
            },
        };
    }
    return {
        status: 200,
        data: { min: Math.min(num1, num2) },
    };
}



function getMaxNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return {
            status: 400,
            data: {
                error: `both parameters should be numbers`,
            },
        };
    }
    return {
        status: 200,
        data: { max: Math.max(num1, num2) },
    };
}


function getAvgNumber(numbers) {
    
    let splitNumbers = numbers.split(",");
    
    const numberArray = splitNumbers.map(number => {
        return parseFloat(number);
    })
    
    if (numberArray.some(isNaN)) {
        return { 
            status: 400,
            data: { 
                error: "Please check your values again" 
            },
        };
    }
    
    var total = 0;
    
    numberArray.forEach(num => {
        console.log(num);
        total += parseInt(num);
    });
    
    let avg = total / numberArray.length;
    
    return { 
        status: 200,
        data: { avg: avg } }
}



module.exports = { 
    getMinNumber, 
    getMaxNumber, 
    getAvgNumber 
};