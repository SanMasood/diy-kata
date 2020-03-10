const booleanToWord = boolean => {
    /*
    let isFalse = [0, null, false, undefined, NaN]
    if (boolean!==isFalse.find(value=>value==aaaaaaforgetit)}
    return 'Yes';
    if (boolean===false)//else
    return 'No';
*/
if (!!boolean)
return 'Yes';
else return 'No';

    //works for all real values of truthies and falsies
};

module.exports = booleanToWord;
