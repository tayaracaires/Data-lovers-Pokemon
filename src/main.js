document.getElementById("btn-name").addEventListener("click", filterItens);


const teste = POKEMON.pokemon;
function filterItens(){
    const x = document.getElementById("listaNomes");
    const y = teste.map(poke => x.innerHTML  += `${poke.id} ${poke.name} ${poke.type} <img src="${poke.img}" /> </br>`);
}

