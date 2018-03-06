const Question = require('./models/quiz');
require('dotenv').config();
require('./config/database');

Question.remove({})
.then(function() {
    return Question.create([
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
            "question": "Who has never been part of the Night's Watch?", 
            "choices": [
                "Locke",
                "Mance Rayder",
                "Aemon Targaryen",
                "Orell",
            ],
            "answer": "Orell"
        },
        {
            "question": "What is Sansa Stark's favorite treat?", 
            "choices": [
                "Tyroshi pears",
                "Lamprey pie",
                "Lemon cakes",
                "Berry Tarts",
            ],
            "answer": "Lemon cakes"
        },
        {
            "question": "Who says, 'If we die, we die. But first, we'll live'?", 
            "choices": [
                "Shae",
                "Tyrion Lannister",
                "Ygritte",
                "Bronn",
            ],
            "answer": "Ygritte"
        },
        {
            "question": "What signaled Khal Drogo's undefeated glory to the Dothraki?", 
            "choices": [
                "The size of his Khalasar",
                "The length of his hair",
                "The Paint on his chest",
                "The number of his horses",
            ],
            "answer": "The length of his hair"
        },
        {
            "question": "Who is Bran Stark named after?", 
            "choices": [
                "His Uncle",
                "His Grandfather",
                "His Cousin",
                "His Father",
            ],
            "answer": "His Uncle"
        },
        {
            "question": "What title does Jorah Mormont's father hold?", 
            "choices": [
                "Hand of the King",
                "Lord Commander of the Kingsguard",
                "Lord Paramount of the Reach",
                "Lord Commander of the Night's Watch",
            ],
            "answer": "Lord Commander of the Night's Watch"
        },
        {
            "question": "What is the only thing Tywin Lannister believes lives on?", 
            "choices": [
                "The Family Name",
                "The Family Honor",
                "The Family Gold",
                "The Family Glory",
            ],
            "answer": "The Family Name"
        },
        {
            "question": "Who says, 'Nobody cares what your father once told you'?", 
            "choices": [
                "Cersei Lannister",
                "Joffrey Baratheon",
                "Robert Baratheon",
                "Tyrion Lannister",
            ],
            "answer": "Cersei Lannister"
        },
        {
            "question": "Who Says, 'Chaos isn't a pit. It's a ladder'?", 
            "choices": [
                "Varys",
                "Cersei Lannister",
                "Petyr Baelish",
                "Tyrion Lannister",
            ],
            "answer": "Petyr Baelish"
        },
        {
            "question": "Fill in the blank: 'What is _______ may never die.'", 
            "choices": [
                "Dead",
                "Iron born",
                "Reborn",
                "Drowned ",
            ],
            "answer": "Dead"
        },
        {
            "question": "Which of the following is a Pirate?", 
            "choices": [
                "Gendry",
                "Tycho Nestoris",
                "Salladhor Saan",
                "Mathos Seaworth",
            ],
            "answer": "Salladhor Saan"
        },
        {
            "question": "Who saves Sansa Stark during the Riot of Kings Landing?", 
            "choices": [
                "The Hound",
                "Tyrion lammister",
                "Joffrey Baratheon",
                "Perer baelish",
            ],
            "answer": "The Hound"
        },
        {
            "question": "Which of Danerys Targaryen's three Dragons are the largest?", 
            "choices": [
                "Rhaegal",
                "Drogon",
                "Viserion",
                "Balerion",
            ],
            "answer": "Drogon"
        },
        {
            "question": "What caused the green fire at Blackwater bay?", 
            "choices": [
                "Wildfire",
                "Napalm",
                "Greek fire",
                "Essence of Nightshade",
            ],
            "answer": "Wildfire"
        },
        {
            "question": "Who teaches Arya Stark to 'Stick'em with the pointy end'?", 
            "choices": [
                "Syrio Forel",
                "Robb Stark",
                "Ned Stark",
                "Jon Snow",
            ],
            "answer": "Jon Snow"
        },
        {
            "question": "Who HASN'T been the hand of the King?", 
            "choices": [
                "Tyrion Lannister",
                "Jon Arryn",
                "Ned Stark",
                "Petyr Baelish",
            ],
            "answer": "Petyr Baelish"
        },
        {
            "question": "What is a Bastards lastname in Dorne?", 
            "choices": [
                "Sand",
                "Storm",
                "Stone",
                "Dune",
            ],
            "answer": "Sand"
        },
        {
            "question": "Who did Robb Stark promise to Marry in exchange for troops?", 
            "choices": [
                "A Bolton Girl",
                "A Frey Girl",
                "A Baratheon Girl",
                "A Lannister Girl",
            ],
            "answer": "A Frey Girl"
        },
        {
            "question": "What Animal is on House Baratheon's Sigil?", 
            "choices": [
                "Boar",
                "Bear",
                "Stag",
                "Wolf",
            ],
            "answer": "Stag"
        },
        {
            "question": "Who is the Mad King to Daenerys Targaryen?", 
            "choices": [
                "Her Father",
                "Her Brother",
                "Her Uncle",
                "Her Grandfather",
            ],
            "answer": "Her Father"
        },
        {
            "question": "What is NOT part of the Night's Watch vows?", 
            "choices": [
                "Win no glory",
                "Take no wife",
                "Kill no Innocent",
                "Father no children",
            ],
            "answer": "Kill no Innocent"
        },
        {
            "question": "What are House Greyjoy's words?", 
            "choices": [
                "We Remember",
                "We Guard the way",
                "We Pay the iron price",
                "We do not sow",
            ],
            "answer": "We do not sow"
        },
        {
            "question": "Tyrion Lannister has a tender spot for bastards, cripples, and ________?", 
            "choices": [
                "Children",
                "Imps",
                "Drunks",
                "Broken Things",
            ],
            "answer": "Broken Things"
        },
        {
            "question": "What are House Lannisters words?", 
            "choices": [
                "A Lannister always pays his debts",
                "Ours be the Glory",
                "Hear me Roar!",
                "Righteous in Wrath",
            ],
            "answer": "Hear me Roar!"
        },
        {
            "question": "Who says, 'Of all the ways I'd kill you, poison would be the last'?", 
            "choices": [
                "The Hound",
                "Cersei Lannister",
                "Mance Rayder",
                "Arya Stark",
            ],
            "answer": "Mance Rayder"
        },
        {
            "question": "Which Father Legitimizes his bastard son?", 
            "choices": [
                "Oberyn Martell",
                "Ned Stark",
                "Robert Baratheon",
                "Roose Bolton",
            ],
            "answer": "Roose Bolton"
        },
        {
            "question": "Where is Melisandre from?", 
            "choices": [
                "Asshai",
                "The Eyrie",
                "Dorne",
                "Highgarden",
            ],
            "answer": "Asshai"
        },
        {
            "question": "What is the name of Rickon's direworlf?", 
            "choices": [
                "Shaggydog",
                "Wolf",
                "Summer",
                "Greywind",
            ],
            "answer": "Shaggydog"
        },
        {
            "question": "How does Robin Arryn want badmen to die?", 
            "choices": [
                "By Fire",
                "By Decapitation",
                "By Poison",
                "By Moon door",
            ],
            "answer": "By Moon door"
        },
        {
            "question": "Where was the last Targaryen in Westeros before Daenerys?", 
            "choices": [
                "Casterly Rock",
                "King's Landing",
                "Castle Black",
                "Dorne",
            ],
            "answer": "Castle Black"
        },
        {
            "question": "Who is sometimes reffered to as Ser Piggy or Prince Pork-Chop?", 
            "choices": [
                "Jamie Lannister",
                "Theon Greyjoy",
                "Jon Snow",
                "Samwell Tarly",
            ],
            "answer": "Samwell Tarly"
        },
        {
            "question": "Who gives Robert Baratheon poisoned wine?", 
            "choices": [
                "Lancel Lannister",
                "Cersei Lannister",
                "Jamie Lannister",
                "Petyr Baelish",
            ],
            "answer": "Lancel Lannister"
        },
        {
            "question": "Who does Oberyn Martell seek revenge for?", 
            "choices": [
                "His Wife",
                "His Daughter",
                "His Sister",
                "His Mother",
            ],
            "answer": "His Sister"
        },
        {
            "question": "Who Says, 'You are no son of mine'?", 
            "choices": [
                "Robert Baratheon",
                "Balon Greyjoy",
                "Catelyn Stark",
                "Tywin Lannister",
            ],
            "answer": "Tywin Lannister"
        },
        {
            "question": "What does 'dracarys' mean?", 
            "choices": [
                "Burn",
                "Fly",
                "Kill",
                "Dragonfire",
            ],
            "answer": "Dragonfire"
        },
        {
            "question": "Which of the following is NOT one of the Night's Watch Orders?", 
            "choices": [
                "Guards",
                "Builders",
                "Stewards",
                "Rangers",
            ],
            "answer": "Guards"
        },
        {
            "question": "Who cuts off Jamie Lannister's hand?", 
            "choices": [
                "Rickard Karstark",
                "Roose Bolton",
                "Locke",
                "Polliver",
            ],
            "answer": "Locke"
        },
        {
            "question": "Where did Tyrion and Shae Meet?", 
            "choices": [
                "The Eyrie",
                "Lannister Camp",
                "Kings Landing",
                "Brothel in the North",
            ],
            "answer": "Lannister Camp"
        },
        {
            "question": "How many Kingdoms are in Westeros?", 
            "choices": [
                "Two",
                "Six",
                "Seven",
                "Nine",
            ],
            "answer": "Seven"
        },
        {
            "question": "Fill in the blank: The night is dark and full of ________.", 
            "choices": [
                "Tremmors",
                "Blood",
                "Terrors",
                "Evil",
            ],
            "answer": "Terrors"
        },
        {
            "question": "What is the name of Joffrey Baratheon's Valyrian steel blade?", 
            "choices": [
                "Lion's Fang",
                "Dark Sister",
                "Hearteater",
                "Widow's Wail",
            ],
            "answer": "Widow's Wail"
        },
        {
            "question": "Where is the Iron Bank?", 
            "choices": [
                "Braavos",
                "Highgarden",
                "Pyke",
                "Dorne",
            ],
            "answer": "Braavos"
        },
        {
            "question": "What famous song played during the Red Wedding?", 
            "choices": [
                "The Rains of Castamere ",
                "The Pains of Shastamere",
                "The bear and the Maiden fair",
                "Under the sea",
            ],
            "answer": "The Rains of Castamere "
        },
        {
            "question": "Which of the following is not a deadly poison?", 
            "choices": [
                "Tears of lys",
                "Wolfsbane",
                "Essence of nightshade",
                "Milk of the poppy",
            ],
            "answer": "Milk of the poppy"
        },
        {
            "question": "What does one horn blast mean for the Night's Watch?", 
            "choices": [
                "Intruders",
                "Rangers Returning",
                "Rangers in trouble",
                "Spotted Wildlings",
            ],
            "answer": "Rangers Returning"
        },
        {
            "question": "What does Daenerys Targaryen catapult across Mereen's walls?", 
            "choices": [
                "Slave collars",
                "Hands",
                "Heads",
                "Broken Chains",
            ],
            "answer": "Broken Chains"
        },
        {
            "question": "What is the name of Tommen Baratheon's cat?", 
            "choices": [
                "Ser Pounce",
                "Ser Meow",
                "Ser Whiskers",
                "Ser Paddington",
            ],
            "answer": "Ser Pounce"
        },
        {
            "question": "Who is known as the Young Wolf?", 
            "choices": [
                "Jon Snow",
                "Robb Stark",
                "Bran Stark",
                "Ned Stark",
            ],
            "answer": "Robb Stark"
        },
        {
            "question": "Who was going to be the Stalion who mounted the world?", 
            "choices": [
                "Lyanna Stark's son",
                "Daenerys Targaryen's son",
                "Mance Rayder's son",
                "Robb Stark's son",
            ],
            "answer": "Daenerys Targaryen's son"
        },
        {
            "question": "Where does the red Wedding take place?", 
            "choices": [
                "Riverrun",
                "The Red Keep",
                "The Twins",
                "The Eyrie",
            ],
            "answer": "The Twins"
        },
        {
            "question": "Which House is supposedly 'first in battle'?", 
            "choices": [
                "House Stark",
                "House Baratheon",
                "House Targaryen",
                "House Tarly",
            ],
            "answer": "House Tarly"
        },
        {
            "question": "Who Killed Jon Arryn?", 
            "choices": [
                "Cersei Lannister",
                "Petyr Baelish",
                "Lysa Arryn",
                "Jamie Lannister",
            ],
            "answer": "Lysa Arryn"
        },
        {
            "question": "Who is the master of whisperers?", 
            "choices": [
                "Tyrion Lannister",
                "Cersei Lannister",
                "Petyr Berlish",
                "Varys",
            ],
            "answer": "Varys"
        },
        {
            "question": "The Stark way is the _______ way.", 
            "choices": [
                "Cold",
                "Gold",
                "Honorable",
                "Old",
            ],
            "answer": "Old"
        },
        {
            "question": "Which house is Petyr Baelish referring to when he says, 'Quick tempers, slow minds'?", 
            "choices": [
                "House Stark",
                "House Lannister",
                "House Baratheon",
                "House Martell",
            ],
            "answer": "House Stark"
        },
        {
            "question": "Who has Petyr Baelish loved since he was a child?", 
            "choices": [
                "Sansa Stark",
                "Lysa Arryn",
                "Catelyn Stark",
                "Cersei Lannister",
            ],
            "answer": "Catelyn Stark"
        },
        {
            "question": "Which is NOT a face of 'the Seven'?", 
            "choices": [
                "The Maiden",
                "The Widow",
                "The Mother",
                "The Stranger",
            ],
            "answer": "The Widow"
        },
        {
            "question": "Historically, Baratheon babies are born with what hair color?", 
            "choices": [
                "Red",
                "Brown",
                "Yellow",
                "Black",
            ],
            "answer": "Black"
        },
        {
            "question": "Whose execution does Bran Stark witness?", 
            "choices": [
                "Gared",
                "Will",
                "Glenn",
                "Waymar",
            ],
            "answer": "Will"
        },
        {
            "question": "'Chaos isnt a pit, its a ladder' is a quote from? ", 
            "choices": [
                "Varys",
                "Cersei Lannister",
                "Petyr Baelish",
                "Tyrion lannister",
            ],
            "answer": "Petyr Baelish"
        },
        {
            "question": "Who gives Daenerys Targaryen her dragon eggs? ", 
            "choices": [
                "Jorah Mormont",
                "Illyrio Mopatis",
                "Viserys Targaryen",
                "Khal Drogo",
            ],
            "answer": "Illyrio Mopatis"
        },
        {
            "question": "Which season were all the Stark children born during?", 
            "choices": [
                "Winter",
                "Spring",
                "Summer",
                "Fall",
            ],
            "answer": "Summer"
        },
        {
            "question": "What is the name of Arya Stark's sword?", 
            "choices": [
                "Icicle",
                "Nymeria",
                "Needle",
                "Pick",
            ],
            "answer": "Needle"
        },
        {
            "question": "Who's Shireen Baratheon's Father?", 
            "choices": [
                "Robert Baratheon",
                "Joffrey Baratheon",
                "Renly Baratheon",
                "Stannis Baratheon",
            ],
            "answer": "Stannis Baratheon"
        },
        {
            "question": "Why does Ygritte say Mance Rayder will want to talk to Jon Snow?", 
            "choices": [
                "Because Jon killed Qhorin Halfhand",
                "Because Jon's a crow",
                "Because of Jon Starks Blood",
                "Because Jon is a deserter"
            ],
            "answer": "Because of Jon Starks Blood"
        },
        {
            "question": "What is the name of Arya Starks Sword?", 
            "choices": [
                "Nymeria",
                "Needle",
                "Lion's Bane",
                "Prick"
            ],
            "answer": "Needle"
        },
        {
            "question": "After Renly Baratheon dies, who do most of this bannermen submit to?", 
            "choices": [
                "Robert Baratheon",
                "Joffrey Baratheon",
                "Robb Stark",
                "Stannis Baratheon"
            ],
            "answer": "Stannis Baratheon"
        },
        {
            "question": "What do the Wildlings call those living south of the wall?", 
            "choices": [
                "Sheep",
                "Kneelers",
                "Followers",
                "Cowards"
            ],
            "answer": "Kneelers"
        },
        {
            "question": "What can defenitley kill a White Walker?", 
            "choices": [
                "Iron",
                "Sunlight",
                "Dragon Fire",
                "Dragon Glass"
            ],
            "answer": "Dragon Glass"
        },
        {
            "question": "Who has Margaery Tyrell NOT been bethrothed to?", 
            "choices": [
                "Tommen Baratheon",
                "Renly Baratheon",
                "Stannis Baratheon",
                "Joffrey Baratheon"
            ],
            "answer": "Stannis Baratheon"
        },
        {
            "question": "What does Ned Stark tell Bran when he beheads a deserter in the pilot episode?", 
            "choices": [
                "Our way is the old way",
                "All men must die",
                "Fear cuts deeper than a sword",
                "Winter is coming",
            ],
            "answer": "Our way is the old way"
        },
        {
            "question": "Who is the first character to say the phrase 'Game of Thrones'?", 
            "choices": [
                "Tywin Lannister",
                "Cersei Lannister",
                "Tyrion Lannister",
                "Petyr Baelish",
            ],
            "answer": "Cersei Lannister"
        },
        {
            "question": "Who is Daenerys Targaryen to Jon Snow?", 
            "choices": [
                "His Aunt",
                "His Woman",
                "All of the above",
            ],
            "answer": "All of the above"
        },
        {
            "question": "The Mountain is the nickname for which character?", 
            "choices": [
                "Gerald Clegane",
                "Oberyn Martell",
                "Sandor Clegane",
                "Gregor Clegane",
            ],
            "answer": "Gregor Clegane"
        },
        {
            "question": "Who is lord Commander of the Kingsguard at the beginning of Game of Thrones?", 
            "choices": [
                "Ser Jamie Lannister",
                "Ser Barristan Selmy",
                "Ser Jeor Mormont",
                "Ser Loras Tyrell",
            ],
            "answer": "Ser Barristan Selmy"
        },
        {
            "question": "Who was Margaery Tyrell's first husband?", 
            "choices": [
                "Renly Baratheon",
                "Joffrey Baratheon",
                "Stannis Baratheon",
                "Tommen Baratheon",
            ],
            "answer": "Renly Baratheon"
        },
        {
            "question": "Who is known as 'The King Beyond the Wall'", 
            "choices": [
                "Tormund Giantsbane",
                "Mance Rayder",
                "The Night King",
                "Stannis Baratheon",
            ],
            "answer": "Mance Rayder"
        },
        {
            "question": "How many times has Sansa Stark been married?", 
            "choices": [
                "Twice",
                "Once",
                "Three times",
                "Four times",
            ],
            "answer": "Twice"
        },
        {
            "question": "Who was the Mad Kings firstborn son?", 
            "choices": [
                "Aemon Targaryen",
                "Aegon Targaryen",
                "Rhaegar Targaryen",
                "Viserys Targaryen",
            ],
            "answer": "Rhaegar Targaryen"
        },
        {
            "question": "Who delivered the fatal blow to the King in the North Robb Stark?", 
            "choices": [
                "Alliser Thorne",
                "Roose Bolton",
                "Ramsay Bolton",
                "Walder Frey",
            ],
            "answer": "Roose Bolton"
        },
        {
            "question": "Which city does Samwell Tarly travel to in order to train as a maester?", 
            "choices": [
                "Sunspear",
                "Highgarden",
                "Gulltown",
                "Oldtown",
            ],
            "answer": "Oldtown"
        },
        {
            "question": "In which city does Arya Stark train to become a Faceless man?", 
            "choices": [
                "Meereen",
                "Pentos",
                "Astapor",
                "Braavos",
            ],
            "answer": "Braavos"
        },
    ])
})
.then(function(questions) {
    console.log(questions);
    process.exit();
})
