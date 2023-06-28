// do not remove anything that is already written

function main() {
  // declare 3 variables using let, var, and const with either Number or String type
  var x = "thunwa";
  let y = "aesang";
  const z = "daniel";
  // print the 3 variables declared by replacing the variables with your own
  console.log(x);
  console.log(y);
  console.log(z);

  function inFunction() {
    // declare 3 more variables using let, var, and const with either Number or String type
    // -- START HERE --
    var a = "superduper";
    let b = 735;
    const c = "supertc";
    // -- END HERE --

    // print the 3 variables declared inside inFunction by replacing the variables with your own
    console.log(a);
    console.log(b);
    console.log(c);

    return null;
  }
  inFunction();

  // declare an appropriate variable with an empty array
  // -- START HERE --
  var one = [];
  // -- END HERE --

  // replace the variable with your variable
  if (one) console.log("true");
  else console.log("false");

  // declare an appropriate variable with an array that has 3 different Numbers
  // -- START HERE --
  var once = ["GOD", 5, "thunwa"];
  // -- END HERE --

  console.log("Elements in new array");
  once.forEach((element, idx) => console.log(idx + ": ", element));

  // modify the array elements with different Numbers
  // -- START HERE --
  once[0] = "boom";
  once[1] = "HOLY";
  once[2] = 735;
  // -- END HERE --

  console.log("Modified elements in same array");
  once.forEach((element, idx) => console.log(idx + ": ", element));

  // declare an appropriate variable with an empty object
  // -- START HERE --
  var Thunwa = {};
  // -- END HERE --

  // print the object variable declared by replacing the variables with your own
  console.log("Your object: ", Thunwa);
  if (Thunwa) console.log("true");
  else console.log("false");

  // declare an appropriate variable with an object that has 3 key value pairs
  // -- START HERE --
  var Thunwac = {
    firstName: "Thunwa",
    lastName: "Cardin",
    age: 18,
    race: "white/asian",
    profession: "Professional coder",
  };
  // -- END HERE --

  console.log("Elements in new object");
  Object.keys(Thunwac).forEach((key) => console.log(key + ": ", Thunwac[key]));

  // modify the array elements with different Numbers
  // -- START HERE --
  Thunwac["firstName"] = "aesang";
  Thunwac["lastName"] = "youn";
  Thunwac.age = 18;

  // -- END HERE --

  console.log("Modified elements in same object");
  Object.keys(Thunwac).forEach((key) => console.log(key + ": ", Thunwac[key]));

  // sandbox area | play around with variables and different types
  // -- START HERE --
  var plug = [];
  for (let r = 1; r < 50; ++r) {
    let row = [];
    for (let c = 1; c < 50; ++c) {
      row.push(0);
    }
    plug.push(row);
  }
  console.log(plug);

  var pizza = {
    ingredients: ["cheese", "tomato sauce", "dough"],
    calories: 10000,
    price: "$100000",
  };
  // -- END HERE --
  pizza.calories = 10000 + 600;
  console.log("Ingredients:", pizza.ingredients);
  console.log("Price:", pizza.calories);
  console.log("Price:", pizza.price);
}

main(); // this is to run the main function

// to run this file cd into variables directory and run -> node variables.js
