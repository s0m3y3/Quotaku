const settings = {
	async: true,
	crossDomain: true,
	url: 'https://myanimelist.p.rapidapi.com/anime/34134',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://myanimelist.p.rapidapi.com/anime/1',  //anime based on ID. NOTE: #1 = Cowboy Bebop
//     // url: 'https://myanimelist.p.rapidapi.com/anime/search/Death%20Note',  //search anime
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7',
// 		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://kitsu.io/api/edge/characters/1',
// 	method: 'GET',
// 	headers: {
//         'Accept': 'application/vnd.api+json',
//         'Content-Type': 'application/vnd.api+json',
//         'CLIENT_ID': 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

//WORKS!! Pulls anime movies list, based on character names. 
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=One%20piece',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '852cf6fe87msh345bf55d7f1604cp186a82jsn7a44f88d0cf7',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });




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