window.app = {
  sortData: sortData,
  filterTypes: filterTypes,
  filterSearch: filterSearch,
};

// função para ordenar
function sortData(data, sortBy, sortOrder) {
  var copiedArray = data.slice();
  if (sortOrder == "select-A-Z") {
    return copiedArray.sort(function ordena(objOne, objTwo) {
      return objOne[sortBy].localeCompare(objTwo[sortBy]);
    });
  } else if (sortOrder == "select-Z-A") {
    return copiedArray.sort(function ordena(objOne, objTwo) {
      return objTwo[sortBy].localeCompare(objOne[sortBy]);
    });
  }
}

// função para filtrar tipos
function filterTypes(data, condition) {
  return data.filter(item => item.type.includes(condition));
}
// função para filtrar nomes
function filterSearch(data, condition) {
  return data.filter(item => item.name.includes(condition));
}
// função para o cáculo
function statistics (data, dataAll){
  let percentage = ((data.length*100)/dataAll.length).toFixed(2);
  return percentage
}


