function capitalizeAndFilter(arr) {
  const capitalizedArr = arr.map(
    (item) => item[0].toUpperCase() + item.slice(1)
  );
  const filteredArr = capitalizedArr.filter((item) => item[0] !== "F");

  return filteredArr;
}

module.exports = capitalizeAndFilter;
