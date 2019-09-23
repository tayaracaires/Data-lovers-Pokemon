require("../src/data.js");

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

describe("window.sortData", () => {
  it("is a function", () => {
    expect(typeof sortData.sortData).toBe("function");
  });

  it("should return ordered Pokemon from A - Z", () => {
    expect(sortData.sortData(dataPokeTest, "name", "select-A-Z")).toEqual(
      [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"
        ]
      }, {
        "id": 50,
        "num": "050",
        "name": "Diglett",
        "img": "http://www.serebii.net/pokemongo/pokemon/050.png",
        "type": [
          "Ground"
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
      }
      ]
    );
  });
});
