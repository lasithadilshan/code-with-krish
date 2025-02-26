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

module.exports = { getMinNumber };
