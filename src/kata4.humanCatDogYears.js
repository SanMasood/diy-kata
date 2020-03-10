const humanCatDogYears = number => {

    let array  = [];
//let num= 90;
let catYears= 16 + 4*number;
let dogYears = 14 + 5*number;
//console.log (num, catYears, dogYears);

array.push(number);
array.push(catYears);
array.push(dogYears);
return (`[${array}]`);
/*or:
function pusher(arrayItem,array){
  return array.push(arrayItem);
}
pusher(num, array);
pusher(catYears, array);
pusher(dogYears, array);
console.log (`[${array}]`);
*/
};

module.exports = humanCatDogYears;
