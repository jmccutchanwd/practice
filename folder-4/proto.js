var dog = {};

// methods are functions inside objects
var sparky = {};

outputs: undefined

sparky.name = "Sparky";

outputs: "Sparky"

dog.bark = function () { console.log( this.name + ' said, "woof"')}

sparky.bark()

outputs: Sparky said, "woof"
