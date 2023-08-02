//NOTE: This is a script for testing only. <---   
//NOTE: This is a script for testing only. <---   
//NOTE: This is a script for testing only. <---   

// photoURL = "./assets/imageplaceholder1.jpg"
// nametest = "SailorMoon"

// function testme(){
// $("#charactername").append(nametest);
// $("#quotesimg").attr("src", photoURL); //adds image into html
// abc = document.getElementById("charactername");
// // abc.text("testing character name");
// };
// testme();

chartest1 = [
  "Kurosaki, Ichigo",
  "Kuchiki, Rukia",
  "Abarai, Renji",
  "Ishida, Uryuu",
  "Kokuto",
  "Hitsugaya, Toushirou",
  "Cifer, Ulquiorra",
  "Kuchiki, Byakuya",
  "Inoue, Orihime",
  "Matsumoto, Rangiku"
]

chartest2 = [
  "Kurosaki_Ichigo",
  "Kuchiki_Rukia",
  "Abarai_Renji",
  "Ishida_Uryuu",
  "Kokuto",
  "Hitsugaya_Toushirou",
  "Cifer, Ulquiorra",
  "Kuchiki_Byakuya",
  "Inoue, Orihime",
  "Matsumoto_Rangiku"
]

// char00 = "Abarai, Renji";
// console.log(char00);
// foundIndex = -1;
// for (let i = 0; i < chartest00.length; i++) {
//   if (chartest00[i].toLowerCase().includes(char00.toLowerCase())) {
//     foundIndex = i;
//     console.log(foundIndex);
//     break;
//   }
// }

// console.log("test");
// regrex = "/[ ,_]+/"
// char00_split = char00.toLowerCase().split(",");
// console.log("split results: "+char00_split);
// console.log(typeof char00_split);
// console.log(char00_split[0]);
// function replaceUnderscoresWithSpaces(arr) {
//   return arr.map(item => item.replace(/_/g, ' '));
// }
// charhey = replaceUnderscoresWithSpaces(chartest2);
let updatedArray = [];
updatedArray = chartest2.map(item => item.replace(/_/g, ' '));
updatedArray = updatedArray.map(item => item.replace(/,/g, ''));
console.log("updatedArray: ");
console.log(updatedArray);



// for (let i = 0; i < chartest00.length; i++) {
//   if (charName[i].toLowerCase().includes(searchedcharacter.toLowerCase())) {
//     console.log("Filter#2 completed: "+ i);
//     Jikan_CharacterImageSearch(charid[i]); //this function finds image of character.
//     break;
//   }    
// };
// for (i=0; i<chartest00.length; i++){  // this assumes string with a comma spacing "Kurosaki, Ichigo."
//   chartest00_split = chartest00[i].toLowerCase().split(",");
//   console.log("trimmed: "+chartest00_split[0].trim());
//   indexfilter2=-1;
//   for(j=0; j<chartest00_split.length;j++){
//     if(chartest00_split[j]==char00_split[0] || chartest00_split[j]==char00_split[1]){
//       console.log("Loop filter#2 works, for first-string-split-trim. j= "+j);
//       indexfilter2 =j;
//       break;
//     }
//     else{
//       if(chartest00_split[j]==char00_split[1] || chartest00_split[j]==char00_split[1]){
//         console.log("Loop filter#2 works, for second-string-split-trim. j= "+j);
//         indexfilter2 =j;
//         break;
//       } 
//     }
//   }
// };



//To do list: 
//(1) quotes empty string
//(2)


// button.addEventListener("click", function () {
//   reset();

//   searchedcharacter = $("#searchBox").val();
//   $("#characters").empty();
//   getCharacterQuotes(); //currently commented out to prevent overusage of API.
//   handleSearch(); //search history function.

// });



// animetitle = "";

// function MAL_AnimeNameSearch(){  //Using RapidAPI, to grab MAL API.
//     console.log("MAL_AnimeNameSearch is running");
//     let MAL_animesearch = animetitle.replace(/ /g, "%20");//repace any spacing with "%20", required for MAL API search. 
  
//     const settings = {
//       async: true,
//       crossDomain: true,
//       url: `https://myanimelist.p.rapidapi.com/anime/search/${MAL_animesearch}`, //MAL API Link
//       //other searchable link below: 
//       // url: `https://myanimelist.p.rapidapi.com/anime/${animeID}`   //search via animeID
//       // url: `https://myanimelist.p.rapidapi.com/anime/search/${anime_name}/${page}` //page = display how many page results.
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7',
//           'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
//       },
//     //   error: function (error) {
//     //     console.log("Error at MAL_AnimeNameSearch(): "+ error);
//     //     $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg'); //adds image into html
//     //     // ... handle the error here ...
//     //   }
//     };
  
//     $.ajax(settings)
//     .done(function (dataMAL) { //pulling character data from MAL_data. 
//       console.log(dataMAL);
//       // let animetitle = [];
//       if(dataMAL.includes("404")){
//         console.log("1 dataMAL is blank, or not working.");
//         $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg');
//       }

//       for (i=0;i<dataMAL.length;i++){ 
//           animeIDlist.push(dataMAL[i].myanimelist_id); //input anime ID into array
//           // animetitle.push(dataMAL[i].title) //input anime title into array
//       }
//       console.log("animeIDlist:");
//       console.log(animeIDlist);
//     })
//     .fail(function(){
//         conole.log("3 dataMAL is blank, or not working.");
//         $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg');
//     })
    
//     // error(function() {
//     //     conole.log("4 dataMAL is blank, or not working.");
//     //     $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg');
//     // })
// };
// MAL_AnimeNameSearch();


//MAL anime search using "one punch man" data 
// MAL_onepunchman_animesearch = [
//     {
//         "myanimelist_url": "https://myanimelist.net/anime/34134/One_Punch_Man_2nd_Season",
//         "title": "One Punch Man 2nd Season",
//         "description": "In the wake of defeating Boros and his mighty army, Saitama has returned to his unremarkable everyday life in Z-City. However, unbeknownst to him, the number of monsters appearing is still continuousl...read more.",
//         "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1247/122044.jpg?s=8b1f9ee697c9d30f0f268ab363d36835",
//         "myanimelist_id": 34134
//     },
//     {
//         "myanimelist_url": "https://myanimelist.net/anime/31772/One_Punch_Man_Specials",
//         "title": "One Punch Man Specials",
//         "description": "Specials included in the Blu-ray and DVD releases of One Punch Man.",
//         "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1452/97840.jpg?s=2ba3ee89bb332f3de604650370affe83",
//         "myanimelist_id": 31772
//     },
//     {
//         "myanimelist_url": "https://myanimelist.net/anime/30276/One_Punch_Man",
//         "title": "One Punch Man",
//         "description": "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process....read more.",
//         "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
//         "myanimelist_id": 30276
//     },
//     {
//         "myanimelist_url": "https://myanimelist.net/anime/39652/One_Punch_Man_2nd_Season_Commemorative_Special",
//         "title": "One Punch Man 2nd Season Commemorative Special",
//         "description": "One Punch Man 2nd Season's commemorative recap special.",
//         "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1550/123539.jpg?s=f5db3be62c7a4051c0d7dfaf953f5b78",
//         "myanimelist_id": 39652
//     },
//     {
//         "myanimelist_url": "https://myanimelist.net/anime/52807/One_Punch_Man_3",
//         "title": "One Punch Man 3",
//         "description": "Third season of One Punch Man.",
//         "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1885/127108.jpg?s=3fdb3c1d81249b1c1cafda23cf17e3c6",
//         "myanimelist_id": 52807
//     }
// ];
// // https://api.jikan.moe/v4/characters/73935/full   //link for jikan character ID search. Most helpful.  

//Dummy Data below is a pull from MAL, using anime ID of 34134. 
MAL_onepuchman_id34134 = {
    "picture_url": "https://cdn.myanimelist.net/images/anime/1247/122044.jpg",
    "alternative_titles": {
        "synonyms": "One Punch-Man 2, One-Punch Man 2, OPM 2",
        "german": "One Punch Man Staffel 2",
        "english": "One Punch Man Season 2",
        "french": "One Punch Man Saison 2",
        "japanese": "ワンパンマン",
        "spanish": "One Punch Man Temporada 2"
    },
    "information": {
        "studios": [
            {
                "url": "https://myanimelist.net/anime/producer/7/JCStaff",
                "name": "J.C.Staff"
            }
        ],
        "aired": "Apr 10, 2019 to Jul 3, 2019",
        "source": "Web manga",
        "status": "Finished Airing",
        "producers": [
            {
                "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo",
                "name": "TV Tokyo"
            },
            {
                "url": "https://myanimelist.net/anime/producer/1261/Good_Smile_Company",
                "name": "Good Smile Company"
            },
            {
                "url": "https://myanimelist.net/anime/producer/1365/Shueisha",
                "name": "Shueisha"
            },
            {
                "url": "https://myanimelist.net/anime/producer/1501/JR_East_Marketing___Communications",
                "name": "JR East Marketing & Communications"
            },
            {
                "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts",
                "name": "Bandai Namco Arts"
            },
            {
                "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits",
                "name": "Bandai Spirits"
            }
        ],
        "genres": [
            {
                "url": "https://myanimelist.net/anime/genre/1/Action",
                "name": "Action"
            },
            {
                "url": "https://myanimelist.net/anime/genre/4/Comedy",
                "name": "Comedy"
            }
        ],
        "genre": "None",
        "premiered": [
            {
                "url": "https://myanimelist.nethttps://myanimelist.net/anime/season/2019/spring",
                "name": "Spring 2019"
            }
        ],
        "licensors": [
            {
                "url": "https://myanimelist.net/anime/producer/119/VIZ_Media",
                "name": "VIZ Media"
            }
        ],
        "theme": "None",
        "broadcast": "Wednesdays at 01:35 (JST)",
        "demographic": [
            {
                "url": "https://myanimelist.net/anime/genre/42/Seinen",
                "name": "Seinen"
            }
        ],
        "episodes": "12",
        "rating": "R - 17+ (violence & profanity)",
        "duration": "23 min. per ep.",
        "themes": [
            {
                "url": "https://myanimelist.net/anime/genre/50/Adult_Cast",
                "name": "Adult Cast"
            },
            {
                "url": "https://myanimelist.net/anime/genre/20/Parody",
                "name": "Parody"
            },
            {
                "url": "https://myanimelist.net/anime/genre/31/Super_Power",
                "name": "Super Power"
            }
        ],
        "type": [
            {
                "url": "https://myanimelist.nethttps://myanimelist.net/topanime.php?type=tv",
                "name": "TV"
            }
        ]
    },
    "statistics": {
        "popularity": 57,
        "favorites": 6330,
        "score": 7.5,
        "members": 1605878,
        "ranked": 1734
    },
    "title_en": "One Punch Man Season 2",
    "characters": [
        {
            "myanimelist_url": "https://myanimelist.net/character/73935/Saitama",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/17635/Makoto_Furukawa",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/11/294388.jpg?s=a56fc5484b23811f3308aad1dc7b8b2e",
            "name": "Saitama",
            "voice_actor_name": "Furukawa, Makoto",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/74503.jpg?s=32feef499daea673ae4a3406b09dca18"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/73979/Genos",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/20156/Kaito_Ishikawa",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/9/297329.jpg?s=1dd6cf2edbb45d8bd1e654541226901d",
            "name": "Genos",
            "voice_actor_name": "Ishikawa, Kaito",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/73776.jpg?s=cd6c229e835d6273a2e5eaf6c9a8f7e0"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/112889/Garou",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/112/Hikaru_Midorikawa",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/9/381817.jpg?s=746f6c6dee054abbdcd26108816ace87",
            "name": "Garou",
            "voice_actor_name": "Midorikawa, Hikaru",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/76155.jpg?s=9a30973e8b9a40a1fbd4d6cf0b20d790"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/81929/Tatsumaki",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/6686/Aoi_Yuuki",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/8/296110.jpg?s=e6e307ea2289b2d5b74a407668a52483",
            "name": "Tatsumaki",
            "voice_actor_name": "Yuuki, Aoi",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/67808.jpg?s=3074a08319fa6f05424eed1f508e2233"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/81935/Mumen_Rider",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/513/Yuuichi_Nakamura",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/15/344059.jpg?s=a1f8f15abb64c481887dd4368e71f82d",
            "name": "Mumen Rider",
            "voice_actor_name": "Nakamura, Yuuichi",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/74056.jpg?s=3a2a5b0adb316212ab5c6f6f214a3461"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/81931/Fubuki",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/869/Saori_Hayami",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/10/473637.jpg?s=7ed26a04a631d8f3175a8ee4b29932fa",
            "name": "Fubuki",
            "voice_actor_name": "Hayami, Saori",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/66041.jpg?s=67c9ecfc03dd71f99e58d4cfbfe40765"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/74167/Speed-o-Sound_Sonic",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/672/Yuuki_Kaji",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/2/294250.jpg?s=5cc41f3b4143928a0a665407b4db76be",
            "name": "Speed-o'-Sound Sonic",
            "voice_actor_name": "Kaji, Yuuki",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/66416.jpg?s=91e56f66a0be72a89dff77e0d8ec55ce"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/94239/King",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/25/Hiroki_Yasumoto",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/5/295005.jpg?s=68df50f95bd6ffeb1553a7a8e652e1b8",
            "name": "King",
            "voice_actor_name": "Yasumoto, Hiroki",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/42158.jpg?s=7b70fcd60f26e4669cc945e4fde4b08d"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/127446/Metal_Bat",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/98/Wataru_Hatano",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/12/296538.jpg?s=8555fd08e39b12f1af6bdda61eb7f9df",
            "name": "Metal Bat",
            "voice_actor_name": "Hatano, Wataru",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/64697.jpg?s=ed241aecedd7a9ee460bbc3989b6b966"
        },
        {
            "myanimelist_url": "https://myanimelist.net/character/86029/Puripuri_Prisoner",
            "voice_actor_myanimelist_url": "https://myanimelist.net/people/173/Masaya_Onosaka",
            "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/15/296951.jpg?s=67627c9c169a49e7c66799f82204a47b",
            "name": "Puripuri Prisoner",
            "voice_actor_name": "Onosaka, Masaya",
            "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/14617.jpg?s=167ecdb5da1b0399a866939f1474bc81"
        }
    ],
    "synopsis": "In the wake of defeating Boros and his mighty army, Saitama has returned to his unremarkable everyday life in Z-City. However, unbeknownst to him, the number of monsters appearing is still continuously on the rise, putting a strain on the Hero Association's resources. Their top executives decide on the bold move of recruiting hoodlums in order to help in their battle. But during the first meeting with these potential newcomers, a mysterious man calling himself Garou makes his appearance. Claiming to be a monster, he starts mercilessly attacking the crowd.\n\r\nThe mysterious Garou continues his rampage against the Hero Association, crushing every hero he encounters. He turns out to be the legendary martial artist Silverfang's best former disciple and seems driven by unknown motives. Regardless, this beast of a man seems unstoppable. Intrigued by this puzzling new foe and with an insatiable thirst for money, Saitama decides to seize the opportunity and joins the interesting martial arts competition.\n\r\nAs the tournament commences and Garou continues his rampage, a new great menace reveals itself, threatening the entire human world. Could this finally be the earth-shattering catastrophe predicted by the great seer Madame Shibabawa?\n\r\n[Written by MAL Rewrite]",
    "title_ov": "One Punch Man 2nd Season"
}

//dummydata_Jikan. Using characterID of 73935 (saitama), as a search. 
dummydata_Jikan = {
    "data": {
        "mal_id": 73935,
        "url": "https://myanimelist.net/character/73935/Saitama",
        "images": {
            "jpg": {
                "image_url": "https://cdn.myanimelist.net/images/characters/11/294388.jpg"
            },
            "webp": {
                "image_url": "https://cdn.myanimelist.net/images/characters/11/294388.webp",
                "small_image_url": "https://cdn.myanimelist.net/images/characters/11/294388t.webp"
            }
        },
        "name": "Saitama",
        "name_kanji": "サイタマ",
        "nicknames": [
            "Caped Baldy"
        ],
        "favorites": 46857,
        "about": "Race: Human\nAge: 25\nHeight: 175 cm (5'9\")\nWeight: 70 kg (154 lbs)\nLocation: Z-City\nAbilities: Immeasurable Strength, Immeasurable Speed and Reflexes, Infinite Stamina, Supernatural Senses, Invulnerability, Indomitable Will\nOccupation: Superhero\nLevel:\n\nAffiliation: Hero Association\nPartner(s): Genos\n\nSaitama is the most powerful hero alive. Having apparently trained himself to superhuman condition, Saitama faces an existential crisis as he is now too powerful to gain any thrill from his heroic deeds.\n\nHe is registered with the Heroes Association as a C-Class Superhero and is tasked to defend Z-City against Mysterious Beings.\n\nSaitama is usually deliberately drawn in a simpler style than other characters, with a very rounded head and only a simple mouth and eyes. When drawn in a more 'action-oriented' style with more detail, Saitama is revealed to have sharp features, dangerous looking eyes, and chiseled musculature. His costume is a plain yellow jumpsuit with a short zipper at the collar and a belt. The costume is finished out by an ensemble of red boots and gloves, and a white cape.\n\nFor a superhero, Saitama is rather laid back. Because even the mightiest foes pose no challenge to him, he doesn't take his hero work very seriously. In spite of this, he is constantly searching for an opponent that can challenge him, since his superhero work is beginning to bore him because it's too easy. The combination of his attitude, unstoppable strength, and distinctively simple and 'unimpressive' appearance often cause his battles to become anticlimactic. Saitama will usually allow his opponents to rant about their motives and power up into their strongest forms before suddenly and nonchalantly obliterating them with one punch.\n\n(Source: One Punch-Man Wiki)"
    }
}

//data pulled with MAL_onepuchman_id34134()
testcharacterlist = [
    {
        "name": "Saitama",
        "id": "73935"
    },
    {
        "name": "Genos",
        "id": "73979"
    },
    {
        "name": "Garou",
        "id": "112889"
    },
    {
        "name": "Tatsumaki",
        "id": "81929"
    },
    {
        "name": "Mumen Rider",
        "id": "81935"
    },
    {
        "name": "Fubuki",
        "id": "81931"
    },
    {
        "name": "Speed-o'-Sound Sonic",
        "id": "74167"
    },
    {
        "name": "King",
        "id": "94239"
    },
    {
        "name": "Metal Bat",
        "id": "127446"
    },
    {
        "name": "Puripuri Prisoner",
        "id": "86029"
    }
];
// const targetName = "Saitama";
// // Loop through the array to find the object with the name "Saitama"
// for (const character of testcharacterlist) {
//   if (character.name === targetName) {
//     saitamaId = character.id;
//     console.log("found character: "+ targetName);
//     break; // If found, no need to continue the loop
//   }
// }

salormoon_ID530 = {
    "picture_url": "https://cdn.myanimelist.net/images/anime/1440/92258.jpg",
    "alternative_titles": {
      "synonyms": "Pretty Soldier Sailor Moon",
      "german": "Sailor Moon",
      "english": "Sailor Moon",
      "french": "Sailor Moon",
      "japanese": "美少女戦士セーラームーン",
      "spanish": "Sailor Moon"
    },
    "information": {
      "studios": [
        {
          "url": "https://myanimelist.net/anime/producer/18/Toei_Animation",
          "name": "Toei Animation"
        }
      ],
      "aired": "Mar 7, 1992 to Feb 27, 1993",
      "source": "Manga",
      "status": "Finished Airing",
      "producers": [
        {
          "url": "https://myanimelist.net/anime/producer/55/TV_Asahi",
          "name": "TV Asahi"
        },
        {
          "url": "https://myanimelist.net/anime/producer/2292/Toei_Advertising",
          "name": "Toei Advertising"
        }
      ],
      "genres": [
        {
          "url": "https://myanimelist.net/anime/genre/10/Fantasy",
          "name": "Fantasy"
        },
        {
          "url": "https://myanimelist.net/anime/genre/22/Romance",
          "name": "Romance"
        }
      ],
      "genre": "None",
      "premiered": [
        {
          "url": "https://myanimelist.nethttps://myanimelist.net/anime/season/1992/spring",
          "name": "Spring 1992"
        }
      ],
      "licensors": [
        {
          "url": "https://myanimelist.net/anime/producer/97/ADV_Films",
          "name": "ADV Films"
        },
        {
          "url": "https://myanimelist.net/anime/producer/119/VIZ_Media",
          "name": "VIZ Media"
        },
        {
          "url": "https://myanimelist.net/anime/producer/269/DiC_Entertainment",
          "name": "DiC Entertainment"
        }
      ],
      "theme": "None",
      "broadcast": "Saturdays at 19:00 (JST)",
      "demographic": [
        {
          "url": "https://myanimelist.net/anime/genre/25/Shoujo",
          "name": "Shoujo"
        }
      ],
      "episodes": "46",
      "rating": "PG-13 - Teens 13 or older",
      "duration": "24 min. per ep.",
      "themes": [
        {
          "url": "https://myanimelist.net/anime/genre/66/Mahou_Shoujo",
          "name": "Mahou Shoujo"
        },
        {
          "url": "https://myanimelist.net/anime/genre/6/Mythology",
          "name": "Mythology"
        }
      ],
      "type": [
        {
          "url": "https://myanimelist.nethttps://myanimelist.net/topanime.php?type=tv",
          "name": "TV"
        }
      ]
    },
    "statistics": {
      "popularity": 597,
      "favorites": 10016,
      "score": 7.73,
      "members": 369057,
      "ranked": 1081
    },
    "title_en": "Sailor Moon",
    "characters": [
      {
        "myanimelist_url": "https://myanimelist.net/character/2030/Usagi_Tsukino",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/9/Kotono_Mitsuishi",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/4/312776.jpg?s=6048c7b4ea17ad1b1408c6464e531a73",
        "name": "Tsukino, Usagi",
        "voice_actor_name": "Mitsuishi, Kotono",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/75738.jpg?s=0a5dc28c215fd63def12e226bbde9305"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/2367/Rei_Hino",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/437/Michie_Tomizawa",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/2/324042.jpg?s=4f5c4f21c318790ca1e63a07b0f7b1af",
        "name": "Hino, Rei",
        "voice_actor_name": "Tomizawa, Michie",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/31367.jpg?s=26a4ddd623b00f3a6ed14d1df5916a35"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/2825/Makoto_Kino",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/438/Emi_Shinohara",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/2/324032.jpg?s=a977cea447833c962a846a71f7b46fb4",
        "name": "Kino, Makoto",
        "voice_actor_name": "Shinohara, Emi",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/53897.jpg?s=4cd415e9632a442983119c0449b023ec"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/2826/Minako_Aino",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/436/Rica_Fukami",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/14/324034.jpg?s=7d17dbc1f6b70cdea194ced7801ba645",
        "name": "Aino, Minako",
        "voice_actor_name": "Fukami, Rica",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/53945.jpg?s=c5f135b4b972c365d962436bae7a0d71"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/2366/Ami_Mizuno",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/80/Aya_Hisakawa",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/7/258703.jpg?s=c61aeb647982ae3e3dc33ec787d8fa4a",
        "name": "Mizuno, Ami",
        "voice_actor_name": "Hisakawa, Aya",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/55009.jpg?s=0a90d5fa92cd90c29ff395e341e21a0a"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/4013/Mamoru_Chiba",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/326/Toru_Furuya",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/5/160873.jpg?s=1e3d9cd0ff44497ee11dff97c018163b",
        "name": "Chiba, Mamoru",
        "voice_actor_name": "Furuya, Toru",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/65061.jpg?s=ee95a10b9ad71e8b9f6e870f032e72a6"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/5407/Luna",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/760/Keiko_Han",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/14/251831.jpg?s=30c3ccc6ebfee7631cd6546a7206a862",
        "name": "Luna",
        "voice_actor_name": "Han, Keiko",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/24171.jpg?s=8e94d201b946184c52852ae25152d9a3"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/5408/Artemis",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/752/Yasuhiro_Takato",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/3/67701.jpg?s=c5ee5747076ea85e11f6907d5f12aafb",
        "name": "Artemis",
        "voice_actor_name": "Takato, Yasuhiro",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/32419.jpg?s=45ef11409f4198f3672a8e0b85cbf153"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/8514/Zoisite",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/1026/Keiichi_Nanba",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/9/269809.jpg?s=7c5463344411818853d80e10dffd37c5",
        "name": "Zoisite",
        "voice_actor_name": "Nanba, Keiichi",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/61040.jpg?s=9c4b1c68f0c26b6489e34ef5483805a7"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/8513/Nephrite",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/921/Katsuji_Mori",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/5/269807.jpg?s=e7e927624776829cf488321c944ea940",
        "name": "Nephrite",
        "voice_actor_name": "Mori, Katsuji",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/75868.jpg?s=1441a078ea5f55b446359be85d60d5fb"
      }
    ],
    "synopsis": "Usagi Tsukino is an average student and crybaby klutz who constantly scores low on her tests. Unexpectedly, her humdrum life is turned upside down when she saves a cat with a crescent moon on its head from danger. The cat, named Luna, later reveals that their meeting was not an accident: Usagi is destined to become Sailor Moon, a planetary guardian with the power to protect the Earth. Given a special brooch that allows her to transform, she must use her new powers to save the city from evil energy-stealing monsters sent by the malevolent Queen Beryl of the Dark Kingdom.\n\r\nBut getting accustomed to her powers and fighting villains are not the only things she has to worry about. She must find the lost princess of the Moon Kingdom, the other Sailor Guardians, and the Legendary Silver Crystal in order to save the planet from destruction.\n\r\n[Written by MAL Rewrite]",
    "title_ov": "Bishoujo Senshi Sailor Moon"
  }



  one_piece_anime = [
    {
      "myanimelist_url": "https://myanimelist.net/anime/459/One_Piece_Movie_01",
      "title": "One Piece Movie 01",
      "description": "Many years ago, Woonan, a legendary pirate, plundered one-third of the world's gold and stashed it away on his secret island shrouded in mystery. In the present, Luffy and the rest of the Straw Hats c...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1770/97704.jpg?s=fda1d9fca3cd6c3108916ca7c10e9e34",
      "myanimelist_id": 459
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/31490/One_Piece_Film__Gold",
      "title": "One Piece Film: Gold",
      "description": "Monkey D. Luffy and his Straw Hat Crew have finally arrived on Gran Tesoro, a ship carrying the largest entertainment city in the world. Drawn in by the chances of hitting the jackpot, the crew immedi...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/12/81081.jpg?s=4372756d851a7e1807a572817ac16574",
      "myanimelist_id": 31490
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/12859/One_Piece_Film__Z",
      "title": "One Piece Film: Z",
      "description": "The Straw Hat Pirates enter the rough seas of the New World in search of the hidden treasures of the Pirate King, Gol D. Roger－One Piece. On their voyage, the pirates come across a terrifying, powerfu...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/6/44297.jpg?s=ab00c4fc2882d3bb72c1985ada0af886",
      "myanimelist_id": 12859
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/21/One_Piece",
      "title": "One Piece",
      "description": "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager,...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",
      "myanimelist_id": 21
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/38234/One_Piece_Movie_14__Stampede",
      "title": "One Piece Movie 14: Stampede",
      "description": "Monkey D. Luffy and the Straw Hats arrive aboard the Sunny to the Pirates Festival, the world's largest celebration created by and for pirates. Buena Festa, the festival organizer, invites the Straw H...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1221/100550.jpg?s=0a8df0aea5d9091e628bab80b0dfae26",
      "myanimelist_id": 38234
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/9999/One_Piece_3D__Mugiwara_Chase",
      "title": "One Piece 3D: Mugiwara Chase",
      "description": "According to Weekly Shonen Jump, 3D movies of One Piece and Toriko were announced to premiere on March 19th, 2011. One Piece 3D is an original story about the missing straw hat of Luffy. ",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/4/32455.jpg?s=991795b9931d468dd5e49ab8249ba9a8",
      "myanimelist_id": 9999
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/4155/One_Piece_Film__Strong_World",
      "title": "One Piece Film: Strong World",
      "description": "Upon hearing news that islands in East Blue are being destroyed, Monkey D. Luffy and his crew go to investigate. On their way, however, an outlandish pirate ship appears out of the sky, helmed by the...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1192/116784.jpg?s=ab8dc5d03ecadd39b7b9ddff4cfbfb82",
      "myanimelist_id": 4155
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/462/One_Piece_Movie_04__Dead_End_no_Bouken",
      "title": "One Piece Movie 04: Dead End no Bouken",
      "description": "Luffy and crew arrive at the harbour of Anabaru. The local casino is holding a competition in which the winner will obtain a huge monetary reward if he reaches the finishing line first. Nami is elated...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1100/116767.jpg?s=a5923a15c9ba56da9bb272f8440543c1",
      "myanimelist_id": 462
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/19123/One_Piece__Episode_of_Merry_-_Mou_Hitori_no_Nakama_no_Monogatari",
      "title": "One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari",
      "description": "After Brook questions the origin of the Mini Merry name, Usopp and Chopper Tony Tony recall the adventures of the Straw Hat Crew's beloved ship, friend, and crew member—the Going Merry. Ussop abandons...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/9/61015.jpg?s=423da3514c8cd99731d53c53d42dc0de",
      "myanimelist_id": 19123
    },
    {
      "myanimelist_url": "https://myanimelist.net/anime/50410/One_Piece_Film__Red",
      "title": "One Piece Film: Red",
      "description": "As a child, Uta—the Red Hair Pirates' ex-musician and Monkey D. Luffy's childhood friend—promised that she would build a new era of freedom by performing joyful music for the world. Luffy and the Stra...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1668/125323.jpg?s=b95af7527a5747070bf6cef4f310e970",
      "myanimelist_id": 50410
    }
  ]

  animeID_21_onepiece= {
    "picture_url": "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    "alternative_titles": {
      "english": "One Piece",
      "synonyms": "OP",
      "japanese": "ONE PIECE"
    },
    "information": {
      "studios": [
        {
          "url": "https://myanimelist.net/anime/producer/18/Toei_Animation",
          "name": "Toei Animation"
        }
      ],
      "aired": "Oct 20, 1999 to ?",
      "genre": "None",
      "source": "Manga",
      "premiered": [
        {
          "url": "https://myanimelist.nethttps://myanimelist.net/anime/season/1999/fall",
          "name": "Fall 1999"
        }
      ],
      "licensors": [
        {
          "url": "https://myanimelist.net/anime/producer/102/Funimation",
          "name": "Funimation"
        },
        {
          "url": "https://myanimelist.net/anime/producer/252/4Kids_Entertainment",
          "name": "4Kids Entertainment"
        }
      ],
      "status": "Currently Airing",
      "producers": [
        {
          "url": "https://myanimelist.net/anime/producer/169/Fuji_TV",
          "name": "Fuji TV"
        },
        {
          "url": "https://myanimelist.net/anime/producer/416/TAP",
          "name": "TAP"
        },
        {
          "url": "https://myanimelist.net/anime/producer/1365/Shueisha",
          "name": "Shueisha"
        }
      ],
      "genres": [
        {
          "url": "https://myanimelist.net/anime/genre/1/Action",
          "name": "Action"
        },
        {
          "url": "https://myanimelist.net/anime/genre/2/Adventure",
          "name": "Adventure"
        },
        {
          "url": "https://myanimelist.net/anime/genre/10/Fantasy",
          "name": "Fantasy"
        }
      ],
      "rating": "PG-13 - Teens 13 or older",
      "demographic": [
        {
          "url": "https://myanimelist.net/anime/genre/27/Shounen",
          "name": "Shounen"
        }
      ],
      "episodes": "Unknown",
      "type": [
        {
          "url": "https://myanimelist.nethttps://myanimelist.net/topanime.php?type=tv",
          "name": "TV"
        }
      ],
      "duration": "24 min.",
      "theme": "None",
      "broadcast": "Sundays at 09:30 (JST)"
    },
    "statistics": {
      "popularity": 20,
      "favorites": 202988,
      "score": 8.7,
      "members": 2200967,
      "ranked": 57
    },
    "title_en": "",
    "characters": [
      {
        "myanimelist_url": "https://myanimelist.net/character/40/Luffy_Monkey_D",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/75/Mayumi_Tanaka",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/9/310307.jpg?s=3a27ab33bee665febfba970f24f203ba",
        "name": "Monkey D., Luffy",
        "voice_actor_name": "Tanaka, Mayumi",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/73373.jpg?s=5f12d8c1574269f19104f2dfc9188ef2"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/62/Zoro_Roronoa",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/123/Kazuya_Nakai",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/3/100534.jpg?s=4a00840eacc26e9ad86bae6f505e4826",
        "name": "Roronoa, Zoro",
        "voice_actor_name": "Nakai, Kazuya",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/62866.jpg?s=e273d6a6437551b8442159357c4018bd"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/305/Sanji",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/125/Hiroaki_Hirata",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/5/136769.jpg?s=52b8fdfc38114a389d83dd5301842556",
        "name": "Sanji",
        "voice_actor_name": "Hirata, Hiroaki",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/58150.jpg?s=123d1478fa407a1074a3f29b9381605e"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/61/Robin_Nico",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/130/Yuriko_Yamaguchi",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/13/136773.jpg?s=d3e32396042cafb9680a0d5223c4b018",
        "name": "Nico, Robin",
        "voice_actor_name": "Yamaguchi, Yuriko",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/41685.jpg?s=8f49c5b9dd6be5b0284b6fcac7f764ed"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/309/Chopper_Tony_Tony",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/128/Ikue_Ootani",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/3/100536.jpg?s=9536cd3e6fe65064a110b8d8b2f2808e",
        "name": "Tony Tony, Chopper",
        "voice_actor_name": "Ootani, Ikue",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/62833.jpg?s=c8bea365fcf286356c8bc405de580e55"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/723/Nami",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/76/Akemi_Okamura",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/2/263249.jpg?s=e6c7015918ec37d6b31d680f8944790c",
        "name": "Nami",
        "voice_actor_name": "Okamura, Akemi",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/1/58023.jpg?s=33db37ea25b128464ce8f3b9654ca3c5"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/724/Usopp",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/67/Kappei_Yamaguchi",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/16/188076.jpg?s=f24eccad7d76e7747895a9a945d8a3ed",
        "name": "Usopp",
        "voice_actor_name": "Yamaguchi, Kappei",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/65308.jpg?s=ffbaa1bf4a22f792da82dd490d8d5069"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/5627/Brook",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/898/Cho",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/10/161005.jpg?s=8e3191d4d9691fffe3dafaefaf086014",
        "name": "Brook",
        "voice_actor_name": "Cho",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/3/54628.jpg?s=017e8a7c532742ecccd9b99787beee94"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/64/Franky",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/131/Kazuki_Yao",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/13/210053.jpg?s=58f71be3af78384ac43869b8c681efaf",
        "name": "Franky",
        "voice_actor_name": "Yao, Kazuki",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/34103.jpg?s=f227dded0d9d87bdccc5e458dd046359"
      },
      {
        "myanimelist_url": "https://myanimelist.net/character/18938/Jinbe",
        "voice_actor_myanimelist_url": "https://myanimelist.net/people/744/Daisuke_Gouri",
        "picture_url": "https://cdn.myanimelist.net/r/42x62/images/characters/15/307148.jpg?s=20f8bf1d3a9854be84b67367849b1322",
        "name": "Jinbe",
        "voice_actor_name": "Gouri, Daisuke",
        "voice_actor_picture_url": "https://cdn.myanimelist.net/r/42x62/images/voiceactors/2/54825.jpg?s=0f96b14389084d0c84b96ac908e74860"
      }
    ],
    "synopsis": "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\n\r\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\n\r\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.\n\r\n[Written by MAL Rewrite]",
    "title_ov": "One Piece"
  }
// let animeIDlist = [];
//   for (i = 0; i < one_piece_anime.length; i++) {
//     animeIDlist.push(one_piece_anime[i].myanimelist_id); //input anime ID into array
//     // animetitle.push(dataMAL[i].title) //input anime title into array
//   }
//   console.log(animeIDlist);

//   const filteredAnimeIDs = one_piece_anime
//   .filter(anime => !anime.title.toLowerCase().includes("movie") && !anime.title.toLowerCase().includes("film"))
//   .map(anime => anime.myanimelist_id);

// console.log(filteredAnimeIDs);




Anime_deathnote= [
  {
      "myanimelist_url": "https://myanimelist.net/anime/2994/Death_Note__Rewrite",
      "title": "Death Note: Rewrite",
      "description": "When approached by a fellow death god tempted to visit the human realm, Ryuk recounts his own journey to the other side and the story of Light Yagami—a brilliant young man who impressed him there. One...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/13/8518.jpg?s=5635b5da41555166832be5996b511f59",
      "myanimelist_id": 2994
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/1535/Death_Note",
      "title": "Death Note",
      "description": "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Lig...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
      "myanimelist_id": 1535
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/35994/Satsuriku_no_Tenshi",
      "title": "Satsuriku no Tenshi",
      "description": "With dead and lifeless eyes, Rachel Gardner wishes only to die. Waking up in the basement of a building, she has no idea how or why she's there. She stumbles across a bandaged murderer named Zack, who...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1862/95624.jpg?s=1d12124c9601cf3a750386d62ab55f35",
      "myanimelist_id": 35994
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/34497/Death_March_kara_Hajimaru_Isekai_Kyousoukyoku",
      "title": "Death March kara Hajimaru Isekai Kyousoukyoku",
      "description": "Ichirou Suzuki, a programmer nearing his thirties, is drowning in work. Worn out, he eventually has a chance to catch up on sleep, only to wake up and discover himself in a fantasy RPG world, which is...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/4/88911.jpg?s=7f18639d60c8b03b670bc5902d1c9ef5",
      "myanimelist_id": 34497
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/3323/Kite_Liberator",
      "title": "Kite Liberator",
      "description": "In the previous series \"Kite,\" a killer—Sawa—suddenly disappears after she avenges her parents' death, and no one knows where she is. Several years later, a figure dances airily on the dark side of a...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/11/10228.jpg?s=5b83bbad6dd09d6df4c0e7f271d482f6",
      "myanimelist_id": 3323
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/28223/Death_Parade",
      "title": "Death Parade",
      "description": "After death, either Heaven or Hell awaits most humans. But for a select few, death brings them to Quindecim—a bar where only pairs of people who die at the same time can enter. Attending the bar is an...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08",
      "myanimelist_id": 28223
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/47257/Shinigami_Bocchan_to_Kuro_Maid",
      "title": "Shinigami Bocchan to Kuro Maid",
      "description": "As the elegant, frail flower petals wither away into lifeless ashes, the young duke is tragically reminded of the despicable power forced upon him—the ability to kill anything he touches. Scorned by h...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1471/115593.jpg?s=fd7b709d1debf2bf7204e541f1e868ae",
      "myanimelist_id": 47257
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/1479/City_Hunter__Kinkyuu_Namachuukei_Kyouakuhan_Saeba_Ryou_no_Saigo",
      "title": "City Hunter: Kinkyuu Namachuukei!? Kyouakuhan Saeba Ryou no Saigo",
      "description": "City Hunter, Saeba Ryo, after months of idleness, finally scores a client and it is none other than the beautiful Mega City TV newscaster, Sayaka, who fears for her life. What's more, the enemy are he...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1920/92378.jpg?s=bcce461f095d8814ddbb5290b84936a3",
      "myanimelist_id": 1479
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/38959/Lord_El-Melloi_II_Sei_no_Jikenbo__Rail_Zeppelin_Grace_Note",
      "title": "Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note",
      "description": "Ten years after facing defeat in the Fourth Holy Grail War, Waver Velvet, now Lord El Melloi II, teaches classes at the Clock Tower—the center of education for mages. However, his new status as \"Lord\"...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1107/111530.jpg?s=3a39b13ef9de8ea6ed4457b384044015",
      "myanimelist_id": 38959
  },
  {
      "myanimelist_url": "https://myanimelist.net/anime/53613/Dead_Mount_Death_Play",
      "title": "Dead Mount Death Play",
      "description": "A powerful necromancer known as the Corpse God dies during a legendary battle, only to be reborn as Polka Shinoyama, a young boy in modern-day Tokyo. In the process of trying to adapt to his new physi...read more.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1930/133758.jpg?s=b2dbac7bb7e9f2c47176512f4f045c83",
      "myanimelist_id": 53613
  }
]

function findIndexOfSmallestID(animeArray) {
  // Extract all the myanimelist_id values from the animeArray
  const animeIDs = animeArray.map(anime => anime.myanimelist_id);

  // Find the smallest value among the myanimelist_id values
  const smallestID = Math.min(...animeIDs);

  // Find the index of the smallest value in the animeArray
  const indexOfSmallestID = animeArray.findIndex(anime => anime.myanimelist_id === smallestID);

  return indexOfSmallestID;
}

const index = findIndexOfSmallestID(Anime_deathnote);
console.log("Index of the anime with the smallest myanimelist_id:", index);


let animeIDListTest =[]
for (i = 0; i < Anime_deathnote.length; i++) {
  animeIDListTest.push(Anime_deathnote[i].myanimelist_id); //input anime ID into array
  // animeTitleArray.push(dataMAL[i].title) //input anime title into array. 
}

console.log(animeIDListTest);
//function that returns the smallest number within an array. To be used to filter anime ID titles. I believe smaller number will have higher changes of character IDs. 
function findIndexOfSmallestNumber(arr) {
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[smallestIndex]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
}
const smallestIndex = findIndexOfSmallestNumber(animeIDListTest);
console.log("Index of the smallest number:", smallestIndex);