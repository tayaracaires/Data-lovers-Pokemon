const app = {
sortData: sortData,
filterTypes: filterTypes,
}

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

// função filtrar tipos
function filterTypes(data, condition) {
  let result = data.filter(item => item.type.includes(condition));
  return result
}

function statistics (data, dataAll){
  let percentage = ((data.length*100)/dataAll.length).toFixed(2);
  return percentage
}

