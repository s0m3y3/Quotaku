//saitama

let submit = $("#submit");
let quotesList = [];
const button = document.getElementById("btn");
let animetitle = "";
let characterID = ""; //characterID, that MAL API and Jikan API use. 
let characterlist = []; 
let searchedcharacter =""; 
// let animeID_title = []; // array for MAL_AnimeNameSearch() to input data into
let animeID = []; //array for MAL_AnimeNameSearch() to input data into
let animeIDlist = []; // array for MAL API to input data into

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

// Stop me from capping out the searches!
//button.addEventListener("click", getCharacterQuotes);

// function getCharacterQuotes() {
//   fetch(
//     "https://animechan.xyz/api/quotes/character?name=" +
//       document.getElementById("searchBox").value
//   )
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);
//       console.log(data[0].character);
//       animetitle = data[0].anime;
//       for (i = 0; i < Object.keys(data).length; i++) {
//         var quoteCreation = document.createElement("ul");
//         quoteCreation.innerHTML = `
//           <li>${"\u273A" + data[i].quote}</li>
//           `;
//         $("#characters").append(quoteCreation)
    
//         console.log(data[i].quote);
        
//       }
//     });
// }

//dummy function. to be deleted. 
function dummygetCharacterQuotes(){
  animetitle = dummyData[0].anime;
  console.log("anime title: " +animetitle);
  for (i = 0; i < Object.keys(dummyData).length; i++) {
  var quoteCreation = document.createElement("ul");
  quoteCreation.innerHTML = `
      <li>${"\u273A" + dummyData[i].quote}</li>
      `;
    $("#characters").append(quoteCreation)

  // console.log(dummyData[i].quote);   
  }
};

button.addEventListener("click", function(){
    // getCharacterQuotes();  //currently commented out to prevent overusage of API. 
    dummygetCharacterQuotes();  //fake quote function. used to keep api fresh. 
    handleSearch(); //search history function. 

    if(animetitle !==""){ //if anime title is not empty. This title is pulled from Anime Chan API. 
      MAL_AnimeNameSearch(); //MAL API search for anime titles
    }
    console.log("animeID_clkbtn: "+animeID);
    //if animeID is blank, no anime found. stops function. 
    if(animeID.length ===0){ 
      console.log("No anime found"); 
      return;
    }
    else{
      console.log("anime found");
      for(i=0;i<animeID.length; i++){  //note to self: This is dangerous. Could ramp up API numbers too quickly. 
        MAL_IDsearch(animeID[i]);
        for (let character0 of characterlist) {// Loop through the array to find the object with the name as "searchedcharacter"
          results = false;
          if (character0.name === searchedcharacter) {
            characterID=character0.id;
            results=true;
            console.log("found character: "+ searchedcharacter + ", ID: "+ characterID);
            break; // If found, stop loop
          }
        }
        if(results===true){break}; //break out of MAL_IDsearch() loop, if character name is found.
      } 
    }
    let characterimage = Jikan_CharacterImageSearch(characterID); //this function finds image of character. 
    $("#characters").append($("<img>").attr("src", characterimage)); //adds image into html
    console.log("end click button function");
});

// function printList() {
//   console.log("List" + quotesList);
// }
// printList();


function MAL_AnimeNameSearch(){  //Using RapidAPI, to grab MAL API.
  let MAL_animesearch = animetitle.replace(/ /g, "%20");//repace any spacing with "%20", required for MAL API search. 

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://myanimelist.p.rapidapi.com/anime/search/${MAL_animesearch}`, //MAL API Link
    //other searchable link below: 
    // url: `https://myanimelist.p.rapidapi.com/anime/${animeID}`   //search via animeID
    // url: `https://myanimelist.p.rapidapi.com/anime/search/${anime_name}/${page}` //page = display how many page results.
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
  };

  $.ajax(settings).done(function (response) { //pulling character data from MAL_data. 
    let dataMAL = response;
    console.log("dataMAL:"); 
    console.log(dataMAL);  //delete me! 

    // let animetitle = [];
    for (i=0;i<dataMAL.length;i++){ 
        animeID.push(dataMAL[i].myanimelist_id); //input anime ID into array
        // animetitle.push(dataMAL[i].title) //input anime title into array
        console.log("animeID0: "+animeID);
    }
    console.log("animeID1: "+animeID);
    return animeID;
    // animeID_title = animetitle.map((title, index) => {return { title, id: animeID[index] };})  //combines 2arrays (anime title & ID) into an array object.
  });
  console.log("animeID2: "+animeID);  //code doesnt read animeID here. 
  // console.log("MAL_AnimeNameSearch() is working properly. " + animeID);
};


function MAL_IDsearch(animeID){  //Using RapidAPI, to grab MAL API.
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://myanimelist.p.rapidapi.com/anime/${animeID}`,   //search via animeID
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
    };
    $.ajax(settings).done(function (response) { //pulling character data from MAL_data. 
        let dataMAL = response;  //storing received data into dataMAL
        arraylength = dataMAL.characters.length; //check how many characters are in the array. 
        charNAMEtest=[];
        charidtest = [];
        charURLtest = [];

        for (i=0;i<arraylength;i++){  //loop to add character URL & character to their respective array
            charURLtest.push(dataMAL.characters[i].myanimelist_url); //adds character url into array. The URL also contains character ID.
            charNametest.push(dataMAL.characters[i].name) //adds character name into array.
        };

        charidtest = charurltest.map(url => { //separate the character ID from character url. using regrex. 
            const regex = /\/(\d+)\//; // Regular expression to match the numbers between slashes. aka to grab only characterID, as they are the only number in link.
            const match = url.match(regex);
            return match ? match[1] : null; // Return the matched number or null if no match found
        });
        
        characterlist = charnametest.map((name, index) => {return { name, id: charidtest[index] };}) //combines two arrays (character name & character ID) into array objects
    });
    console.log(" MAL_IDsearch(animeID) is working properly: "+ characterlist);
};

function Jikan_CharacterImageSearch(characterID) {
  fetch(`https://api.jikan.moe/v4/characters/${characterID}`) //jikan API data fetch, using character ID from MAL API. 
    .then((response) => response.json())
    .then(function (data) {
      dataJikan = data 
      // console.log(data);
      photoURL = dataJikan.data.images.jpg.image_url; //photo url for the character
      return photoURL;
    });
    console.log("Jikan_CharacterImageSearch(characterID) is working properly: "+photoURL);
};

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
  const $searchHistoryList = $('#lastResults'); //set UI class 'searchResults' for any history list
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
};

updateSearchHistory();



