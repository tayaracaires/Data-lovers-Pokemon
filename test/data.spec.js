require("../src/data.js");

// banco teste
const dataPokeTest = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 25,
  "num": "025",
  "name": "Pikachu",
  "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
  "type": [
    "Electric"
  ]
}, {
  "id": 27,
  "num": "027",
  "name": "Sandshrew",
  "img": "http://www.serebii.net/pokemongo/pokemon/027.png",
  "type": [
    "Ground"
  ]
}, {
  "id": 50,
  "num": "050",
  "name": "Diglett",
  "img": "http://www.serebii.net/pokemongo/pokemon/050.png",
  "type": [
    "Ground"
  ]
}
];

// teste para a função ordenar pelo nome
describe("window.sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("should return ordered Pokemon from A - Z", () => {
    const sortNames = sortData(dataPokeTest, "name", "select-A-Z").map(pokemon => pokemon.name);
    expect(sortNames).toEqual(["Bulbasaur", "Diglett", "Ivysaur", "Pikachu", "Sandshrew"]);
  });
});

// //teste para a função filtrar pelo tipo
// describe("window.filterTypes", () => {
//   it("is a function", () => {
//     expect(typeof filterTypes).toBe("function");
//   });

//   it("should return filtered Pokemon by eletric type", () => {
//     const filtered = filterTypes(dataPokeTest, "type", "eletric").map(pokemon => pokemon.type);
//     expect(filtered).toEqual(["Pikachu"]);
//   });
// });