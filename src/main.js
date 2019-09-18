const data = POKEMON.pokemon;
//const filtro = document.getElementById("")

function filterItens(){
    const x = document.getElementById("listaCards");
    const y = data.map(poke => x.innerHTML  +=
        `<div class = "box">
            <h3 class = "namePoke"> ${poke.name}</>
            <h4> <img class= "imagePoke" src= ${poke.img}> </>
            <div class = "conteudoCard">
                <fieldset>
                    <p>Tipo: ${poke.type} </>
                    <p>Ovo: ${poke.egg} </>
                    <p>Chance: ${poke.avg_spawns} % </>
                    <p>Fraquezas: ${poke.weaknesses}</>
                </fieldset>    
            </div>
        </div>`);
}
/*
const $search = document.querySelector("#pesquisa");

$search.addEventListener("input", filterItens);
  */  


  