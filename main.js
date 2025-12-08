let database = [
    {
        ID: 0,
        placeName: `Amszterdam, Hollandia`,
        placeCoordinates: `52.3676° N | 4.9041° E <br> EUROPE <br> Northern Hemisphere <br> Earth `,
        placeABR: `ISL`,
        status: "available",
        discovered: true,
        questions: [
            { text: "teszt1", img: "" },
            {
                text: `<div class="row">
        <div id="gameStartCountDown"></div>
        <div id="gameStartAlert"></div>
    </div>`, img: ""
            },
            { text: "teszt3", img: "" }
        ],
        answers: [
            { ID: 1, answer: "válasz1" },
            { ID: 2, answer: "válasz2" },
            { ID: 3, answer: "válasz3" },
            { ID: 4, answer: "válasz4" },
            { ID: 5, answer: "válasz5" },
            { ID: 6, answer: "válasz6" },
            { ID: 7, answer: "válasz7" },
            { ID: 8, answer: "válasz8" },
            { ID: 9, answer: "válasz9" }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q1", "q4", "q7"],
        letter: "H",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 1,
        placeName: `Barcelona, Spanyolország`,
        placeCoordinates: "41.3874° N, 2.1686° E <br> EUROPE <br> Northern Hemisphere <br> Earth ",
        placeABR: `ESP`,
        status: "available",
        discovered: false,
        questions: [
            { text: "A Sagrada Familia (La Sagrada Familia) talán az egyik leghíresebb be nem fejezett épület. Régóta épül, de vajon milyen rég óta. <br><br> Melyik évben kezdték építeni a La Sagrada Familiat?", img: "" },
            { text: "Bár a felfedezések korában, nem indult egyik híres felfedező sem a városból, manapság viszont egy elég híres és népszerű kikötőváros lett. <br><br> De vajon mennyi helyre indul hajóút?", img: "" },
            { text: "A város, bár tengerparton fekszik, mégsem volt mindig tengerpartja. <br><br> Melyik esemény hatására lettek mesterséges tengerpartok Barcelonában?", img: "" }
        ],
        answers: [
            { ID: 1, answer: "1890-ben" },
            { ID: 2, answer: "1905-ben" },
            { ID: 3, answer: "1882-ben" },
            { ID: 4, answer: "15 helyre." },
            { ID: 5, answer: "20 helyre." },
            { ID: 6, answer: "25 helyre." },
            { ID: 7, answer: "A 170.-ik Festa Major de Gràcia fesztivál miatt, 1987-ben" },
            { ID: 8, answer: "A 100.-ik La Mercé fesztivál miatt, 2002-ben." },
            { ID: 9, answer: "Az 1992-es nyári olimpia miatt." }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q3", "q4", "q9"],
        letter: "H",
        currentLetter: "",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 2,
        placeName: `Nassau, Bahama-szigetek`,
        placeCoordinates: "25.0443° N | 77.3504° W <br> NORTH AMERICA <br> Northern Hemisphere <br> Earth ",
        placeABR: `BS`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "A Bahama-szigetek több szigetből áll. Gondolnánk egyből, hogy a főváros a legnagyobbon található.<br><br>Igaz-e ez az állítás?", img: "" },
            { text: "Dean's Blue Hole, a legmélyebb kék lyuk a földön, amely egy vízalatti bányába vezet. <br><br> Milyen mély lehet, ez a kék lyuk?", img: "" },
            { text: "teszt3", img: "" }
        ],
        answers: [
            { ID: 1, answer: "Igaz." },
            { ID: 2, answer: "Hamis." },
            { ID: 3, answer: "Nem lehet egyértelműen eldönteni." },
            { ID: 4, answer: "202 méter." },
            { ID: 5, answer: "158 méter." },
            { ID: 6, answer: "219 méter." },
            { ID: 7, answer: "válasz7" },
            { ID: 8, answer: "válasz8" },
            { ID: 9, answer: "válasz9" }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q2", "q4", "q7"],
        letter: "O",
        currentLetter: "",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 3,
        placeName: `Cancún, Mexikó`,
        placeCoordinates: "21.1619° N | 86.8515° W <br> NORTH AMERICA <br> Northern Hemisphere <br> Earth",
        placeABR: `MEX`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "Mexikónak rendhagyó szokásai vannak a karácsonyi ünnepi körben. <br><br> Melyik napon ajándékoznak a mexikóiak?", img: "" },
            { text: "Szilveszterkor mindenhol kell enni valamit, különböző szokások miatt. <br><br> Melyik ez az étel Mexikóban?", img: "" },
            { text: "Most, hogy tudjuk a szokásokat, nézzük meg mennyi helyre mehetünk közvetlenül az országból. <br><br> Azaz, mennyi országgal határos Mexikó.", img: "" }
        ],
        answers: [
            { ID: 1, answer: "December 6.-án" },
            { ID: 2, answer: "Az adott évtől függ. Mindig változik." },
            { ID: 3, answer: "Január 6.-án." },
            { ID: 4, answer: "Mangót." },
            { ID: 5, answer: "Szőlőt." },
            { ID: 6, answer: "Papayát." },
            { ID: 7, answer: "2." },
            { ID: 8, answer: "3." },
            { ID: 9, answer: "4." }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q3", "q4", "q8"],
        letter: "O",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 4,
        placeName: `Cape Town, Dél-afrikai Köztársaság`,
        placeCoordinates: "33.9221° S | 18.4231° E <br> AFRICA <br> Southern Hemisphere <br> Earth",
        placeABR: `ZA`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "Lesotho egy érdekes ország. Egy enklávé ország, amely azt jelenti, hogy minden oldalról ugyanaz az ország határolja, ez esetben Dél-Afrika. <br><br> Mennyi ilyen ország van még, amely teljesen bekebelez egy, vagy több másikat.", img: "" },
            { text: "A Jóreménység fokát (Cape of Good Hope), II. János portugál pápa nevezte el. <br><br> De mi lehetett az eredeti, Bartolomeu Diaz által adott név, ennek a helynek?", img: "" },
            { text: "Dél-Afrika egy különleges ország, hiszen ez az egyetlen ország, amelynek három fővárosa van.<br><br>Melyik ez a három?", img: "" }
        ],
        answers: [
            { ID: 1, answer: "3." },
            { ID: 2, answer: "1." },
            { ID: 3, answer: "2." },
            { ID: 4, answer: "Viharok foka, (Cape of Storms)." },
            { ID: 5, answer: "Dél foka, (Cape of South)." },
            { ID: 6, answer: "Halak foka, (Cape of fishes')." },
            { ID: 7, answer: "Pretoria, Cape Town, Bloemfontein." },
            { ID: 8, answer: "Gqeberha, Cape Town, Johannesburg." },
            { ID: 9, answer: "Durban, Johannesburg, Bloemfontein." }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q2", "q4", "q7"],
        letter: "L",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 5,
        placeName: `Antananarivo | Madagaszkár`,
        placeCoordinates: "18.9185° S, 47.5211° E <br> AFRICA <br> Southern Hemisphere <br> Earth",
        placeABR: `MDG`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "Ha Madagaszkár akkor pingvinek. Bár, még kicsit délebbre kéne menni. De ha már pingvinek, <br><br> Melyik nem, a 4 pingvin egyike, a Madakaszkár pingvinjei című sorozatban?", img: "" },
            { text: "Na de vissza a pingvinektől, mert még rengetek állat él a szigeten. A sziget élővilágának 90%-a sehol máshol nem található meg a világon. <br><br> De melyik lehet a két legmeghatározóbb állat a szigeten?", img: "" },
            { text: "Fűszernövényekben is menők Madagaszkáron. <br><br> Melyik fűszernövény legnagyobb exportálója a világon Madagaszkár.", img: "" }
        ],
        answers: [
            { ID: 1, answer: "Rico." },
            { ID: 2, answer: "Parancsnok." },
            { ID: 3, answer: "Közlegény." },
            { ID: 4, answer: "Lemur, Kaméleon." },
            { ID: 5, answer: "Tenrec, Boa." },
            { ID: 6, answer: "Papagáj, Teknős." },
            { ID: 7, answer: "Vanília." },
            { ID: 8, answer: "Fahéj." },
            { ID: 9, answer: "Szerecsendió." }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q2", "q4", "q7"],
        letter: "U",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 6,
        placeName: `Manila, Fülöp-szigetek`,
        placeCoordinates: "14.5995° N | 120.9842° E <br> ASIA <br> Northern Hemisphere <br> Earth",
        placeABR: `PH`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "Nem csak Mexikóban vannak eltérő karácsonyi szokások. A Fülöp-szigeteken még hosszabb a karácsonyi időszak, <br><br> De vajon mennyire?", img: "" },
            { text: "Nevéből adódóan, az ország több szigetből áll. De vajon mennyire hangsúlyos a szigetEK, toldalék, <br><br> Azaz, mennyi szigetből áll az ország?", img: "" },
            { text: "Az élővilága is hatalmas az országnak, de az orchideák kiemelkednek. <br><br> Mennyi fajta találhatő az országban?", img: "" }
        ],
        answers: [
            { ID: 1, answer: "Szeptembertől Januárig." },
            { ID: 2, answer: "Novembertől Februárig." },
            { ID: 3, answer: "Októbertől Januárig." },
            { ID: 4, answer: "542." },
            { ID: 5, answer: "7641." },
            { ID: 6, answer: "3519." },
            { ID: 7, answer: "Körübelül 500 darab" },
            { ID: 8, answer: "Körübelül 800 darab" },
            { ID: 9, answer: "Körübelül 1000 darab" }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q1", "q5", "q9"],
        letter: "L",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 7,
        placeName: `Sydney, Ausztrália`,
        placeCoordinates: "33.8727° S | 151.2057° E <br> AUSTRALIA and OCEANIA <br> Southern Hemisphere <br> Earth",
        placeABR: `AUS`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "Ausztrália, közigazgatási szempontból 8 egységre osztható. <br><br> Mennyiből derül ki az ország neve egyértelműen?", img: "" },
            { text: "Ausztráliában sok kenguru van... :) De lekörözik-e az embereket, azaz <br><br> Melyikből van több?", img: "" },
            { text: "A quokkák kizárólag csak Ausztráliában élnek. <br><br> De miről híresek?", img: "" }
        ],
        answers: [
            { ID: 1, answer: "Az összesből kiderül." },
            { ID: 2, answer: "4-ből derül ki." },
            { ID: 3, answer: "3-ból derül ki." },
            { ID: 4, answer: "Emberből." },
            { ID: 5, answer: "Nem lehet eldönteni." },
            { ID: 6, answer: "Kenguruból." },
            { ID: 7, answer: "Ők a legboldogabb állatok." },
            { ID: 8, answer: "Belőlük van a legkevesebb, védettek." },
            { ID: 9, answer: "Ők a legnagyobb rágcsálók az országban." }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q3", "q6", "q7"],
        letter: "U",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 8,
        placeName: `Wellington, Új-Zéland`,
        placeCoordinates: "41.2924° S | 174.7787° E <br> AUSTRALIA and OCEANIA <br> Southern Hemisphere <br> Earth",
        placeABR: `NZ`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "Valahol kenguru, valahol bárány. <br><br> Mennyi bárány jut egy emberre az országban?", img: "" },
            { text: "Itt játszódott A Hobbit, és A Gyűrűk Ura című film. <br><br> Lehet-e fizetni a filmben látott karakterekkel?", img: "" },
            { text: "Új-Zéland tele van furcsaságokkal. Van egy domb, amely bár csekély 200 méteres magasságával eltörpülne, ha neve nem lenne különleges. <br><br> Milyen hosszú a domb neve? ", img: "" }
        ],
        answers: [
            { ID: 1, answer: "8 darab." },
            { ID: 2, answer: "6 darab." },
            { ID: 3, answer: "10 darab." },
            { ID: 4, answer: "Igen, mindenhol az országban." },
            { ID: 5, answer: "Igen, de csak bizonyos helyeken." },
            { ID: 6, answer: "Nem, sehol." },
            { ID: 7, answer: "30 karakter." },
            { ID: 8, answer: "85 karakter." },
            { ID: 9, answer: "72 karakter." }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q3", "q4", "q8"],
        letter: "?",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
    {
        ID: 9,
        placeName: `Honolulu, Hawaii`,
        placeCoordinates: "21.3099° N, 157.8581° W",
        placeABR: `HI`,
        status: "unavailable",
        discovered: false,
        questions: [
            { text: "teszt1", img: "" },
            { text: "teszt2", img: "" },
            { text: "teszt3", img: "" }
        ],
        answers: [
            { ID: 1, answer: "válasz1" },
            { ID: 2, answer: "válasz2" },
            { ID: 3, answer: "válasz3" },
            { ID: 4, answer: "válasz4" },
            { ID: 5, answer: "válasz5" },
            { ID: 6, answer: "válasz6" },
            { ID: 7, answer: "válasz7" },
            { ID: 8, answer: "válasz8" },
            { ID: 9, answer: "válasz9" }
        ],
        selectedAnswers: ["", "", ""],
        goodAnswers: ["q1", "q4", "q7"],
        letter: "?",
        isInterviewAvailable: false,
        personName: "John Doe",
        interviewQuestions: [
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false },
            { question: "", answer: "", isTriggered: false }
        ]
    },
]

/*window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";  // Required for Chrome
});  KI KELL VENNI A KOMMENTET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

let selectedPlaceID = 0;

window.onload = function () {
    populateNavbar()
    populateProgressBar()
    writeCoords(150)
}

function writeCoords(speed) {
    const el = document.getElementById("coordinates");
    const pn = document.getElementById("placeName");
    const text = pn.textContent.trim();
    console.log(pn, text);
    pn.textContent = ""
    console.log(pn, text);


    const html = el.innerHTML.trim(); // keep <br>
    el.innerHTML = "";                // clear for typing

    // Split into tokens: characters and <br> tags
    const tokens = html.split(/(<br\s*\/?>)/g);

    let i = 0;

    function typeToken(tokenIndex = 0, charIndex = 0) {
        if (tokenIndex >= tokens.length) return;

        const token = tokens[tokenIndex];

        // If the token is a <br>, insert it instantly
        if (token.startsWith("<br")) {
            el.innerHTML += token;
            typeToken(tokenIndex + 1, 0);
            return;
        }

        // Otherwise type it character by character
        if (charIndex < token.length) {
            el.innerHTML += token[charIndex];
            setTimeout(() => typeToken(tokenIndex, charIndex + 1), speed);
        } else {
            // Move to next token
            typeToken(tokenIndex + 1, 0);
        }
    }

    typeToken();
    setTimeout(() => {
        writePlaceName(pn, text, speed)
    }, speed * 30);
}

function writePlaceName(el, text, speed) {
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            setTimeout(type, speed); // typing speed (ms per character)
        }
        else {
            el.innerHTML += `<br><img id="shipWheel"
                        src="./shipWheel.png" alt="">`
        }
    }
    type();
}


function populateNavbar() {

    let navbarInfos = `
            <div class="col-2" id="coordinates">${database[selectedPlaceID].placeCoordinates}</div>
            <div class="col-8" id="placeName">${database[selectedPlaceID].placeName} <br> <img id="shipWheel" src="./img/shipWheel.png" alt="">
            </div>
            <div class="col-2" id="date"><span id="currentTime"></span> <br> <span id="activityText" title="Hátralévő aktivitás radar alatt">Aktivitás:</span> <span
                        id="activityCounter" title="Hátralévő aktivitás radar alatt">100</span></div>`

    let navbarInfosPlace = document.getElementById("mainInfosContainer")
    navbarInfosPlace.innerHTML = navbarInfos
}

function updateClock() {
    const now = new Date();

    const Cyear = String(now.getFullYear()).padStart(2, '0');
    const Cmonth = String(now.getMonth()).padStart(2, '0');
    const Cday = String(now.getDate()).padStart(2, '0');
    const Chours = String(now.getHours()).padStart(2, '0');
    const Cminutes = String(now.getMinutes()).padStart(2, '0');
    const Cseconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("currentTime").innerHTML = `${Cyear}. ${Number(Cmonth) + 1}. ${Cday}.<br>${Chours} : ${Cminutes} : ${Cseconds}<br>`

}
updateClock();
setInterval(updateClock, 1000);


function populateProgressBar() {
    let progressBarPlace = document.getElementById("progressBar")
    progressBarPlace.innerHTML = "";
    let progressBarElement = "";

    for (let i = 0; i < database.length; i++) {
        if (database[i].ID == 0) {
            progressBarElement = `
            <div id="${database[i].ID}" onclick="updatePage(this)" class="progressBarElementStart">${database[i].placeABR}</div>
            `
        }
        else if (database[i].discovered == true && database[i].status == "selected") {
            progressBarElement = `
            <div id="${database[i].ID}" onclick="updatePage(this)" class="progressBarElementSelected">${database[i].placeABR}</div>
            `
        }
        else if (database[i].discovered == false) {
            progressBarElement = `
            <div id="${database[i].ID}" onclick="updatePage(this)" class="progressBarElementUnavailable">?</div>
            `
        }
        else if (database[i].discovered == true && database[i].status == "available") {
            progressBarElement = `
            <div id="${database[i].ID}" onclick="updatePage(this)" class="progressBarElementAvailable">${database[i].placeABR}</div>
            `
        }

        progressBarPlace.innerHTML += progressBarElement

        if (i < database.length - 1) {
            if (i % 2 == 0) {
                progressBarElement = `
            <div class="lineT"></div>
            `
            }
            else if (i % 2 != 0) {
                progressBarElement = `
            <div class="lineB"></div>
            `
            }
            progressBarPlace.innerHTML += progressBarElement
        }
    }
}

function updatePage(line) {
    database.forEach(item => {
        console.log(item.status);
    });

    selectedPlaceID = line.id
    if (database[selectedPlaceID].status == "available") {
        populateNavbar()
        populateQuestions()
        showLetter(selectedPlaceID)
        populateInterview()
        if (database[selectedPlaceID].discovered == false) {
            writeCoords(150)
        }
        else {
            writeCoords(70)
        }
        database.forEach((item) => {
            if (item.discovered == true) {
                item.status = "available"
            }
        })
        database[selectedPlaceID].discovered = true
        database[selectedPlaceID].status = "selected"
        let ID = Number(selectedPlaceID) + 1
        database[ID].status = "available"
    }

    populateProgressBar()

}

function populateQuestions() {
    if (selectedPlaceID != 0) {
        let counter = 0;
        let questionsPlace = document.getElementById("questions")
        questionsPlace.innerHTML = ""
        for (const question of database[selectedPlaceID].questions) {
            let questionsForm = `
        <div class="col-4 question">
            
            <h3 class="questionsQuestion">${question.text}</h3>

            ${question.img ? `<img src="${question.img}" class="img-fluid mb-2"> <br>` : ""}
            <div class="radio-container">
        `;
            for (let i = counter; i < counter + 3; i++) {
                let id = `q${database[selectedPlaceID].answers[i].ID}`
                let answers = "";

                if (database[selectedPlaceID].selectedAnswers.includes(id)) {
                    answers = `<label class="custom-radio">
                    <input onchange=showLetter(this) type="radio" id="${id}" name="q1+${question.text}" checked/>
                    <span class="radio-mark"></span>
                    ${database[selectedPlaceID].answers[i].answer}
                </label> <br>`
                }
                else {
                    answers = answers = `<label class="custom-radio">
                    <input onchange=showLetter(this) type="radio" id="${id}" name="q1+${question.text}" />
                    <span class="radio-mark"></span>
                    ${database[selectedPlaceID].answers[i].answer}
                </label> <br>`
                }
                questionsForm += answers
            }
            questionsForm += "</div></div>"
            questionsPlace.innerHTML += questionsForm
            counter += 3;
        }
    }
    if (selectedPlaceID == 0) {
        let pregamePlace = document.getElementById("questions")
        pregamePlace.innerHTML = `
                <div class="col-2"></div>
        <div class="col-8">
            <div id="gameStartCountDown"></div>
            <div id="gameStartAlert"></div>
        </div>
        <div class="col-2"></div>
        `
        updateCountDownClock();

    }
}

function showLetter(line) {
    let letterPlace = document.getElementById("letter")
    console.log(database[selectedPlaceID].letter, database[selectedPlaceID].selectedLetter);

    if (database[selectedPlaceID].selectedLetter != undefined) {
        letterPlace.innerText = database[selectedPlaceID].selectedLetter
    }
    else {
        letterPlace.innerText = "?"
    }



    let goodAnswers = 0
    let selectedAnswers = 0
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


    if (line.id == "q1" || line.id == "q2" || line.id == "q3") {
        database[selectedPlaceID].selectedAnswers[0] = line.id
    }
    if (line.id == "q4" || line.id == "q5" || line.id == "q6") {
        database[selectedPlaceID].selectedAnswers[1] = line.id
    }
    if (line.id == "q7" || line.id == "q8" || line.id == "q9") {
        database[selectedPlaceID].selectedAnswers[2] = line.id
    }
    console.log(database[selectedPlaceID].selectedAnswers, database[selectedPlaceID].goodAnswers)

    for (let i = 0; i < database[selectedPlaceID].goodAnswers.length; i++) {
        if (database[selectedPlaceID].goodAnswers[i] == database[selectedPlaceID].selectedAnswers[i]) {
            goodAnswers++
        }
    }
    for (let i = 0; i < database[selectedPlaceID].goodAnswers.length; i++) {
        if (database[selectedPlaceID].selectedAnswers[i] != "") {
            selectedAnswers++
        }
    }

    console.log(selectedAnswers, goodAnswers);



    let rndLetter;
    while (true) {
        rndLetter = letters[Math.floor(Math.random() * (25 - 0 + 1)) + 0]
        console.log(rndLetter)
        if (rndLetter != database[selectedPlaceID].letter) {
            break
        }
    }
    console.log(selectedAnswers);

    if (selectedAnswers == 3) {
        if (goodAnswers == 3) {
            letterPlace.innerText = database[selectedPlaceID].letter
        }
        else {
            letterPlace.innerText = rndLetter
            database[selectedPlaceID].selectedLetter = rndLetter
        }
    }

}

function populateInterview() {
    if (selectedPlaceID != 0) {
        let interviewPlace = document.getElementById("interviewQuestionPlace")

        interviewPlace.innerHTML = ""

        interviewPlace.innerHTML += `<h3 class="interviewPersonName">${database[selectedPlaceID].personName}</h3>`

        if (database[selectedPlaceID].isInterviewAvailable == true) {
            for (let i = 0; i < database[selectedPlaceID].interviewQuestions.length; i++) {

                let trigerred = false;
                if (database[selectedPlaceID].interviewQuestions[i].isTriggered == true) {
                    trigerred = true;
                }
                else if (database[selectedPlaceID].interviewQuestions[i].isTriggered == false) {
                    trigerred = false;
                }


                let intervievFull = `<div class="interviewQuestionContainer">
                <button class="interviewQuestion" id="${database[selectedPlaceID].interviewQuestions[i].ID}" onclick="triggerAnswer(this)">1. kérdés</button>
                <div class="interviewAnswerContainer" id="answer${database[selectedPlaceID].interviewQuestions[i].ID}" style="${(trigerred) ? "display:block" : "display:none"}">
                    <div class="interviewAnswer" id="text${database[selectedPlaceID].interviewQuestions[i].ID}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                        consequuntur iusto aliquam ex, iure debitis laboriosam, minus, excepturi pariatur alias
                        molestiae nesciunt reiciendis beatae ad sed ullam officia vitae eos.</div>
                    <hr>
                </div>
            </div>`
                interviewPlace.innerHTML += intervievFull
            }
        }
        else {
            interviewPlace.innerText = "Nem taltál személyt."
        }
    }
    if (selectedPlaceID == 0) {

    }
}

function writeText(id) {
    const el = document.getElementById("text" + id);

    const text = el.textContent.trim();
    el.textContent = "";       // clear the text for typing effect

    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            setTimeout(type, 50); // typing speed (ms per character)
        }
    }

    type();
}

function triggerAnswer(line) {
    console.log(line.id);

    for (let i = 0; i < database[selectedPlaceID].interviewQuestions.length; i++) {
        if (database[selectedPlaceID].interviewQuestions[i].ID == line.id) {


            database[selectedPlaceID].interviewQuestions[i].isTriggered = true
        }
    };

    document.getElementById("answer" + line.id).style.display = "block"
    writeText(line.id)
}



