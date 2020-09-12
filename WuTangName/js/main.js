// populate input from html
//use option select
// color is chosen by user, either red, blue
//favorite animal. dog or cat
//favorite movie genre horror or comedy
// populate fields in javascript
// create conditionals, for example,
//if user chose blue and dog, and horror their name would be


//userinput names:
// Bloody assasin
// Sweet Pickle
//Dirty bag
//Killer bee
//Master Ninja
//Red Wolf
//Fabulous Cowboy
//Pesty Warrior
//Giant Dragon
//Dynamo Kid

// read the input from the server






function myFunction() {
  console.log("button clicked")
  const colorPicked = document.getElementById('color').value
  const petPicked = document.getElementById('pet').value
  const moviePicked = document.getElementById('movie').value


  fetch(`/api?choices=${colorPicked}${petPicked}${moviePicked}`)
    .then(response => response.json())
    .then((data) => {

      document.querySelector('p').innerHTML = `your name is ${data}`
    });

}

// switch (true) {
//   case colorPicked === "red" && petPicked === "cat" && moviePicked === "horror":
//     document.querySelector('p').innerHTML = 'Your new name is Master Ninja'
//     break;
//   case colorPicked === "blue" && petPicked === "cat" && moviePicked === "horror":
//     document.querySelector('p').innerHTML = 'Your new name is Bloody assasin'
//     break;
//   case colorPicked === "blue" && petPicked === "dog" && moviePicked === "horror":
//     document.querySelector('p').innerHTML = 'Your new name is fight me donkey'
//     break;
//   case colorPicked === "red" && petPicked === "dog" && moviePicked === "comedy":
//     document.querySelector('p').innerHTML = 'Your new name is Sweet Pickle'
//     break;
//   case colorPicked === "red" && petPicked === "cat" && moviePicked === "comedy":
//     document.querySelector('p').innerHTML = 'Your new name is Sweet Caroline'
//     break;
//   case colorPicked === "blue" && petPicked === "cat" && moviePicked === "comedy":
//     document.querySelector('p').innerHTML = 'Your new name is Sweet Caroline'
//     break;
//   default:
//     document.querySelector('p').innerHTML = "hello, try again";
//




// if (colorPicked === "red" && petPicked === "cat" && moviePicked === "horror") {
//   document.querySelector('p').innerHTML = "Your new name is Master Ninja"
//
// } else if (colorPicked === "blue" && petPicked === "cat" && moviePicked === "horror") {
//   document.querySelector('p').innerHTML = "Your new name is Bloody assasin"
//
// } else if (colorPicked === "blue" && petPicked === "dog" && moviePicked === "horror") {
//   document.querySelector('p').innerHTML = "Your new name is Sweet Pickle"
//
// } else if (colorPicked === "red" && petPicked === "dog" && moviePicked === "comedy") {
//   document.querySelector('p').innerHTML = "Your new name is Sweet Caroline"
//
// } else {
//   document.querySelector('p').innerHTML = "You chose nothing:"
//
// }
