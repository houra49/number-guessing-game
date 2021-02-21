const wählen = document.getElementById("wählen");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const andere = document.getElementById("andere");
const wählenNum = document.getElementById("wählen-num");
const rundWählen = document.getElementById("rund-wählen");
const rund = document.getElementById("rund");
const rund2 = document.getElementById("rund2");
const userNum = document.getElementById("user-num");
const result = document.getElementById("result");
const button = document.getElementById("button");
const error = document.getElementById("error");
let roundInput
let random = zufällig()
let counter = 1
///////////////////////////////////////////////////////////////////////////////////////////////////////
function zufällig() {
    return Math.floor(Math.random() * 100) + 1;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function Runden() {
    if (num4.checked) {
        wählenNum.style.display = "none"
        roundInput = 4
    } else if (num5.checked) {
        wählenNum.style.display = "none"
        roundInput = 5
    } else if (num6.checked) {
        wählenNum.style.display = "none"
        roundInput = 6
    } else {
        wählenNum.style.display = "block"
        roundInput = wählenNum.value

    }
}
Runden()
///////////////////////////////////////////////////////////////////////////////////////////////////////
function vergleich(random, user) {
    if (user < random) {
        return `Du brauchst größer als ${user} zu raten,versuch nochmal <br>`
    } else if (random < user) {
        return `Du brauchst kleiner als ${user} zu raten,versuch nochmal <br>`
    } else {
        return `Du hast mich bekommen an ..., ich bin ${random},<br> <a href="#" onclick="restart()">Spiel nochmal</a>`
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function raten() {
    if (userNum.value.length > 0) {
        error.classList.remove('animation')
        error.classList.add('art-sec2-hide')
        wählen.style.display = "none"
        rundWählen.style.display = "block"
        rund2.innerHTML = roundInput
        rund.innerHTML = counter
        result.innerHTML += vergleich(random, userNum.value)
        if (counter == roundInput && random != userNum.value) {
            button.disabled = true
            result.innerHTML = 'Du verpasst!<br><a href="#" onclick="erneut()">Spiel nochmal</a>'
        }
        counter++;
    } else {

        error.classList.remove('art-sec2-hide')
        error.classList.add('animation')
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function erneut() {
    location.reload();
}