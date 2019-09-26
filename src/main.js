const divCards = document.getElementById("listaCards");
const divFilter = document.getElementById("orderType");
const selectOrder = document.getElementById("orderName");
const inputFilterName = document.getElementById("input-name");
const stats = document.getElementById("porcentagem");

window.onload = () => {
  showCards(dataPoke);
};

const dataPoke = POKEMON.pokemon;

// Função para filtrar itens para formar o card
function showCards(data) {
  divCards.innerHTML = data.map(poke => {
    return `
        <div class = "box">
            <h3 class = "namePoke"> ${poke.name}</>
            <h4> <img class= "imagePoke" src= ${poke.img}> </>
            <div class = "conteudoCard">
                    <p>Tipo: ${poke.type.join(", ")} </>
                    <p>Ovo: ${poke.egg} </>
                    <p>Chance: ${poke.avg_spawns} % </>
                    <p>Fraquezas: ${poke.weaknesses.join(", ")}</>   
            </div>
        </div>`;
  }).join("");
}

// Ordenação pelo select-name
selectOrder.addEventListener("change", () => {
  const selectValue = selectOrder.value;
  const functionOrdena = window.sortData(dataPoke, "name", selectValue);
  if (selectValue === "none") {
    showCards(dataPoke);
  } else {
    showCards(functionOrdena);
  }
});

// função para filtrar por tipo com cálculo da porcentagem
divFilter.addEventListener("change", () => {
  const filtered= app.filterTypes(dataPoke, divFilter.value);
  showCards(filtered);
  stats.innerHTML=`<p>Os pokémon do tipo ${divFilter.value} representam ${statistics(filtered, dataPoke)}% dos pokemóns da primeira geração.</>`;
});

// evento select para o filtro de tipos
divFilter.addEventListener("change", () => { showCards(filterTypes(dataPoke, divFilter.value)); });

// evento input para o filtro de nome (busca unitária)
inputFilterName.addEventListener("input", () => { showCards(filterSearch(dataPoke, inputFilterName.value)); });