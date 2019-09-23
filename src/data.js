window.sortData = sortData;

// função para ordenar
function sortData(dataPoke, sortBy, sortOrder) {
  let sizeSlice = dataPoke.slice(0, -1);
  if (sortOrder == "select-A-Z") {
    return sizeSlice.sort(function ordena(objOne, objTwo) {
      return objOne[sortBy].localeCompare(objTwo[sortBy]);
    });
  } else if (sortOrder == "select-Z-A") {
    return sizeSlice.sort(function ordena(objOne, objTwo) {
      return objTwo[sortBy].localeCompare(objOne[sortBy]);
    });
  }
}
