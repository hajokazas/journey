let activity = 100
localStorage.setItem("activity", activity)
document.getElementById("activityCounter").innerText = activity


// Set target date and time
const targetTime = new Date("2025-12-31T19:00:00");
let finalCountdownStarted = false;

function updateCountDownClock() {
    const now = new Date();
    const diff = targetTime - now;

    const Cyear = String(now.getFullYear()).padStart(2, '0');
    const Cmonth = String(now.getMonth()).padStart(2, '0');
    const Cday = String(now.getDate()).padStart(2, '0');
    const Chours = String(now.getHours()).padStart(2, '0');
    const Cminutes = String(now.getMinutes()).padStart(2, '0');
    const Cseconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("currentTime").innerHTML = `${Cyear}. ${Number(Cmonth)+1}. ${Cday}.<br>${Chours} : ${Cminutes} : ${Cseconds}<br>`


    if (diff <= 60000 && !finalCountdownStarted) {
        document.getElementById("gameStartCountDown").style.display = "none";
        finalCountdownStarted = true;
        setInterval(FinalCountdown, 1200);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("gameStartCountDown").innerText = `
    Indulásig hátralévő idő:
    ${days > 0 ? days + " nap" : ""} ${hours > 0 ? hours + " óra" : ""} ${minutes > 0 ? minutes + " perc" : ""} ${seconds > 0 ? seconds + " másodperc" : ""}
    `;

    // PHASE TRIGGERS
    if (days === 0 && hours === 0) {

        if (minutes < 45 && minutes >= 1) {
            document.getElementById("gameStartAlert").innerHTML = "leírás";
        }
        if (minutes < 30 && minutes >= 1) {
            document.getElementById("preGameQuestion1").style.display = "block";
            document.getElementById("submitAnswer1").style.display = "block";
            document.getElementById("textBox1").style.display = "block";
        }
    }
}
setInterval(updateCountDownClock, 1000);

function checkQ1() {
    if (document.getElementById("inputPass").value == "helyes") {
        document.getElementById("preGameQuestion2").style.display = "block";
        document.getElementById("submitAnswer2").style.display = "block";
        document.getElementById("textBox2").style.display = "block";
    }
    else {
        activity--
        document.getElementById("activityCounter").innerText = activity
    }
}
function checkQ2() {
    activity += Number(document.getElementById("inputThrow").value);
    document.getElementById("activityCounter").innerText = activity
    document.getElementById("submitAnswer2").style.display = "none";
    localStorage.setItem("activity", activity)
}



const num10_0 = ["X", "9", "VIII", "7", "六", "V", "4", "三", "2", "I"]
let actnum = 60;
let i = 0

function FinalCountdown() {
    let place = document.getElementById("number")
    if (actnum > 10) {
        if (actnum <= 60 && actnum > 51) {
            place.classList.add("countdown60-51")
            document.getElementById("gameStartAlert").style.display = "none";
            document.body.style.backgroundColor = "#1f3e55"
        }
        if (actnum <= 50 && actnum > 41) {
            place.classList.remove("countdown60-51")
            place.classList.add("countdown50-41")
            document.getElementById("textBox1").style.display = "none";
            document.getElementById("textBox2").style.display = "none";
            document.getElementById("hr2").style.display = "none"
            document.body.style.backgroundColor = "#193245"
        }
        if (actnum <= 40 && actnum > 31) {
            place.classList.remove("countdown50-41")
            place.classList.add("countdown40-31")
            document.getElementById("preGameQuestion1").style.display = "none";
            document.getElementById("preGameQuestion2").style.display = "none";
            document.getElementById("hr1").style.display = "none"
            document.body.style.backgroundColor = "#0d2130"
        }
        if (actnum <= 30 && actnum > 21) {
            place.classList.add("countdown30-21")
            document.getElementById("submitAnswer1").style.display = "none";
            document.getElementById("submitAnswer2").style.display = "none";
            document.body.style.backgroundColor = "#05121c"
        }
        if (actnum <= 20 && actnum > 11) {
            place.classList.remove("countdown30-21")
            place.classList.add("countdown20-11")
            document.getElementById("mainInfosContainer").style.display = "none"
            document.body.style.backgroundColor = "#040e16"
        }

        place.innerText = actnum
        actnum--
    }
    else if (actnum <= 10 && actnum > 0) {
        document.body.style.backgroundColor = "black"
        document.getElementById("finalCountdownPlace").style.marginTop = "50%"
        document.getElementById("finalCountdownPlace").style.userSelect = "none"

        if (actnum == 10) {
            place.classList.remove("countdown20-11")
            place.classList.add("countdown10")
        }
        if (actnum == 9) {
            place.classList.remove("countdown10")
            place.classList.add("countdown9")
        }
        if (actnum == 8) {
            place.classList.remove("countdown9")
            place.classList.add("countdown8")
        }
        if (actnum == 7) {
            place.classList.remove("countdown8")
            place.classList.add("countdown7")
        }
        if (actnum == 6) {
            place.classList.remove("countdown7")
            place.classList.add("countdown6")
        }
        if (actnum == 5) {
            place.classList.remove("countdown6")
            place.classList.add("countdown5")
        }
        if (actnum == 4) {
            place.classList.remove("countdown5")
            place.classList.add("countdown4")
        }
        if (actnum == 3) {
            place.classList.remove("countdown4")
            place.classList.add("countdown3")
        }
        if (actnum == 2) {
            place.classList.remove("countdown3")
            place.classList.add("countdown2")
        }
        if (actnum == 1) {
            place.classList.remove("countdown2")
            place.classList.add("countdown1")
        }
        place.innerText = num10_0[i]
        i++
        actnum--
    }
    else {
        console.log("hello");
        document.getElementById("gameStartButton").style.display = "block"
        place.innerText = "0"

    }
}
//setInterval(FinalCountdown, 1200);
//FinalCountdown()