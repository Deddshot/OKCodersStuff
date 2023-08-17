const cart = [];

let total = 0;

// const button1 = document.getElementById("hot-drink1");

// const button2 = document.getElementById("hot-drink2");

// button1.addEventListener("click", test);

// button2.addEventListener("click", test2);

let priceArray = document.getElementsByClassName("price");

let nameArray = [...document.getElementsByClassName("item-name")];

console.log(document.getElementsByClassName("item-name"));

console.log(nameArray[1].innerHTML);

console.log(priceArray[1].innerHTML.substring(1, priceArray[1].innerHTML.indexOf(' '))); //Switch to RegEx

//START BUY CODE

const buyButtonArray = [...document.getElementsByClassName('buy')];

const buyButtons = document.getElementsByClassName('buy');

function buyButtonPressed(x){
    const cartPlace = cart.length / 2;
    //console.log(x.target);  // Get ID of Clicked Element
    //console.log(x.target == buttonArray[1]) //Test code used to ensure it was differentiating buttons
    //console.log(buttonArray.indexOf(x.target));
    console.log(nameArray[buyButtonArray.indexOf(x.target)].innerHTML);
    console.log(priceArray[buyButtonArray.indexOf(x.target)].innerHTML.substring().match((/\d+(?:\.\d+)?/g)));
    const itemName = nameArray[buyButtonArray.indexOf(x.target)].innerHTML;
    const itemPrice = priceArray[buyButtonArray.indexOf(x.target)].innerHTML.substring().match((/\d+(?:\.\d+)?/g));
    cart.push(itemName, itemPrice[0]);
    total += cart[cart.length-1];
    console.log(cart); 
    //console.log(total);
    console.log((cart.length) / 2);
    //return buttonArray.indexOf(x.target);
}

for (let button of buyButtons) { //loops through each button out of all buttons
  button.addEventListener("click", buyButtonPressed);
  //console.log(button);
}

//END BUY

//START UNBUY CODE

const unbuyButtonArray = [...document.getElementsByClassName('unbuy')];

const unbuyButtons = document.getElementsByClassName('unbuy');

function unbuyButtonPressed(x){
    const cartPlace = cart.length / 2;
    //console.log(x.target);  // Get ID of Clicked Element
    //console.log(x.target == buttonArray[1]) //Test code used to ensure it was differentiating buttons
    //console.log(buttonArray.indexOf(x.target));
    console.log(nameArray[unbuyButtonArray.indexOf(x.target)].innerHTML);
    console.log(priceArray[unbuyButtonArray.indexOf(x.target)].innerHTML.substring().match((/\d+(?:\.\d+)?/g)));
    const itemName = nameArray[unbuyButtonArray.indexOf(x.target)].innerHTML;
    //const itemPrice = priceArray[unbuyButtonArray.indexOf(x.target)].innerHTML.substring().match((/\d+(?:\.\d+)?/g)); //Currently not needed
    const itemPlace = cart.indexOf(itemName);
    if (itemPlace != -1){
    cart.splice(itemPlace, 2,); //Always removes two items since they come in name/price pairs
    }
    else{
        //Code informing customer item is not in cart could go here
    }
    //console.log(cart.indexOf(itemName) + " is the thing you want");
    console.log(nameArray[unbuyButtonArray.indexOf(x.target)].innerHTML);
    //console.log(itemName);
    //cart.splice(0, 1, itemPrice[0]);
    //console.log(itemPrice[0]);
    total -= cart[cart.length-1];
    console.log(cart); 
    //console.log(total);
    console.log((cart.length) / 2);
    //return buttonArray.indexOf(x.target);
}

for (let button of unbuyButtons) { //loops through each button out of all buttons
  button.addEventListener("click", unbuyButtonPressed);
  //console.log(button);
}

//END UNBUY

//HALL OF FAILURES

// [...document.getElementsByClassName('buy')].forEach(x => {
//     x.addEventListener('click', function() {
//       myFunction(this);
//     })
//   });
  
  
//   function myFunction(el) {
//     console.log(el);
//   }



//console.log(buttonArray);

// [...document.getElementsByClassName('buy')].forEach(x => {
//     console.log(x);
//     x.addEventListener('click', function() { //Why can't I just put the function on this line?
//         check(x);
//     });
// });

// function check(buttonArray){
//     console.log(buttonArray);
//     console.log(this == buttonArray);
// }


// const buttonPressed = x => {
//   console.log(x.target);  // Get ID of Clicked Element
//   console.log(x.target == buttonArray[1])
//   console.log(buttonArray.indexOf(x.target));
// }

// console.log([document.getElementsByClassName('buy')]) Displays collection, 
//which can then be opened to see elements

// console.log([...document.getElementsByClassName('buy')]) Shallow copy of collection, which
//will have all the items immediately present...or something. Research this more.

//END FAIL HALL

//FIZZBUZZ TIME BAYBEEEEEEEEEEEEE

//let testNum = 20;

// if (testNum % 3 === 0 && testNum % 5 === 0){
//     console.log("FizzBuzz");
// }
// else if (testNum % 3 === 0){
//     console.log("Fizz");
// }
// else if (testNum % 5 === 0){
//     console.log("Buzz");
// }
// else{
//     console.log(testNum);
// }