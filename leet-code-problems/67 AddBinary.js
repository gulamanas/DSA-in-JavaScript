var addBinary = function(a, b) {
    // return (parseInt(a, 2)+parseInt(b, 2)).toString(); // for smaller values
    return (BigInt("0b"+a)+BigInt("0b"+b)).toString(2); // for larger valures
};

console.log(addBinary("11", "1"))