let username = prompt("Hello friend, what is your name");
alert(
  "Welcome to my website " +
    username +
    "! Pay attention, there will be a quiz..."
);

//function quiz() {

function getFilm() {
  let film = prompt(
    "Hope you've been paying attention! So tell me, Is Patrick's favourite film Forbidden Planet?"
  );
  console.log(film);
  console.log(film.toLowerCase());
  switch (film.toLowerCase()) {
    case "yes":
      // console.log("That's wrong, the robot in Forbidden Planet is very small");
      alert("That's wrong, the robot in Forbidden Planet is very small");
      break;
    case "no":
      // console.log(
      //   "That's right, Pacific Rim is Patrick's favourite film and features very big robots"
      // );
      alert(
        "That's right, Pacific Rim is Patrick's favourite film and features very big robots"
      );
      break;
    default:
      // console.log(
      //   "You should give a yes or no answer to this question about Patrick's favourite film"
      // );
      alert(
        "You should give a yes or no answer to this question about Patrick's favourite film"
      );
  }
}

function getCat() {
  let cat = prompt("Does Patrick have a cat?");
  console.log(cat);
  console.log(cat.toLowerCase());
  switch (cat.toLowerCase()) {
    case "yes":
      // console.log("That's right, the cat is called Goblin");
      alert("That's right, the cat is called Goblin");

      break;
    case "no":
      // console.log("That's wrong, Patrick does have a cat");
      alert("That's wrong, Patrick does have a cat");
      break;
    default:
      // console.log(
      //   "You should give a yes or no answer to this question about Patrick owning a cat"
      // );
      alert(
        "You should give a yes or no answer to this question about Patrick owning a cat"
      );
  }
}

function getCall() {
  let cthulhu = prompt("Is Call of Cthulhu set in the 1930's?");
  console.log(cthulhu);
  console.log(cthulhu.toLowerCase());
  switch (cthulhu.toLowerCase()) {
    case "yes":
      // console.log("Close, Call of Cthulhu in the 1920's");
      alert("Close, Call of Cthulhu in the 1920's");
      break;
    case "no":
      // console.log("That's right, Call of Cthulhu is set in the 1920's");
      alert("That's right, Call of Cthulhu is set in the 1920's");
      break;
    default:
      // console.log(
      //   "You should give a yes or no answer to this question about when Call of Cthulhu was set"
      // );
      alert(
        "You should give a yes or no answer to this question about when Call of Cthulhu was set"
      );
  }
}
function getColour() {
  let favouriteColour = prompt("Is Patrick's favourite colour green?");
  console.log(favouriteColour);
  console.log(favouriteColour.toLowerCase());
  switch (favouriteColour.toLowerCase()) {
    case "yes":
      // console.log("That's right, Green is Patrick's favourite colour");
      alert("That's right, Green is Patrick's favourite colour");
      break;
    case "no":
      // console.log("Sorry, green really is Patrick's favourite colour");
      alert("Sorry, green really is Patrick's favourite colour");
      break;
    default:
      // console.log(
      //   "You should give a a yes or no answer to this question about favourite colour"
      // );
      alert(
        "You should give a a yes or no answer to this question about favourite colour"
      );
  }
}

function getDota() {
  let dotaLol = prompt("Does Patrick play DOTA?");
  console.log(dotaLol);
  console.log(dotaLol.toLowerCase());
  switch (dotaLol.toLowerCase()) {
    case "yes":
      // console.log("That's right, Patrick plays DOTA");
      alert("That's right, Patrick plays DOTA");
      break;
    case "no":
      // console.log("Sorry you're wrong, Patrick plays DOTA");
      alert("Sorry you're wrong, Patrick plays DOTA");
      break;
    default:
      // console.log(
      //   "You should give a a yes or no answer to this question about DOTA"
      // );
      alert("You should give a a yes or no answer to this question about DOTA");
  }
}
//}

let numberG = prompt("Guess the number!");
for (let guessesUsed = 0; guessesUsed < 3; guessesUsed++) {
  console.log(guessesUsed);
  console.log(numberG);
  if (numberG == 10) {
    alert("Bingo! You guessed the right number!");
    break;
  } else if (numberG > 10) {
    alert("Sorry that's too high!");
    numberG = prompt("Guess the number!");
  } else if (numberG < 10) {
    alert("Sorry that's too low!");
    numberG = prompt("Guess the number!");
  } else {
    alert("Try a numeric number");
    numberG = prompt("Guess the number!");
  }
}
if ((GuessesUsed) => 4) {
  alert("Sorry, you are out of attempts! The correct answer is 10!");
}
getFilm();
getCall();
getCat();
getColour();
getDota();
