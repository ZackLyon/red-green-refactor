function capitalizeAndFilter(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const uppercaseString = arr[i][0].toUpperCase() + arr[i].slice(1);

    if (uppercaseString[0] !== "F") {
      newArr.push(uppercaseString);
    }
  }
  return newArr;
}

module.exports = capitalizeAndFilter;
