const numberToReversedDigits = number => {

    let result= (number.toString().split('').reverse().map(Number).join(', '));
    return  (`[${result}]`);
    };

module.exports = numberToReversedDigits;
