var name = prompt("What's your name?");
var surname = prompt("What's your surname?");
var age = prompt("What's your age?");
var height = prompt("What's your height?");
var petName = prompt("What's your pet's name?");

if (name[0] === surname[0] && age > 20 && age < 30 && height >= 170 && petName[petName.length - 1] === "y") {
  console.log("Hello Comrade!");
}
