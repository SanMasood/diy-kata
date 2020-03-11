const joinNames = namesObj => {
  const strarray = [];

  if (namesObj.length == 1)
    return (namesObj[0].name);

  for (let i = 0; i < namesObj.length - 1; i++) {
    strarray.push(namesObj[i].name);
  }
  const finalString = strarray.join(", ");
  const lastString = namesObj[namesObj.length - 1].name;

  return `${finalString} & ${lastString}`;
  // I wonder whether lines of code takes precedence over code readability
};

module.exports = joinNames;
