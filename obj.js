var city1 = {
  name: "Odessa",
  population: 10000000,
  GetName: function() {
    console.log(this.name)
  },
  exportStr: function() {
    console.log(this.name, this.population)
  }
};

var city2 = {
  name: "Kazan",
  population: 10 ^ 6,
  GetName: function() {
    console.log(this.name)
  },
  exportStr: function() {
    console.log(this.name, this.population)
  }
};
