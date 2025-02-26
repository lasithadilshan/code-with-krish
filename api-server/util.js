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

    // Split into array and validate
    const splitNumbers = numbers.split(",");

    // Convert to numbers and check validity
    const numberArray = splitNumbers.map(num => parseFloat(num.trim()));

    // Check for invalid numbers
    if (numberArray.some(isNaN)) {
        return {
            status: 400,
            data: {
                error: "All values must be valid numbers"
            },
        };
    }

    // Calculate average
    const total = numberArray.reduce((sum, num) => sum + num, 0);
    const avg = total / numberArray.length;

    // Return result
    return {
        status: 200,
        data: { avg: Number(avg.toFixed(2)) } // Rounded to 2 decimal places
    };
}

function getSortedNumbers(numbersParam, sortType) {
    if (!numbersParam) {
        return {
            status: 400,
            data: { error: 'numbers parameter is required' }
        };
    }
    if (!sortType) {
        return {
            status: 400,
            data: { error: 'type parameter is required' }
        };
    }
    const numbersArray = numbersParam.split(',').map(num => parseFloat(num));
    if (numbersArray.some(isNaN)) {
        return {
            status: 400,
            data: { error: 'All values in numbers must be valid numbers' }
        };
    }
    if (sortType !== 'asc' && sortType !== 'dec') {
        return {
            status: 400,
            data: { error: 'type must be "asc" or "dec"' }
        };
    }
    const sortedNumbers = [...numbersArray].sort((a, b) =>
        sortType === 'asc' ? a - b : b - a
    );
    return {
        status: 200,
        data: { sorted: sortedNumbers }
    };
}


module.exports = {
    getMinNumber,
    getMaxNumber,
    getAvgNumber,
    getSortedNumbers
};