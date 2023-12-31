//saitama

let submit = $("#submit");
let quotesList = [];
const button = document.getElementById("btn");
let animetitle = "";
let characterID = ""; //characterID, that MAL API and Jikan API use.
let characterlist = [];
let searchedcharacter = "";
// let animeID_title = []; // array for MAL_AnimeNameSearch() to input data into
let animeID = []; //array for MAL_AnimeNameSearch() to input data into
let animeIDlist = []; // array for MAL API to input data into
let photoURL = "";

//due to very limited API searches for animechan.xyz... This dummydata was created to test code. To be deleted.
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
//workingCharacterList = ["saitama","bulma"];

function reset() {
  //clears out variables
  quotesList = [];
  animeID = [];
  characterID = [];
  characterlist = [];
  searchedcharacter = "";
  animetitle = "";
  animeIDlist = [];
  photoURL = "./assets/imageplaceholder1.jpg";
  $("#characters").empty();
  $("#charactername").empty();
}

function imageDefault() {
  //provi
  // $(".badge").css("background-image", "url(/assets/imageplaceholder1.jpg)");
  $("#quotesimg").attr("src", "./assets/imageplaceholder1.jpg");
}

function getCharacterQuotes() {
  fetch(
    //fetch Character Quotes
    "https://animechan.xyz/api/quotes/character?name=" +
      document.getElementById("searchBox").value
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      console.log(data[0].character);
      animetitle = data[0].anime;
      $("#charactername").append(searchedcharacter);
      for (i = 0; i < Object.keys(data).length; i++) {
        var quoteCreation = document.createElement("ul");
        quoteCreation.innerHTML = `
          <li>${"\u273A" + data[i].quote}</li>
          `;
        $("#characters").append(quoteCreation);

        // console.log(data[i].quote);
      }
      $("#charactername").val(data[0].character);
      $("#quotesimg").attr("src", photoURL); //adds image into html

      if (animetitle !== "") {
        //if anime title is not empty. This title is pulled from Anime Chan API.

        MAL_AnimeNameSearch(); //MAL API search for anime titles
      }

      //MAL_AnimeNameSearch(); //MAL API search for anime titles
      //}
    })
    .catch(function () {
      //Catches error
      $("#invalidcheck").text("Invalid Character! Please try again!");
    });
}

//dummy function. to be deleted.
function dummygetCharacterQuotes() {
  animetitle = dummyData[0].anime;
  $("#charactername").append(searchedcharacter);
  for (i = 0; i < Object.keys(dummyData).length; i++) {
    var quoteCreation = document.createElement("ul");
    quoteCreation.innerHTML = `
      <li>${"\u273A" + dummyData[i].quote}</li>
      `;
    $("#characters").append(quoteCreation);

    // console.log(dummyData[i].quote);
  }
  // $("#charactername").val(searchedcharacter);
  $("#quotesimg").attr("src", photoURL); //adds image into html
  $(".badge").css("background-image", `url(${photoURL})`);
  if (animetitle !== "") {
    //if anime title is not empty. This title is pulled from Anime Chan API.

    MAL_AnimeNameSearch(); //MAL API search for anime titles
  }
}

function MAL_AnimeNameSearch() {
  //Using RapidAPI, to grab MAL API.
  console.log("MAL_AnimeNameSearch is running");
  let MAL_animesearch = animetitle.replace(/ /g, "%20"); //repace any spacing with "%20", required for MAL API search.

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://myanimelist.p.rapidapi.com/anime/search/${MAL_animesearch}/10`, //MAL API Link
    //other searchable link below:
    // url: `https://myanimelist.p.rapidapi.com/anime/${animeID}`   //search via animeID
    // url: `https://myanimelist.p.rapidapi.com/anime/search/${anime_name}/${page}` //page = display how many page results.
    method: "GET",
    headers: {
      // "X-RapidAPI-Key": "852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7", //Y.Y
      "X-RapidAPI-Key": "fffe315f72mshd5fceec7212aa6fp1c03edjsnb6614b02df7a", //D.T.
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  $.ajax(settings).then(function (dataMAL) {
    //pulling character data from MAL_data.
    console.log(dataMAL);
    // let animetitle = [];
    for (i = 0; i < dataMAL.length; i++) {
      animeIDlist.push(dataMAL[i].myanimelist_id); //input anime ID into array
      // animetitle.push(dataMAL[i].title) //input anime title into array
    }
    // animeID_title = animetitle.map((title, index) => {return { title, id: animeID[index] };})  //combines 2arrays (anime title & ID) into an array object.
    //if animeID is blank, no anime found. stops function.
    if (animeIDlist.length == 0) {
      return;
    } else {
      // console.log("anime found");
      let AnimeIDIndex = findIndexOfSmallestNumber(animeIDlist);
      MAL_IDsearch(animeIDlist[AnimeIDIndex]);

      // for(i=0;i<animeIDlist.length; i++){  //note to self: This is dangerous. Could ramp up API numbers too quickly.
      //   let result = MAL_IDsearch(animeID[i]);
      //   if (result) break;
      // if(results===true){break}; //break out of MAL_IDsearch() loop, if character name is found.
      // }
    }
  });
}

function MAL_IDsearch(animeID) {
  //Using RapidAPI, to grab MAL API.
  console.log("MAL_IDsearch is running");
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://myanimelist.p.rapidapi.com/anime/${animeID}`, //search via animeID
    method: "GET",
    headers: {
      // "X-RapidAPI-Key": "852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7",  //Y.Y
      "X-RapidAPI-Key": "fffe315f72mshd5fceec7212aa6fp1c03edjsnb6614b02df7a", //D.T.
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (dataMAL2) {
    //pulling character data from MAL_data.
    console.log(dataMAL2);
    console.log("dataMal2.character.length: " + dataMAL2.characters.length);
    let arraylength = dataMAL2.characters.length; //check how many characters are in the array.
    let charName = [];
    let charid = [];
    let charURL = [];

    for (i = 0; i < arraylength; i++) {
      //loop to add character URL & character to their respective array
      charURL.push(dataMAL2.characters[i].myanimelist_url); //adds character url into array. The URL also contains character ID.
      charName.push(dataMAL2.characters[i].name); //adds character name into array.
    }
    console.log(charName);

    charid = charURL.map((url) => {
      //separate the character ID from character url. using regrex.
      const regex = /\/(\d+)\//; // Regular expression, aka to grab only characterID, as they are the only number in link.
      const match = url.match(regex);
      return match ? match[1] : null; // Return the matched number or null if no match found
    });
    characterlist = charName.map((name, index) => {
      return { name, id: charid[index] };
    }); //combines two arrays (character name & character ID) into array objects

    //Filter1. Looks for exact 'matched' name. If search "Saitama", the API data must also be exactly "Saitama." But our data filters the string as lowercase.
    for (let cl of characterlist) {
      // Loop through the array to find the object with the name as "searchedcharacter"
      // results = false;
      if (cl.name.toLowerCase() == searchedcharacter.toLowerCase()) {
        console.log(
          "Character input, found match in MAL API database. Onto image search API."
        );
        characterID = cl.id;
        results = true;
        Jikan_CharacterImageSearch(characterID); //this function finds image of character.
        break; // If found, stop loop
      } else {
        console.log("Filter#1 failed. Running Filter#2");
        //Filter2: If searched "ichigo" and data has "Kurosaki, Ichigo", will use that data results (Note: This will not be perfect if there are multiple last name.)
        for (let i = 0; i < charName.length; i++) {
          if (
            charName[i].toLowerCase().includes(searchedcharacter.toLowerCase())
          ) {
            console.log("Filter#2 completed: " + i);
            Jikan_CharacterImageSearch(charid[i]); //this function finds image of character.
            break;
          } 
          else {
            console.log("Filter#2 failed. Filter#3 pending.");
             //Filter3.0: This assumes string with "_" underscore. For example: "Kurosaki_Ichigo". Replace "_" with " " (space), then repeats filter#2.  
            //Filter3.1: Then, it filters any commas. For Example "Kurosaki, Ichigo". Replace "," with "" (no-space).
            let  charNameFilter3 = charName.map(item => item.replace(/_/g, ' ')); //Filter 3.0
            charNameFilter3 = charNameFilter3.map(item => item.replace(/,/g, '')); //Filter 3.1
            if (charNameFilter3[i].toLowerCase().includes(searchedcharacter.toLowerCase())) {
              console.log("Filter#3 Success: " +i);
              Jikan_CharacterImageSearch(charid[i]); //this function finds image of character.
              break;
            }
            console.log("All three filters failed at MAL_IDsearch(animeID).");   
          }
        }
      }
    }
  });
}

function Jikan_CharacterImageSearch(characterID) {
  console.log("Jikan_CharacterImageSearch is running");
  fetch(`https://api.jikan.moe/v4/characters/${characterID}`) //jikan API data fetch, using character ID from MAL API.
    .then((response) => response.json())
    .then(function (Jikandata) {
      photoURL = Jikandata.data.images.jpg.image_url; //photo url for the character
      $("#quotesimg").attr("src", photoURL); //adds image into html
      $(".badge").css("background-image", `url(${photoURL})`);
      console.log("image pulled: " + photoURL);
    });
}

//function that returns the smallest number within an array. To be used to filter anime ID titles. I believe smaller number will have higher changes of character IDs. 
function findIndexOfSmallestNumber(arr) {
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) { //loops through array. Look to see if number is smaller, if yes then replace, else skip. 
    if (arr[i] < arr[smallestIndex]) {
      smallestIndex = i;
    }
  }
  return smallestIndex; //returns smallest number as an index within inputted "arr" or array. 
};

// search history codes below:
let searchHistory = JSON.parse(localStorage.getItem("searchHistory")); // Load search history from Local Storage.
if (searchHistory === null) {
  searchHistory = [];
} //if none, set array to empty
// Function to update search history in Local Storage
function updateSearchHistory() {
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  displaySearchHistory();
}

// Function to display search history in the UI
function displaySearchHistory() {
  $("#searchBox").val(""); //reset search box, from any added input to "" or empty
  const $searchHistoryList = $("#lastResults"); //set UI class 'searchResults' for any history list
  $searchHistoryList.empty(); //empties that list.

  for (const searchCharacters of searchHistory) {
    const listItem = $("<p>").text(searchCharacters); //create <p> with search history items
    $searchHistoryList.append(listItem); //injects into html.
  }
}

// Function to handle citysearch submission.
function handleSearch() {
  const max_history_length = 8; //max city history limit is 8.
  const searchTerm = $("#searchBox").val(); //search the value of search box.

  if (searchTerm === "") {
    return;
  } //if searched city is empty, if true then exit function.
  // Check if the searched city, already exists in the history
  const existingIndex = searchHistory.indexOf(searchTerm);
  if (existingIndex !== -1) {
    searchHistory.splice(existingIndex, 1); // If it exists, remove it from the history
  }
  searchHistory.unshift(searchTerm); // Add the new search term at the beginning of the history
  // Limit the search history to the maximum length
  if (searchHistory.length > max_history_length) {
    searchHistory.pop();
  } //pop()=add to front
  updateSearchHistory(); // Update the Local Storage and UI
}

updateSearchHistory();

button.addEventListener("click", function () {
  reset();

  searchedcharacter = $("#searchBox").val();

  $("#characters").empty();
  $("#invalidcheck").empty();
  getCharacterQuotes(); //currently commented out to prevent overusage of API.
  //dummygetCharacterQuotes(); //fake quote function. used to keep api fresh.

  handleSearch(); //search history function.
  // if(animetitle !==""){ //if anime title is not empty. This title is pulled from Anime Chan API.
  //   MAL_AnimeNameSearch(); //MAL API search for anime titles
  // }
});
