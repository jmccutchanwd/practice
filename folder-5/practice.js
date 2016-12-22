// BEGIN
// Built a Constructor
// function Dog(name, breed, weight){
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function(){
//     if(this.weight > 25){
//       alert(this.name + " says Woof!");
//     }else{
//       alert(this.name + " says Yip!");
//     }
//   }
// }
// Fed the Constructor
// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// HTML holder
// var output = "";
// Made an array out of the var names
// var dogs = [fido, fluffy, spot];
// Loop through the objects and output in console and HTML
// for(var i = 0; i < dogs.length; i++){
//   var size = "small";
//   if (dogs[i].weight > 10) {
//     size = "large";
//   }
//   console.log("Dog: " + dogs[i].name
//                 + " is a " + size
//                 + " " + dogs[i].breed);
//   output += `<li>Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}</li>`
//   document.getElementById("content").innerHTML = output;
// }
// for(var i = 0; i < dogs.length; i++){
//   dogs[i].bark();
// }
//
//
// END
// BEGIN
function Coffee(roast, ounces){
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function(){
      if(this.ounces === 8){
        return "small";
      }else if(this.ounces === 12){
        return "medium";
      }else{
        return "large";
      }
  };
  this.toString = function(){
    return "You've ordered a " + this.getSize() + " "
            + this.roast + " coffee.";
  };
}
var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
document.getElementById("content").innerHTML = `<p>${houseBlend.toString()}<br>
                                                ${darkRoast.toString()}</p>`;
//
//
// END
