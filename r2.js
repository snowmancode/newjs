console.log("Beep Beep Beep");

let person = {
    name: "Sam",
    age: 29

};

console.log(person);
person.name = "Bruce";
console.log(person);

let selectedColors = ['red', 'white', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0, 1]);
console.log(selectedColors.length);
console.log(selectedColors.keys);
console.log(selectedColors.reverse);
console.log(selectedColors);

function welcome() {
    console.log("Hello.  I am the Coyote.");
}

welcome();

function another_welcome(firstName) {
    console.log("Hello " + firstName);
}

another_welcome("El Coyote");

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);

function square_force(number1) {
    console.log(number1 * number1);
}

square_force(5);


