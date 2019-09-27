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
  divCards.innerHTML = data.map(poke => `
    <div class="box">
      <h3 class="namePoke"> ${poke.name}</h3>
      <h4> <img class="imagePoke" src=${poke.img} /> </h4>
      <div class="conteudoCard">
          <p><strong>Tipo:</strong> ${poke.type.join(", ")}</p>
          <p><strong>Ovo:</strong> ${poke.egg}</p>
          <p><strong>Chance:</strong> ${poke.avg_spawns} % </p>
          <p><strong>Fraquezas:</strong> ${poke.weaknesses.join(", ")}</p>   
      </div>
    </div>
  `).join("");
}

// Ordenação pelo select-name
selectOrder.addEventListener("change", ({ target: { value }}) => {
  const functionOrdena = window.sortData(dataPoke, "name", value);
  if (value === "none") {
    showCards(dataPoke);
  } else {
    showCards(functionOrdena);
  }
});

// função para filtrar por tipo com cálculo da porcentagem
divFilter.addEventListener("change", () => {
  const filtered = app.filterTypes(dataPoke, divFilter.value);
  showCards(filtered);
  stats.innerHTML = `
    <p>
      Os pokémon do tipo ${divFilter.value} representam ${statistics(filtered, dataPoke)}% dos pokemóns da primeira geração.
    </p>`;
});

// evento select para o filtro de tipos
divFilter.addEventListener("change", () => { showCards(filterTypes(dataPoke, divFilter.value)); });

// evento input para o filtro de nome (busca unitária)
inputFilterName.addEventListener("input", () => { showCards(filterSearch(dataPoke, inputFilterName.value)); });