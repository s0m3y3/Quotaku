animetitle = "";

function MAL_AnimeNameSearch(){  //Using RapidAPI, to grab MAL API.
    console.log("MAL_AnimeNameSearch is running");
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
      },
    //   error: function (error) {
    //     console.log("Error at MAL_AnimeNameSearch(): "+ error);
    //     $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg'); //adds image into html
    //     // ... handle the error here ...
    //   }
    };
  
    $.ajax(settings)
    .done(function (dataMAL) { //pulling character data from MAL_data. 
      console.log(dataMAL);
      // let animetitle = [];
      if(dataMAL.includes("404")){
        console.log("1 dataMAL is blank, or not working.");
        $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg');
      }

      for (i=0;i<dataMAL.length;i++){ 
          animeIDlist.push(dataMAL[i].myanimelist_id); //input anime ID into array
          // animetitle.push(dataMAL[i].title) //input anime title into array
      }
      console.log("animeIDlist:");
      console.log(animeIDlist);
    })
    .fail(function(){
        conole.log("3 dataMAL is blank, or not working.");
        $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg');
    })
    
    // error(function() {
    //     conole.log("4 dataMAL is blank, or not working.");
    //     $("#quotesimg").attr("src", './assets/imageplaceholder1.jpg');
    // })
};

MAL_AnimeNameSearch();


//MAL anime search using "one punch man" data 
MAL_onepunchman_animesearch = [
    {
        "myanimelist_url": "https://myanimelist.net/anime/34134/One_Punch_Man_2nd_Season",
        "title": "One Punch Man 2nd Season",
        "description": "In the wake of defeating Boros and his mighty army, Saitama has returned to his unremarkable everyday life in Z-City. However, unbeknownst to him, the number of monsters appearing is still continuousl...read more.",
        "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1247/122044.jpg?s=8b1f9ee697c9d30f0f268ab363d36835",
        "myanimelist_id": 34134
    },
    {
        "myanimelist_url": "https://myanimelist.net/anime/31772/One_Punch_Man_Specials",
        "title": "One Punch Man Specials",
        "description": "Specials included in the Blu-ray and DVD releases of One Punch Man.",
        "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1452/97840.jpg?s=2ba3ee89bb332f3de604650370affe83",
        "myanimelist_id": 31772
    },
    {
        "myanimelist_url": "https://myanimelist.net/anime/30276/One_Punch_Man",
        "title": "One Punch Man",
        "description": "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process....read more.",
        "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
        "myanimelist_id": 30276
    },
    {
        "myanimelist_url": "https://myanimelist.net/anime/39652/One_Punch_Man_2nd_Season_Commemorative_Special",
        "title": "One Punch Man 2nd Season Commemorative Special",
        "description": "One Punch Man 2nd Season's commemorative recap special.",
        "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1550/123539.jpg?s=f5db3be62c7a4051c0d7dfaf953f5b78",
        "myanimelist_id": 39652
    },
    {
        "myanimelist_url": "https://myanimelist.net/anime/52807/One_Punch_Man_3",
        "title": "One Punch Man 3",
        "description": "Third season of One Punch Man.",
        "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1885/127108.jpg?s=3fdb3c1d81249b1c1cafda23cf17e3c6",
        "myanimelist_id": 52807
    }
];
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

  [
    {
        "myanimelist_url": "https://myanimelist.net/anime/49566/Nuan_Yang",
        "title": "Nuan Yang",
        "description": "A healing work about mutual salvation and joint efforts.",
        "picture_url": "https://cdn.myanimelist.net/r/50x70/images/anime/1593/117197.jpg?s=2de32bc3e24483823dd9403ecf17a692",
        "myanimelist_id": 49566
    }
]