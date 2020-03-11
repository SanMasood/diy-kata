const joinNames = namesObj => {

    let strarray = [];
    for(let i = 0; i<namesObj.length-1; i++)
    {
       strarray.push(namesObj[i].name);
     }
    let finalString = strarray.join(', ');
    let lastString = namesObj[namesObj.length-1].name;

return (finalString+ " & " +lastString);
//I wonder whether lines of code takes precedence over code readability 
    
};

module.exports = joinNames;
