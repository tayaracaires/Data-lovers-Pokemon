window.onload = () => filterItens();

// filtro para a barra de busca unitária por nome
const inputSearch = searchPoke($search.value, getName);

function searchPoke (inputSearch , getName){
  const result = getName.filter((poke) => {
    return poke.name.toLowerCase().match(inputSearch.toLowerCase())
  });
  return result
}
/*
function getName(name){
  const results = POKEMON.pokemon.map(item => item.name);
  return results;
}
const data = POKEMON.pokemon;
function filterTypes(data, name){
  return data.filter(item => item.type.includes(name));
}*/
