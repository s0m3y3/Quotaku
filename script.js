//saitama

var submit = $("#submit");
var quotesList = [];
const button = document.getElementById("btn");

// Stop me from capping out the searches!
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

button.addEventListener("click", function(){
    // getCharacterQuotes();  //currently commented out to prevent overusage of API. 
    handleSearch();
});

function getCharacterQuotes() {
  console.log("Dummy Data to save searches :)");
  console.log(dummyData);
}

function printList() {
  console.log("List" + quotesList);
}
printList();

// search history codes below: 
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')); // Load search history from Local Storage.
if(searchHistory===null){searchHistory=[];} //if none, set array to empty
// Function to update search history in Local Storage
function updateSearchHistory() {
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  displaySearchHistory();
}

// Function to display search history in the UI
function displaySearchHistory() {
    $('#searchBox').val(""); //reset search box, from any added input to "" or empty
  const $searchHistoryList = $('.searchResults'); //set UI class 'searchResults' for any history list
  $searchHistoryList.empty(); //empties that list. 

  for (const searchCharacters of searchHistory) {
    const listItem = $('<p>').text(searchCharacters); //create <p> with search history items
    $searchHistoryList.append(listItem); //injects into html. 
  }
}

// Function to handle citysearch submission. 
function handleSearch() {
  const max_history_length = 8; //max city history limit is 8. 
  const searchTerm = $('#searchBox').val(); //search the value of search box. 

  if (searchTerm === '') {return;}  //if searched city is empty, if true then exit function. 
  // Check if the searched city, already exists in the history
  const existingIndex = searchHistory.indexOf(searchTerm);
  if (existingIndex !== -1) {
    searchHistory.splice(existingIndex, 1);// If it exists, remove it from the history
  }
  searchHistory.unshift(searchTerm);// Add the new search term at the beginning of the history
  // Limit the search history to the maximum length
  if (searchHistory.length > max_history_length) {searchHistory.pop();} //pop()=add to front
  updateSearchHistory();// Update the Local Storage and UI
}
updateSearchHistory();
