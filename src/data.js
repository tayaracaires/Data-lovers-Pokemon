window.app = {
  sortData,
  filterSearch,
  statistics,
};

function sortData(data, sortBy, sortOrder) {
  const copiedArray = data.slice();
  if (sortOrder == "select-A-Z") {
    return copiedArray.sort(function ordena(objOne, objTwo) {
      return objOne[sortBy].localeCompare(objTwo[sortBy]);
    });
  } else if (sortOrder == "select-Z-A") {
    return copiedArray.sort(function ordena(objOne, objTwo) {
      return objTwo[sortBy].localeCompare(objOne[sortBy]);
    });
  }
};

function filterSearch(data, condition, key) {
  return data.filter(item => item[key].includes(condition));
};

function statistics (dataType, data) {
  return ((dataType.length*100)/data.length).toFixed(2);
};