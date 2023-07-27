//saitama

var submit = $("#submit");
var quotesList = [];
const button = document.getElementById("btn");

//Stop me from capping out the searches!
// button.addEventListener("click", getCharacterQuotes);

// function getCharacterQuotes() {
//   fetch(
//     "https://animechan.xyz/api/quotes/character?name=" +
//       document.getElementById("searchBox").value
//   )
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);
//       console.log(data[0].character);
//     });
// }

const dummyData = [
  {
    _id: "635183a66e286b22d5bcaafd",
    anime: "One Punch Man",
    character: "Saitama",
    quote: "Prophecies don't ever come true.",
  },
  {
    _id: "635183a66e286b22d5bcab02",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      'Heroes and the police don\'t do their jobs because someone says "please". Right?',
  },
  {
    _id: "635183a66e286b22d5bcaa97",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      "If you really want to be strong... Stop caring about what your surrounding thinks of you!",
  },
  {
    _id: "635183a66e286b22d5bcabd2",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      "In exchange for gaining strength, have I lost something more important as a human being? Emotions used to swirl within me when I fought. Fear, impatience, anger... But now... Day after day, after one punch I go home unharmed and wash my gloves.",
  },
  {
    _id: "635183a66e286b22d5bcacd7",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      "Is that really... the limit to your power? Do you honestly think that you won't get any stronger for the rest of your life? Instead of sitting around frustrated, it's better to keep on moving forward.",
  },
  {
    _id: "635183a66e286b22d5bcacd9",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      "I'm not a hero because I want your approval. I do it because I want to!",
  },
  {
    _id: "635183a66e286b22d5bcabcf",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      "You may be able to get stronger with simply the right attitude. In other words, train your spirit before worrying about strength through power and technology.",
  },
  {
    _id: "635183a66e286b22d5bcabc9",
    anime: "One Punch Man",
    character: "Saitama",
    quote:
      "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could the you of tomorrow beat you today? Instead of giving in, move forward.",
  },
  {
    _id: "635183a66e286b22d5bcad37",
    anime: "One Punch Man",
    character: "Saitama",
    quote: "I'll leave tomorrow's problems to tomorrow's me.",
  },
  {
    _id: "635183a66e286b22d5bcad3d",
    anime: "One Punch Man",
    character: "Saitama",
    quote: "I'm just a guy who's a hero for fun.",
  },
];

button.addEventListener("click", getCharacterQuotes);

function getCharacterQuotes() {
  console.log("Dummy Data to save searches :)");
  console.log(dummyData);
}

function printList() {
  console.log("List" + quotesList);
}
printList();
