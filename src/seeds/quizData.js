const quizData = [
    
    {
        "question": "What is the name of Ned Stark's sword?", 
        "choices": [
            "Winter",
            "Ice",
            "Wolf's Tooth",
            "Longclaw",
        ],
        "answer": "Ice"
    },
    {
        "question": <span>Who has never been part of the Night's Watch?</span>, 
        "choices": [
            <span>Locke</span>,
            <span>Mance Rayder</span>,
            <span>Aemon Targaryen</span>,
            <span>Orell</span>,
        ],
        "answer": "Orell"
    },
    {
        "question": <span>What is Sansa Stark's favorite treat?</span>, 
        "choices": [
            <span>Tyroshi pears</span>,
            <span>Lamprey pie</span>,
            <span>Lemon cakes</span>,
            <span>Berry Tarts</span>,
        ],
        "answer": "Lemon cakes"
    },
    {
        "question": <span>Who says, "If we die, we die. But first, we'll live"?</span>, 
        "choices": [
            <span>Shae</span>,
            <span>Tyrion Lannister</span>,
            <span>Ygritte</span>,
            <span>Bronn</span>,
        ],
        "answer": "Ygritte"
    },
    {
        "question": <span>What signaled Khal Drogo's undefeated glory to the Dothraki?</span>, 
        "choices": [
            <span>The size of his Khalasar</span>,
            <span>The length of his hair</span>,
            <span>The Paint on his chest</span>,
            <span>The number of his horses</span>,
        ],
        "answer": "The length of his hair"
    },
    {
        "question": <span>Who is Bran Stark named after?</span>, 
        "choices": [
            <span>His Uncle</span>,
            <span>His Grandfather</span>,
            <span>His Cousin</span>,
            <span>His Father</span>,
        ],
        "answer": "His Uncle"
    },
    {
        "question": <span>What title does Jorah Mormont's father hold?</span>, 
        "choices": [
            <span>Hand of the King</span>,
            <span>Lord Commander of the Kingsguard</span>,
            <span>Lord Paramount of the Reach</span>,
            <span>Lord Commander of the Night's Watch</span>,
        ],
        "answer": "Lord Commander of the Night's Watch"
    },
    {
        "question": <span>What is the only thing Tywin Lannister believes lives on?</span>, 
        "choices": [
            <span>The Family Name</span>,
            <span>The Family Honor</span>,
            <span>The Family Gold</span>,
            <span>The Family Glory</span>,
        ],
        "answer": "The Family Name"
    },
    {
        "question": <span>Who says, "Nobody cares what your father once told you"?</span>, 
        "choices": [
            <span>Cersei Lannister</span>,
            <span>Joffrey Baratheon</span>,
            <span>Robert Baratheon</span>,
            <span>Tyrion Lannister</span>,
        ],
        "answer": "Cersei Lannister"
    },
    {
        "question": <span>Who Says, "Chaos isn't a pit. It's a ladder"?</span>, 
        "choices": [
            <span>Varys</span>,
            <span>Cersei Lannister</span>,
            <span>Petyr Baelish</span>,
            <span>Tyrion Lannister</span>,
        ],
        "answer": "Petyr Baelish"
    },
    {
        "question": <span>Fill in the blank: "What is _______ may never die."</span>, 
        "choices": [
            <span>Dead</span>,
            <span>Iron born</span>,
            <span>Reborn</span>,
            <span>Drowned </span>,
        ],
        "answer": "Dead"
    },
    {
        "question": <span>Which of the following is a Pirate?</span>, 
        "choices": [
            <span>Gendry</span>,
            <span>Tycho Nestoris</span>,
            <span>Salladhor Saan</span>,
            <span>Mathos Seaworth</span>,
        ],
        "answer": "Salladhor Saan"
    },
    {
        "question": <span>Who saves Sansa Stark during the Riot of Kings Landing?</span>, 
        "choices": [
            <span>The Hound</span>,
            <span>Tyrion lammister</span>,
            <span>Joffrey Baratheon</span>,
            <span>Perer baelish</span>,
        ],
        "answer": ""
    },
    {
        "question": <span>Which of Danerys Targaryen's three Dragons are the largest?</span>, 
        "choices": [
            <span>Rhaegal</span>,
            <span>Drogon</span>,
            <span>Viserion</span>,
            <span>Balerion</span>,
        ],
        "answer": "Drogon"
    },
    {
        "question": <span>What caused the green fire at Blackwater bay?</span>, 
        "choices": [
            <span>Wildfire</span>,
            <span>Napalm</span>,
            <span>Greek fire</span>,
            <span>Essence of Nightshade</span>,
        ],
        "answer": "Wildfire"
    },
    {
        "question": <span>Who teaches Arya Stark to "Stick'em with the pointy end"?</span>, 
        "choices": [
            <span>Syrio Forel</span>,
            <span>Robb Stark</span>,
            <span>Ned Stark</span>,
            <span>Jon Snow</span>,
        ],
        "answer": "Jon Snow"
    },
    {
        "question": <span>Who HASN'T been the hand of the King?</span>, 
        "choices": [
            <span>Tyrion Lannister</span>,
            <span>Jon Arryn</span>,
            <span>Ned Stark</span>,
            <span>Petyr Baelish</span>,
        ],
        "answer": "Petyr Baelish"
    },
    {
        "question": <span>What is a Bastards lastname in Dorne?</span>, 
        "choices": [
            <span>Sand</span>,
            <span>Storm</span>,
            <span>Stone</span>,
            <span>Dune</span>,
        ],
        "answer": "Sand"
    },
    {
        "question": <span>Who did Robb Stark promise to Marry in exchange for troops?</span>, 
        "choices": [
            <span>A Bolton Girl</span>,
            <span>A Frey Girl</span>,
            <span>A Baratheon Girl</span>,
            <span>A Lannister Girl</span>,
        ],
        "answer": "A Frey Girl"
    },
    {
        "question": <span>What Animal is on House Baratheon's Sigil?</span>, 
        "choices": [
            <span>Boar</span>,
            <span>Bear</span>,
            <span>Stag</span>,
            <span>Wolf</span>,
        ],
        "answer": "Stag"
    },
    {
        "question": <span>Who is the Mad King to Daenerys Targaryen?</span>, 
        "choices": [
            <span>Her Father</span>,
            <span>Her Brother</span>,
            <span>Her Uncle</span>,
            <span>Her Grandfather</span>,
        ],
        "answer": "Her Father"
    },
    {
        "question": <span>What is NOT part of the Night's Watch vows?</span>, 
        "choices": [
            <span>Win no glory</span>,
            <span>Take no wife</span>,
            <span>Kill no Innocent</span>,
            <span>Father no children</span>,
        ],
        "answer": "Kill no Innocent"
    },
    {
        "question": <span>What are House Greyjoy's words?</span>, 
        "choices": [
            <span>We Remember</span>,
            <span>We Guard the way</span>,
            <span>We Pay the iron price</span>,
            <span>We do not sow</span>,
        ],
        "answer": "We do not sow"
    },
    {
        "question": <span>Tyrion Lannister has a tender spot for bastards, cripples, and ________?</span>, 
        "choices": [
            <span>Children</span>,
            <span>Imps</span>,
            <span>Drunks</span>,
            <span>Broken Things</span>,
        ],
        "answer": "Broken Things"
    },
    {
        "question": <span>What are House Lannisters words?</span>, 
        "choices": [
            <span>A Lannister always pays his debts</span>,
            <span>Ours be the Glory</span>,
            <span>Hear me Roar!</span>,
            <span>Righteous in Wrath</span>,
        ],
        "answer": "Hear me Roar!"
    },
    {
        "question": <span>Who says, "Of all the ways I'd kill you, poison would be the last"?</span>, 
        "choices": [
            <span>The Hound</span>,
            <span>Cersei Lannister</span>,
            <span>Mance Rayder</span>,
            <span>Arya Stark</span>,
        ],
        "answer": "Mance Rayder"
    },
    {
        "question": <span>Which Father Legitimizes his bastard son?</span>, 
        "choices": [
            <span>Oberyn Martell</span>,
            <span>Ned Stark</span>,
            <span>Robert Baratheon</span>,
            <span>Roose Bolton</span>,
        ],
        "answer": "Roose Bolton"
    },
    {
        "question": <span>Where is Melisandre from?</span>, 
        "choices": [
            <span>Asshai</span>,
            <span>The Eyrie</span>,
            <span>Dorne</span>,
            <span>Highgarden</span>,
        ],
        "answer": "Asshai"
    },
    {
        "question": <span>What is the name of Rickon's direworlf?</span>, 
        "choices": [
            <span>Shaggydog</span>,
            <span>Wolf</span>,
            <span>Summer</span>,
            <span>Greywind</span>,
        ],
        "answer": "Shaggydog"
    },
    {
        "question": <span>How does Robin Arryn want badmen to die?</span>, 
        "choices": [
            <span>By Fire</span>,
            <span>By Decapitation</span>,
            <span>By Poison</span>,
            <span>By Moon door</span>,
        ],
        "answer": "By Moon door"
    },
    {
        "question": <span>Where was the last Targaryen in Westeros before Daenerys?</span>, 
        "choices": [
            <span>Casterly Rock</span>,
            <span>King's Landing</span>,
            <span>Castle Black</span>,
            <span>Dorne</span>,
        ],
        "answer": "Castle Black"
    },
    {
        "question": <span>Who is sometimes reffered to as Ser Piggy or Prince Pork-Chop?</span>, 
        "choices": [
            <span>Jamie Lannister</span>,
            <span>Theon Greyjoy</span>,
            <span>Jon Snow</span>,
            <span>Samwell Tarly</span>,
        ],
        "answer": "Samwell Tarly"
    },
    {
        "question": <span>Who gives Robert Baratheon poisoned wine?</span>, 
        "choices": [
            <span>Lancel Lannister</span>,
            <span>Cersei Lannister</span>,
            <span>Jamie Lannister</span>,
            <span>Petyr Baelish</span>,
        ],
        "answer": "Lancel Lannister"
    },
    {
        "question": <span>Who does Oberyn Martell seek revenge for?</span>, 
        "choices": [
            <span>His Wife</span>,
            <span>His Daughter</span>,
            <span>His Sister</span>,
            <span>His Mother</span>,
        ],
        "answer": "His Sister"
    },
    {
        "question": <span>Who Says, "You are no son of mone"?</span>, 
        "choices": [
            <span>Robert Baratheon</span>,
            <span>Balon Greyjoy</span>,
            <span>Catelyn Stark</span>,
            <span>Tywin Lannister</span>,
        ],
        "answer": "Tywin Lannister"
    },
    {
        "question": <span>What does "dracarys" mean?</span>, 
        "choices": [
            <span>Burn</span>,
            <span>Fly</span>,
            <span>Kill</span>,
            <span>Dragonfire</span>,
        ],
        "answer": "Dragonfire"
    },
    {
        "question": <span>Which of the following is NOT one of the Night's Watch Orders?</span>, 
        "choices": [
            <span>Guards</span>,
            <span>Builders</span>,
            <span>Stewards</span>,
            <span>Rangers</span>,
        ],
        "answer": "Guards"
    },
    {
        "question": <span>Who cuts off Jamie Lannister's hand?</span>, 
        "choices": [
            <span>Rickard Karstark</span>,
            <span>Roose Bolton</span>,
            <span>Locke</span>,
            <span>Polliver</span>,
        ],
        "answer": "Locke"
    },
    {
        "question": <span>Where did Tyrion and Shae Meet?</span>, 
        "choices": [
            <span>The Eyrie</span>,
            <span>Lannister Camp</span>,
            <span>Kings Landing</span>,
            <span>Brothel in the North</span>,
        ],
        "answer": "Lannister Camp"
    },
    {
        "question": <span>How many Kingdoms are in Westeros?</span>, 
        "choices": [
            <span>Two</span>,
            <span>Six</span>,
            <span>Seven</span>,
            <span>Nine</span>,
        ],
        "answer": "Seven"
    },
    {
        "question": <span>Fill in the blank: The night is dark and full of ________.</span>, 
        "choices": [
            <span>Tremmors</span>,
            <span>Blood</span>,
            <span>Terrors</span>,
            <span>Evil</span>,
        ],
        "answer": "Terrors"
    },
    {
        "question": <span>What is the name of Joffrey Baratheon's Valyrian steel blade?</span>, 
        "choices": [
            <span>Lion's Fang</span>,
            <span>Dark Sister</span>,
            <span>Hearteater</span>,
            <span>Widow's Wail</span>,
        ],
        "answer": "Widow's Wail"
    },
    {
        "question": <span>Where is the Iron Bank?</span>, 
        "choices": [
            <span>Braavos</span>,
            <span>Highgarden</span>,
            <span>Pyke</span>,
            <span>Dorne</span>,
        ],
        "answer": "Braavos"
    },
    {
        "question": <span>What famous song played during the Red Wedding?</span>, 
        "choices": [
            <span>"The Rains of Castamere "</span>,
            <span>"The Pains of Shastamere"</span>,
            <span>"The bear and the Maiden fair"</span>,
            <span>"Under the sea"</span>,
        ],
        "answer": "The Rains of Castamere "
    },
    {
        "question": <span>Which of the following is now a deadly poison?</span>, 
        "choices": [
            <span>Tears of lys</span>,
            <span>Wolfsbane</span>,
            <span>Essence of nightshade</span>,
            <span>Milk of the poppy</span>,
        ],
        "answer": "Milk of the poppy"
    },
    {
        "question": <span>What does one horn blast mean for the Night's Watch?</span>, 
        "choices": [
            <span>Intruders</span>,
            <span>Rangers Returning</span>,
            <span>Rangers in trouble</span>,
            <span>Spotted Wildlings</span>,
        ],
        "answer": "Rangers Returning"
    },
    {
        "question": <span>What does Daenerys Targaryen catapult across Mereen's walls?</span>, 
        "choices": [
            <span>Slave collars</span>,
            <span>Hands</span>,
            <span>Heads</span>,
            <span>Broken Chains</span>,
        ],
        "answer": "Broken Chains"
    },
    {
        "question": <span>What is the name of Tommen Baratheon's cat?</span>, 
        "choices": [
            <span>Ser Pounce</span>,
            <span>Ser Meow</span>,
            <span>Ser Whiskers</span>,
            <span>Ser Paddington</span>,
        ],
        "answer": "Ser Pounce"
    },
    {
        "question": <span>Who is known as the Young Wolf?</span>, 
        "choices": [
            <span>Jon Snow</span>,
            <span>Robb Stark</span>,
            <span>Bran Stark</span>,
            <span>Ned Stark</span>,
        ],
        "answer": "Robb Stark"
    },
    {
        "question": <span>Who was going to be the Stalion who mounted the world?</span>, 
        "choices": [
            <span>Lyanna Stark's son</span>,
            <span>Daenerys Targaryen's son</span>,
            <span>Mance Rayder's son</span>,
            <span>Robb Stark's son</span>,
        ],
        "answer": "Daenerys Targaryen's son"
    },
    {
        "question": <span>Where does the red Wedding take place?</span>, 
        "choices": [
            <span>Riverrun</span>,
            <span>The Red Keep</span>,
            <span>The Twins</span>,
            <span>The Eyrie</span>,
        ],
        "answer": "The Twins"
    },
    {
        "question": <span>Which House is supposedly "first in battle"?</span>, 
        "choices": [
            <span>House Stark</span>,
            <span>House Baratheon</span>,
            <span>House Targaryen</span>,
            <span>House Tarly</span>,
        ],
        "answer": "House Tarly"
    },
    {
        "question": <span>Who Killed Jon Arryn?</span>, 
        "choices": [
            <span>Cersei Lannister</span>,
            <span>Petyr Baelish</span>,
            <span>Lysa Arryn</span>,
            <span>Jamie Lannister</span>,
        ],
        "answer": "Lysa Arryn"
    },
    {
        "question": <span>Who is the master of whisperers?</span>, 
        "choices": [
            <span>Tyrion Lannister</span>,
            <span>Cersei Lannister</span>,
            <span>Petyr Berlish</span>,
            <span>Varys</span>,
        ],
        "answer": "Varys"
    },
    {
        "question": <span>The Stark way is the _______ way.</span>, 
        "choices": [
            <span>Cold</span>,
            <span>Gold</span>,
            <span>Honorable</span>,
            <span>Old</span>,
        ],
        "answer": "Old"
    },
    {
        "question": <span>Which house is Petyr Baelish referring to when he says, "Quick tempers, slow minds"?</span>, 
        "choices": [
            <span>House Stark</span>,
            <span>House Lannister</span>,
            <span>House Baratheon</span>,
            <span>House Martell</span>,
        ],
        "answer": "House Stark"
    },
    {
        "question": <span>Who has Petyr Baelish loved since he was a child?</span>, 
        "choices": [
            <span>Sansa Stark</span>,
            <span>Lysa Arryn</span>,
            <span>Catelyn Stark</span>,
            <span>Cersei Lannister</span>,
        ],
        "answer": "Catelyn Stark"
    },
    {
        "question": <span>Which is NOT a face of "the Seven"?</span>, 
        "choices": [
            <span>The Maiden</span>,
            <span>The Widow</span>,
            <span>The Mother</span>,
            <span>The Stranger</span>,
        ],
        "answer": "The Widow"
    },
    {
        "question": <span>Historically, Baratheon babies are born with what hair color?</span>, 
        "choices": [
            <span>Red</span>,
            <span>Brown</span>,
            <span>Yellow</span>,
            <span>Black</span>,
        ],
        "answer": "Black"
    },
    {
        "question": <span>Whose execution does Bran Stark witness?</span>, 
        "choices": [
            <span>Gared</span>,
            <span>Will</span>,
            <span>Glenn</span>,
            <span>Waymar</span>,
        ],
        "answer": "Will"
    },
    {
        "question": <span>"Chaos isnt a pit, its a ladder" is a quote from? </span>, 
        "choices": [
            <span>Varys</span>,
            <span>Cersei Lannister</span>,
            <span>Petyr Baelish</span>,
            <span>Tyrion lannister</span>,
        ],
        "answer": "Petyr Baelish"
    },
    {
        "question": <span>Who gives Daenerys Targaryen her dragon eggs? </span>, 
        "choices": [
            <span>Jorah Mormont</span>,
            <span>Illyrio Mopatis</span>,
            <span>Viserys Targaryen</span>,
            <span>Khal Drogo</span>,
        ],
        "answer": "Illyrio Mopatis"
    },
    {
        "question": <span>Which season were all the Stark children born during?</span>, 
        "choices": [
            <span>Winter</span>,
            <span>Spring</span>,
            <span>Summer</span>,
            <span>Fall</span>,
        ],
        "answer": "Summer"
    },
    {
        "question": <span>What is the name of Arya Stark's sword?</span>, 
        "choices": [
            <span>Icicle</span>,
            <span>Nymeria</span>,
            <span>Needle</span>,
            <span>Pick</span>,
        ],
        "answer": "Needle"
    },
    {
        "question": <span>Who's Shireen Baratheon's Father?</span>, 
        "choices": [
            <span>Robert Baratheon</span>,
            <span>Joffrey Baratheon</span>,
            <span>Renly Baratheon</span>,
            <span>Stannis Baratheon</span>,
        ],
        "answer": "Stannis Baratheon"
    },
    {
        "question": <span>Why does Ygritte say Mance Rayder will want to talk to Jon Snow?</span>, 
        "choices": [
            <span>Because Jon killed Qhorin Halfhand</span>,
            <span>Because Jon's a crow</span>,
            <span>Because of Jon Starks Blood</span>,
            <span>Because Jon is a deserter</span>
        ],
        "answer": "Because of Jon Starks Blood"
    },
    {
        "question": <span>What is the name of Arya Starks Sword?</span>, 
        "choices": [
            <span>Nymeria</span>,
            <span>Needle</span>,
            <span>Lion's Bane</span>,
            <span>Prick</span>
        ],
        "answer": "Needle"
    },
    {
        "question": <span>After Renly Baratheon dies, who do most of this bannermen submit to?</span>, 
        "choices": [
            <span>Robert Baratheon</span>,
            <span>Joffrey Baratheon</span>,
            <span>Robb Stark</span>,
            <span>Stannis Baratheon</span>
        ],
        "answer": "Stannis Baratheon"
    },
    {
        "question": <span>What do the Wildlings call those living south of the wall?</span>, 
        "choices": [
            <span>Sheep</span>,
            <span>Kneelers</span>,
            <span>Followers</span>,
            <span>Cowards</span>
        ],
        "answer": "Kneelers"
    },
    {
        "question": <span>What can defenitley kill a White Walker?</span>, 
        "choices": [
            <span>Iron</span>,
            <span>Sunlight</span>,
            <span>Dragon Fire</span>,
            <span>Dragon Glass</span>
        ],
        "answer": "Dragon Glass"
    },
    {
        "question": <span>Who has Margaery Tyrell NOT been bethrothed to?</span>, 
        "choices": [
            <span>Tommen Baratheon</span>,
            <span>Renly Baratheon</span>,
            <span>Stannis Baratheon</span>,
            <span>Joffrey Baratheon</span>
        ],
        "answer": "Stannis Baratheon"
    },
    {
        "question": <span>What does Ned Stark tell Bran when he beheads a deserter in the pilot episode?</span>, 
        "choices": [
            <span>"Our way is the old way"</span>,
            <span>"All men must die"</span>,
            <span>"Fear cuts deeper than a sword"</span>,
            <span>"Winter is coming"</span>,
        ],
        "answer": "Our way is the old way"
    },
    {
        "question": <span>Who is the first character to say the phrase "Game of Thrones"?</span>, 
        "choices": [
            <span>Tywin Lannister</span>,
            <span>Cersei Lannister</span>,
            <span>Tyrion Lannister</span>,
            <span>Petyr Baelish</span>,
        ],
        "answer": "Cersei Lannister"
    },
    {
        "question": <span>Who is Daenerys Targaryen to Jon Snow?</span>, 
        "choices": [
            <span>His Aunt</span>,
            <span>His Woman</span>,
            <span>All of the above</span>,
        ],
        "answer": "All of the above"
    },
    {
        "question": <span>"The Mountain is the nickname for which character?</span>, 
        "choices": [
            <span>Gerald Clegane</span>,
            <span>Oberyn Martell</span>,
            <span>Sandor Clegane</span>,
            <span>Gregor Clegane</span>,
        ],
        "answer": "Gregor Clegane"
    },
    {
        "question": <span>Who is lord Commander of the Kingsguard at the beginning of Game of Thrones?</span>, 
        "choices": [
            <span>Ser Jamie Lannister</span>,
            <span>Ser Barristan Selmy</span>,
            <span>Ser Jeor Mormont</span>,
            <span>Ser Loras Tyrell</span>,
        ],
        "answer": "Ser Barristan Selmy"
    },
    {
        "question": <span>Who was Margaery Tyrell's first husband?</span>, 
        "choices": [
            <span>Renly Baratheon</span>,
            <span>Joffrey Baratheon</span>,
            <span>Stannis Baratheon</span>,
            <span>Tommen Baratheon</span>,
        ],
        "answer": "Renly Baratheon"
    },
    {
        "question": <span>Who is known as "The King Beyond the Wall" </span>, 
        "choices": [
            <span>Tormund Giantsbane</span>,
            <span>Mance Rayder</span>,
            <span>The Night King</span>,
            <span>Stannis Baratheon</span>,
        ],
        "answer": ""
    },
    {
        "question": <span>How many times has Sansa Stark been married?</span>, 
        "choices": [
            <span>Twice</span>,
            <span>Once</span>,
            <span>Three times</span>,
            <span>Four times</span>,
        ],
        "answer": "Twice"
    },
    {
        "question": <span>Who was the Mad Kings firstborn son?</span>, 
        "choices": [
            <span>Aemon Targaryen</span>,
            <span>Aegon Targaryen</span>,
            <span>Rhaegar Targaryen</span>,
            <span>Viserys Targaryen</span>,
        ],
        "answer": "Rhaegar Targaryen"
    },
    {
        "question": <span>Who delivered the fatal blow to the King in the North Robb Stark?</span>, 
        "choices": [
            <span>Alliser Thorne</span>,
            <span>Roose Bolton</span>,
            <span>Ramsay Bolton</span>,
            <span>Walder Frey</span>,
        ],
        "answer": "Roose Bolton"
    },
    {
        "question": <span>Which city does Samwell Tarly travel to in order to train as a maester?</span>, 
        "choices": [
            <span>Sunspear</span>,
            <span>Highgarden</span>,
            <span>Gulltown</span>,
            <span>Oldtown</span>,
        ],
        "answer": "Oldtown"
    },
    {
        "question": <span>In which city does Arya Stark train to become a Faceless man?</span>, 
        "choices": [
            <span>Meereen</span>,
            <span>Pentos</span>,
            <span>Astapor</span>,
            <span>Braavos</span>,
        ],
        "answer": "Braavos"
    },
]
module.exports = quizData 