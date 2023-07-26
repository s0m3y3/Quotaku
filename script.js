var characterName = $("#searchBox");
var quotesList = [];
function getCharacterQuotes() {
  fetch("https://animechan.xyz/api/quotes/character?name=saitama")
    .then((response) => response.json())
    .then((quotes) => console.log(quotes));
}
getCharacterQuotes();

function printList() {
  console.log("List" + quotesList);
}
printList();
