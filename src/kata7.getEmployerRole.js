const getEmployerRole = (employeeName, employees) => {

    for (let i=0; i < employees.length; i++) {
        if (employees[i].name === employeeName) {
            return employees[i].role;
        }
    }
    /*const final = roleReturner('Sana', people);
console.log (final);
let convertToString = final.role; 
console.log (convertToString);*/

};

module.exports = getEmployerRole;
