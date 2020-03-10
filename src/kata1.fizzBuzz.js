const fizzBuzz = number => {
    const by3= (number%3===0);
    const by5= (number%5===0);

    if (by3 && by5){
        return 'FizzBuzz';
    }
    if (by5){
        return 'Buzz';
    }
    if (by3){
    return 'Fizz';
    }
    return number;
};

module.exports = fizzBuzz;
