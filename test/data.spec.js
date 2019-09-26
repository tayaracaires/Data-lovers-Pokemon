require("../src/data.js");

// meu banco de dados para testes
const dataPokeTest = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 25,
  "num": "025",
  "name": "Pikachu",
  "type": [
    "Electric"
  ]
}, {
  "id": 27,
  "num": "027",
  "name": "Sandshrew",
  "type": [
    "Ground"
  ]
}, {
  "id": 50,
  "num": "050",
  "name": "Diglett",
  "type": [
    "Ground"
  ]
}
];

// teste para a função ordenar pelo nome
describe("app.sortData", () => {
  it("is a function", () => {
    expect(typeof app.sortData).toBe("function");
  });
  it("should return ordered Pokemon from A - Z", () => {
    const sortNames = app.sortData(dataPokeTest, "name", "select-A-Z");
    expect(sortNames).toEqual([{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 50,
      "num": "050",
      "name": "Diglett",
      "type": [
        "Ground"
      ]
    }, {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]
    }, {
      "id": 27,
      "num": "027",
      "name": "Sandshrew",
      "type": [
        "Ground"
      ]
    }
    ]);
  });
});

// teste para a função filtrar por nome - busca unitária
describe("app.filterSearch", () => {
  it("is a function", () => {
    expect(typeof app.filterSearch).toBe("function");
  });
  it("must return filtered Pokemon by name", () => {
    const searchName = app.filterSearch(dataPokeTest, "Pikachu");
    expect(searchName).toEqual([{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]}]
    );
  });
});

// teste para a função filtrar por tipo
describe("app.filterTypes", () => {
  it("is a function", () => {
    expect(typeof app.filterTypes).toBe("function");
  });
  it("must return filtered Pokemon by type", () => {
    const types = app.filterTypes(dataPokeTest, "Electric");
    expect(types).toEqual([{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]}]
    );
  });
});
// teste para a função de cáculo
describe("app.statistics", () => {
  it("is a function", () => {
    expect(typeof app.statistics).toBe("function");
  });
  it("must return statistics by type", () => {
    const filteredPokemon = [{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]}];
    const calculus = app.statistics(filteredPokemon, dataPokeTest);
    expect(calculus).toBe("20.00");
  });
});
