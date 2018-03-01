const quizData = [
    
    {
        "question": <span>What is the name of Ned Stark's sword?</span>, 
        "answers": [
            <span>Winter</span>,
            <span>Ice</span>,
            <span>Wolf's Tooth</span>,
            <span>Longclaw</span>,
        ],
        "correct": "Ice"
    },
    {
        "question": <span>Who has never been part of the Night's Watch?</span>, 
        "answers": [
            <span>Locke</span>,
            <span>Mance Rayder</span>,
            <span>Aemon Targaryen</span>,
            <span>Orell</span>,
        ],
        "correct": "Orell"
    },
    {
        "question": <span>What is Sansa Stark's favorite treat?</span>, 
        "answers": [
            <span>Tyroshi pears</span>,
            <span>Lamprey pie</span>,
            <span>Lemon cakes</span>,
            <span>Berry Tarts</span>,
        ],
        "correct": "Lemon cakes"
    },
    {
        "question": <span>Who says, "If we die, we die. But first, we'll live"?</span>, 
        "answers": [
            <span>Shae</span>,
            <span>Tyrion Lannister</span>,
            <span>Ygritte</span>,
            <span>Bronn</span>,
        ],
        "correct": "Ygritte"
    },
    {
        "question": <span>What signaled Khal Drogo's undefeated glory to the Dothraki?</span>, 
        "answers": [
            <span>The size of his Khalasar</span>,
            <span>The length of his hair</span>,
            <span>The Paint on his chest</span>,
            <span>The number of his horses</span>,
        ],
        "correct": "The length of his hair"
    },
    {
        "question": <span>Who is Bran Stark named after?</span>, 
        "answers": [
            <span>His Uncle</span>,
            <span>His Grandfather</span>,
            <span>His Cousin</span>,
            <span>His Father</span>,
        ],
        "correct": "His Uncle"
    },
    {
        "question": <span>What title does Jorah Mormont's father hold?</span>, 
        "answers": [
            <span>Hand of the King</span>,
            <span>Lord Commander of the Kingsguard</span>,
            <span>Lord Paramount of the Reach</span>,
            <span>Lord Commander of the Night's Watch</span>,
        ],
        "correct": "Lord Commander of the Night's Watch"
    },
    {
        "question": <span>What is the only thing Tywin Lannister believes lives on?</span>, 
        "answers": [
            <span>The Family Name</span>,
            <span>The Family Honor</span>,
            <span>The Family Gold</span>,
            <span>The Family Glory</span>,
        ],
        "correct": "The Family Name"
    },
    {
        "question": <span>Who says, "Nobody cares what your father once told you"?</span>, 
        "answers": [
            <span>Cersei Lannister</span>,
            <span>Joffrey Baratheon</span>,
            <span>Robert Baratheon</span>,
            <span>Tyrion Lannister</span>,
        ],
        "correct": "Cersei Lannister"
    },
    {
        "question": <span>Who Says, "Chaos isn't a pit. It's a ladder"?</span>, 
        "answers": [
            <span>Varys</span>,
            <span>Cersei Lannister</span>,
            <span>Petyr Baelish</span>,
            <span>Tyrion Lannister</span>,
        ],
        "correct": "Petyr Baelish"
    },
    {
        "question": <span>Fill in the blank: "What is _______ may never die."</span>, 
        "answers": [
            <span>Dead</span>,
            <span>Iron born</span>,
            <span>Reborn</span>,
            <span>Drowned </span>,
        ],
        "correct": "Dead"
    },
    {
        "question": <span>Which of the following is a Pirate?</span>, 
        "answers": [
            <span>Gendry</span>,
            <span>Tycho Nestoris</span>,
            <span>Salladhor Saan</span>,
            <span>Mathos Seaworth</span>,
        ],
        "correct": "Salladhor Saan"
    },
    {
        "question": <span>Who saves Sansa Stark during the Riot of Kings Landing?</span>, 
        "answers": [
            <span>The Hound</span>,
            <span>Tyrion lammister</span>,
            <span>Joffrey Baratheon</span>,
            <span>Perer baelish</span>,
        ],
        "correct": ""
    },
    {
        "question": <span>Which of Danerys Targaryen's three Dragons are the largest?</span>, 
        "answers": [
            <span>Rhaegal</span>,
            <span>Drogon</span>,
            <span>Viserion</span>,
            <span>Balerion</span>,
        ],
        "correct": "Drogon"
    },
    {
        "question": <span>What caused the green fire at Blackwater bay?</span>, 
        "answers": [
            <span>Wildfire</span>,
            <span>Napalm</span>,
            <span>Greek fire</span>,
            <span>Essence of Nightshade</span>,
        ],
        "correct": "Wildfire"
    },
    {
        "question": <span>Who teaches Arya Stark to "Stick'em with the pointy end"?</span>, 
        "answers": [
            <span>Syrio Forel</span>,
            <span>Robb Stark</span>,
            <span>Ned Stark</span>,
            <span>Jon Snow</span>,
        ],
        "correct": "Jon Snow"
    },
    {
        "question": <span>Who HASN'T been the hand of the King?</span>, 
        "answers": [
            <span>Tyrion Lannister</span>,
            <span>Jon Arryn</span>,
            <span>Ned Stark</span>,
            <span>Petyr Baelish</span>,
        ],
        "correct": "Petyr Baelish"
    },
    {
        "question": <span>What is a Bastards lastname in Dorne?</span>, 
        "answers": [
            <span>Sand</span>,
            <span>Storm</span>,
            <span>Stone</span>,
            <span>Dune</span>,
        ],
        "correct": "Sand"
    },
    {
        "question": <span>Who did Robb Stark promise to Marry in exchange for troops?</span>, 
        "answers": [
            <span>A Bolton Girl</span>,
            <span>A Frey Girl</span>,
            <span>A Baratheon Girl</span>,
            <span>A Lannister Girl</span>,
        ],
        "correct": "A Frey Girl"
    },
    {
        "question": <span>What Animal is on House Baratheon's Sigil?</span>, 
        "answers": [
            <span>Boar</span>,
            <span>Bear</span>,
            <span>Stag</span>,
            <span>Wolf</span>,
        ],
        "correct": "Stag"
    },
    {
        "question": <span>Who is the Mad King to Daenerys Targaryen?</span>, 
        "answers": [
            <span>Her Father</span>,
            <span>Her Brother</span>,
            <span>Her Uncle</span>,
            <span>Her Grandfather</span>,
        ],
        "correct": "Her Father"
    },
    {
        "question": <span>What is NOT part of the Night's Watch vows?</span>, 
        "answers": [
            <span>Win no glory</span>,
            <span>Take no wife</span>,
            <span>Kill no Innocent</span>,
            <span>Father no children</span>,
        ],
        "correct": "Kill no Innocent"
    },
    {
        "question": <span>What are House Greyjoy's words?</span>, 
        "answers": [
            <span>We Remember</span>,
            <span>We Guard the way</span>,
            <span>We Pay the iron price</span>,
            <span>We do not sow</span>,
        ],
        "correct": "We do not sow"
    },
    {
        "question": <span>Tyrion Lannister has a tender spot for bastards, cripples, and ________?</span>, 
        "answers": [
            <span>Children</span>,
            <span>Imps</span>,
            <span>Drunks</span>,
            <span>Broken Things</span>,
        ],
        "correct": "Broken Things"
    },
    {
        "question": <span>What are House Lannisters words?</span>, 
        "answers": [
            <span>A Lannister always pays his debts</span>,
            <span>Ours be the Glory</span>,
            <span>Hear me Roar!</span>,
            <span>Righteous in Wrath</span>,
        ],
        "correct": "Hear me Roar!"
    },
    {
        "question": <span>Who says, "Of all the ways I'd kill you, poison would be the last"?</span>, 
        "answers": [
            <span>The Hound</span>,
            <span>Cersei Lannister</span>,
            <span>Mance Rayder</span>,
            <span>Arya Stark</span>,
        ],
        "correct": "Mance Rayder"
    },
    {
        "question": <span>Which Father Legitimizes his bastard son?</span>, 
        "answers": [
            <span>Oberyn Martell</span>,
            <span>Ned Stark</span>,
            <span>Robert Baratheon</span>,
            <span>Roose Bolton</span>,
        ],
        "correct": "Roose Bolton"
    },
    {
        "question": <span>Where is Melisandre from?</span>, 
        "answers": [
            <span>Asshai</span>,
            <span>The Eyrie</span>,
            <span>Dorne</span>,
            <span>Highgarden</span>,
        ],
        "correct": "Asshai"
    },
    {
        "question": <span>What is the name of Rickon's direworlf?</span>, 
        "answers": [
            <span>Shaggydog</span>,
            <span>Wolf</span>,
            <span>Summer</span>,
            <span>Greywind</span>,
        ],
        "correct": "Shaggydog"
    },
    {
        "question": <span>How does Robin Arryn want badmen to die?</span>, 
        "answers": [
            <span>By Fire</span>,
            <span>By Decapitation</span>,
            <span>By Poison</span>,
            <span>By Moon door</span>,
        ],
        "correct": "By Moon door"
    },
    {
        "question": <span>Where was the last Targaryen in Westeros before Daenerys?</span>, 
        "answers": [
            <span>Casterly Rock</span>,
            <span>King's Landing</span>,
            <span>Castle Black</span>,
            <span>Dorne</span>,
        ],
        "correct": "Castle Black"
    },
    {
        "question": <span>Who is sometimes reffered to as Ser Piggy or Prince Pork-Chop?</span>, 
        "answers": [
            <span>Jamie Lannister</span>,
            <span>Theon Greyjoy</span>,
            <span>Jon Snow</span>,
            <span>Samwell Tarly</span>,
        ],
        "correct": "Samwell Tarly"
    },
    {
        "question": <span>Who gives Robert Baratheon poisoned wine?</span>, 
        "answers": [
            <span>Lancel Lannister</span>,
            <span>Cersei Lannister</span>,
            <span>Jamie Lannister</span>,
            <span>Petyr Baelish</span>,
        ],
        "correct": "Lancel Lannister"
    },
    {
        "question": <span>Who does Oberyn Martell seek revenge for?</span>, 
        "answers": [
            <span>His Wife</span>,
            <span>His Daughter</span>,
            <span>His Sister</span>,
            <span>His Mother</span>,
        ],
        "correct": "His Sister"
    },
    {
        "question": <span>Who Says, "You are no son of mone"?</span>, 
        "answers": [
            <span>Robert Baratheon</span>,
            <span>Balon Greyjoy</span>,
            <span>Catelyn Stark</span>,
            <span>Tywin Lannister</span>,
        ],
        "correct": "Tywin Lannister"
    },
    {
        "question": <span>What does "dracarys" mean?</span>, 
        "answers": [
            <span>Burn</span>,
            <span>Fly</span>,
            <span>Kill</span>,
            <span>Dragonfire</span>,
        ],
        "correct": "Dragonfire"
    },
    {
        "question": <span>Which of the following is NOT one of the Night's Watch Orders?</span>, 
        "answers": [
            <span>Guards</span>,
            <span>Builders</span>,
            <span>Stewards</span>,
            <span>Rangers</span>,
        ],
        "correct": "Guards"
    },
    {
        "question": <span>Who cuts off Jamie Lannister's hand?</span>, 
        "answers": [
            <span>Rickard Karstark</span>,
            <span>Roose Bolton</span>,
            <span>Locke</span>,
            <span>Polliver</span>,
        ],
        "correct": "Locke"
    },
    {
        "question": <span>Where did Tyrion and Shae Meet?</span>, 
        "answers": [
            <span>The Eyrie</span>,
            <span>Lannister Camp</span>,
            <span>Kings Landing</span>,
            <span>Brothel in the North</span>,
        ],
        "correct": "Lannister Camp"
    },
    {
        "question": <span>How many Kingdoms are in Westeros?</span>, 
        "answers": [
            <span>Two</span>,
            <span>Six</span>,
            <span>Seven</span>,
            <span>Nine</span>,
        ],
        "correct": "Seven"
    },
    {
        "question": <span>Fill in the blank: The night is dark and full of ________.</span>, 
        "answers": [
            <span>Tremmors</span>,
            <span>Blood</span>,
            <span>Terrors</span>,
            <span>Evil</span>,
        ],
        "correct": "Terrors"
    },
    {
        "question": <span>What is the name of Joffrey Baratheon's Valyrian steel blade?</span>, 
        "answers": [
            <span>Lion's Fang</span>,
            <span>Dark Sister</span>,
            <span>Hearteater</span>,
            <span>Widow's Wail</span>,
        ],
        "correct": "Widow's Wail"
    },
    {
        "question": <span>Where is the Iron Bank?</span>, 
        "answers": [
            <span>Braavos</span>,
            <span>Highgarden</span>,
            <span>Pyke</span>,
            <span>Dorne</span>,
        ],
        "correct": "Braavos"
    },
    {
        "question": <span>What famous song played during the Red Wedding?</span>, 
        "answers": [
            <span>"The Rains of Castamere "</span>,
            <span>"The Pains of Shastamere"</span>,
            <span>"The bear and the Maiden fair"</span>,
            <span>"Under the sea"</span>,
        ],
        "correct": "The Rains of Castamere "
    },
    {
        "question": <span>Which of the following is now a deadly poison?</span>, 
        "answers": [
            <span>Tears of lys</span>,
            <span>Wolfsbane</span>,
            <span>Essence of nightshade</span>,
            <span>Milk of the poppy</span>,
        ],
        "correct": "Milk of the poppy"
    },
    {
        "question": <span>What does one horn blast mean for the Night's Watch?</span>, 
        "answers": [
            <span>Intruders</span>,
            <span>Rangers Returning</span>,
            <span>Rangers in trouble</span>,
            <span>Spotted Wildlings</span>,
        ],
        "correct": "Rangers Returning"
    },
    {
        "question": <span>What does Daenerys Targaryen catapult across Mereen's walls?</span>, 
        "answers": [
            <span>Slave collars</span>,
            <span>Hands</span>,
            <span>Heads</span>,
            <span>Broken Chains</span>,
        ],
        "correct": "Broken Chains"
    },
    {
        "question": <span>What is the name of Tommen Baratheon's cat?</span>, 
        "answers": [
            <span>Ser Pounce</span>,
            <span>Ser Meow</span>,
            <span>Ser Whiskers</span>,
            <span>Ser Paddington</span>,
        ],
        "correct": "Ser Pounce"
    },
    {
        "question": <span>Who is known as the Young Wolf?</span>, 
        "answers": [
            <span>Jon Snow</span>,
            <span>Robb Stark</span>,
            <span>Bran Stark</span>,
            <span>Ned Stark</span>,
        ],
        "correct": "Robb Stark"
    },
    {
        "question": <span>Who was going to be the Stalion who mounted the world?</span>, 
        "answers": [
            <span>Lyanna Stark's son</span>,
            <span>Daenerys Targaryen's son</span>,
            <span>Mance Rayder's son</span>,
            <span>Robb Stark's son</span>,
        ],
        "correct": "Daenerys Targaryen's son"
    },
    {
        "question": <span>Where does the red Wedding take place?</span>, 
        "answers": [
            <span>Riverrun</span>,
            <span>The Red Keep</span>,
            <span>The Twins</span>,
            <span>The Eyrie</span>,
        ],
        "correct": "The Twins"
    },
    {
        "question": <span>Which House is supposedly "first in battle"?</span>, 
        "answers": [
            <span>House Stark</span>,
            <span>House Baratheon</span>,
            <span>House Targaryen</span>,
            <span>House Tarly</span>,
        ],
        "correct": "House Tarly"
    },
    {
        "question": <span>Who Killed Jon Arryn?</span>, 
        "answers": [
            <span>Cersei Lannister</span>,
            <span>Petyr Baelish</span>,
            <span>Lysa Arryn</span>,
            <span>Jamie Lannister</span>,
        ],
        "correct": "Lysa Arryn"
    },
    {
        "question": <span>Who is the master of whisperers?</span>, 
        "answers": [
            <span>Tyrion Lannister</span>,
            <span>Cersei Lannister</span>,
            <span>Petyr Berlish</span>,
            <span>Varys</span>,
        ],
        "correct": "Varys"
    },
    {
        "question": <span>The Stark way is the _______ way.</span>, 
        "answers": [
            <span>Cold</span>,
            <span>Gold</span>,
            <span>Honorable</span>,
            <span>Old</span>,
        ],
        "correct": "Old"
    },
    {
        "question": <span>Which house is Petyr Baelish referring to when he says, "Quick tempers, slow minds"?</span>, 
        "answers": [
            <span>House Stark</span>,
            <span>House Lannister</span>,
            <span>House Baratheon</span>,
            <span>House Martell</span>,
        ],
        "correct": "House Stark"
    },
    {
        "question": <span>Who has Petyr Baelish loved since he was a child?</span>, 
        "answers": [
            <span>Sansa Stark</span>,
            <span>Lysa Arryn</span>,
            <span>Catelyn Stark</span>,
            <span>Cersei Lannister</span>,
        ],
        "correct": "Catelyn Stark"
    },
    {
        "question": <span>Which is NOT a face of "the Seven"?</span>, 
        "answers": [
            <span>The Maiden</span>,
            <span>The Widow</span>,
            <span>The Mother</span>,
            <span>The Stranger</span>,
        ],
        "correct": "The Widow"
    },
    {
        "question": <span>Historically, Baratheon babies are born with what hair color?</span>, 
        "answers": [
            <span>Red</span>,
            <span>Brown</span>,
            <span>Yellow</span>,
            <span>Black</span>,
        ],
        "correct": "Black"
    },
    {
        "question": <span>Whose execution does Bran Stark witness?</span>, 
        "answers": [
            <span>Gared</span>,
            <span>Will</span>,
            <span>Glenn</span>,
            <span>Waymar</span>,
        ],
        "correct": "Will"
    },
    {
        "question": <span>"Chaos isnt a pit, its a ladder" is a quote from? </span>, 
        "answers": [
            <span>Varys</span>,
            <span>Cersei Lannister</span>,
            <span>Petyr Baelish</span>,
            <span>Tyrion lannister</span>,
        ],
        "correct": "Petyr Baelish"
    },
    {
        "question": <span>Who gives Daenerys Targaryen her dragon eggs? </span>, 
        "answers": [
            <span>Jorah Mormont</span>,
            <span>Illyrio Mopatis</span>,
            <span>Viserys Targaryen</span>,
            <span>Khal Drogo</span>,
        ],
        "correct": "Illyrio Mopatis"
    },
    {
        "question": <span>Which season were all the Stark children born during?</span>, 
        "answers": [
            <span>Winter</span>,
            <span>Spring</span>,
            <span>Summer</span>,
            <span>Fall</span>,
        ],
        "correct": "Summer"
    },
    {
        "question": <span>What is the name of Arya Stark's sword?</span>, 
        "answers": [
            <span>Icicle</span>,
            <span>Nymeria</span>,
            <span>Needle</span>,
            <span>Pick</span>,
        ],
        "correct": "Needle"
    },
    {
        "question": <span>Who's Shireen Baratheon's Father?</span>, 
        "answers": [
            <span>Robert Baratheon</span>,
            <span>Joffrey Baratheon</span>,
            <span>Renly Baratheon</span>,
            <span>Stannis Baratheon</span>,
        ],
        "correct": "Stannis Baratheon"
    },
    {
        "question": <span>Why does Ygritte say Mance Rayder will want to talk to Jon Snow?</span>, 
        "answers": [
            <span>Because Jon killed Qhorin Halfhand</span>,
            <span>Because Jon's a crow</span>,
            <span>Because of Jon Starks Blood</span>,
            <span>Because Jon is a deserter</span>
        ],
        "correct": "Because of Jon Starks Blood"
    },
    {
        "question": <span>What is the name of Arya Starks Sword?</span>, 
        "answers": [
            <span>Nymeria</span>,
            <span>Needle</span>,
            <span>Lion's Bane</span>,
            <span>Prick</span>
        ],
        "correct": "Needle"
    },
    {
        "question": <span>After Renly Baratheon dies, who do most of this bannermen submit to?</span>, 
        "answers": [
            <span>Robert Baratheon</span>,
            <span>Joffrey Baratheon</span>,
            <span>Robb Stark</span>,
            <span>Stannis Baratheon</span>
        ],
        "correct": "Stannis Baratheon"
    },
    {
        "question": <span>What do the Wildlings call those living south of the wall?</span>, 
        "answers": [
            <span>Sheep</span>,
            <span>Kneelers</span>,
            <span>Followers</span>,
            <span>Cowards</span>
        ],
        "correct": "Kneelers"
    },
    {
        "question": <span>What can defenitley kill a White Walker?</span>, 
        "answers": [
            <span>Iron</span>,
            <span>Sunlight</span>,
            <span>Dragon Fire</span>,
            <span>Dragon Glass</span>
        ],
        "correct": "Dragon Glass"
    },
    {
        "question": <span>Who has Margaery Tyrell NOT been bethrothed to?</span>, 
        "answers": [
            <span>Tommen Baratheon</span>,
            <span>Renly Baratheon</span>,
            <span>Stannis Baratheon</span>,
            <span>Joffrey Baratheon</span>
        ],
        "correct": "Stannis Baratheon"
    },
    {
        "question": <span>What does Ned Stark tell Bran when he beheads a deserter in the pilot episode?</span>, 
        "answers": [
            <span>"Our way is the old way"</span>,
            <span>"All men must die"</span>,
            <span>"Fear cuts deeper than a sword"</span>,
            <span>"Winter is coming"</span>,
        ],
        "correct": "Our way is the old way"
    },
    {
        "question": <span>Who is the first character to say the phrase "Game of Thrones"?</span>, 
        "answers": [
            <span>Tywin Lannister</span>,
            <span>Cersei Lannister</span>,
            <span>Tyrion Lannister</span>,
            <span>Petyr Baelish</span>,
        ],
        "correct": "Cersei Lannister"
    },
    {
        "question": <span>Who is Daenerys Targaryen to Jon Snow?</span>, 
        "answers": [
            <span>His Aunt</span>,
            <span>His Woman</span>,
            <span>All of the above</span>,
        ],
        "correct": "All of the above"
    },
    {
        "question": <span>"The Mountain is the nickname for which character?</span>, 
        "answers": [
            <span>Gerald Clegane</span>,
            <span>Oberyn Martell</span>,
            <span>Sandor Clegane</span>,
            <span>Gregor Clegane</span>,
        ],
        "correct": "Gregor Clegane"
    },
    {
        "question": <span>Who is lord Commander of the Kingsguard at the beginning of Game of Thrones?</span>, 
        "answers": [
            <span>Ser Jamie Lannister</span>,
            <span>Ser Barristan Selmy</span>,
            <span>Ser Jeor Mormont</span>,
            <span>Ser Loras Tyrell</span>,
        ],
        "correct": "Ser Barristan Selmy"
    },
    {
        "question": <span>Who was Margaery Tyrell's first husband?</span>, 
        "answers": [
            <span>Renly Baratheon</span>,
            <span>Joffrey Baratheon</span>,
            <span>Stannis Baratheon</span>,
            <span>Tommen Baratheon</span>,
        ],
        "correct": "Renly Baratheon"
    },
    {
        "question": <span>Who is known as "The King Beyond the Wall" </span>, 
        "answers": [
            <span>Tormund Giantsbane</span>,
            <span>Mance Rayder</span>,
            <span>The Night King</span>,
            <span>Stannis Baratheon</span>,
        ],
        "correct": ""
    },
    {
        "question": <span>How many times has Sansa Stark been married?</span>, 
        "answers": [
            <span>Twice</span>,
            <span>Once</span>,
            <span>Three times</span>,
            <span>Four times</span>,
        ],
        "correct": "Twice"
    },
    {
        "question": <span>Who was the Mad Kings firstborn son?</span>, 
        "answers": [
            <span>Aemon Targaryen</span>,
            <span>Aegon Targaryen</span>,
            <span>Rhaegar Targaryen</span>,
            <span>Viserys Targaryen</span>,
        ],
        "correct": "Rhaegar Targaryen"
    },
    {
        "question": <span>Who delivered the fatal blow to the King in the North Robb Stark?</span>, 
        "answers": [
            <span>Alliser Thorne</span>,
            <span>Roose Bolton</span>,
            <span>Ramsay Bolton</span>,
            <span>Walder Frey</span>,
        ],
        "correct": "Roose Bolton"
    },
    {
        "question": <span>Which city does Samwell Tarly travel to in order to train as a maester?</span>, 
        "answers": [
            <span>Sunspear</span>,
            <span>Highgarden</span>,
            <span>Gulltown</span>,
            <span>Oldtown</span>,
        ],
        "correct": "Oldtown"
    },
    {
        "question": <span>In which city does Arya Stark train to become a Faceless man?</span>, 
        "answers": [
            <span>Meereen</span>,
            <span>Pentos</span>,
            <span>Astapor</span>,
            <span>Braavos</span>,
        ],
        "correct": "Braavos"
    },
]
module.exports = quizData 