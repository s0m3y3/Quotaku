//saitama

var submit = $("#submit");
var quotesList = [];
const button = document.getElementById("btn");

button.addEventListener("click", getCharacterQuotes);

function getCharacterQuotes() {
  fetch(
    "https://animechan.xyz/api/quotes/character?name=" +
      document.getElementById("searchBox").value
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      console.log(data[0].character);
    });
}
function printList() {
  console.log("List" + quotesList);
}
printList();
