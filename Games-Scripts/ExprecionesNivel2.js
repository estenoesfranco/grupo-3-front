const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

let feliz1 = 1;
let triste1 = 2;
let enojado1 = 3;
let sorprendido1 = 4;

let sorprendido2 = 4;
let enojado2 = 3;
let feliz2 = 1;
let triste2 = 2;

let aux = 0;
let buenas = 0;
let malas = 0;

function updateCounters() {
    document.getElementById("buenas").innerText = buenas;
    document.getElementById("malas").innerText = malas;
}

img1.addEventListener("click", function ()  {
    aux = aux + feliz1;
    img1.classList.add("img-clicked");
    setTimeout(function() {
        img1.classList.remove("img-clicked");
    }, 1000);

});
img2.addEventListener("click", function ()  {
    aux = aux + triste1;
    img2.classList.add("img-clicked");
    setTimeout(function() {
        img2.classList.remove("img-clicked");
    }, 1000);

});
img3.addEventListener("click", function ()  {
    aux = aux + enojado1;
    img3.classList.add("img-clicked");
    setTimeout(function() {
        img3.classList.remove("img-clicked");
    }, 1000);

});
img4.addEventListener("click", function ()  {
    aux = aux + sorprendido1;
    img4.classList.add("img-clicked");
    setTimeout(function() {
        img4.classList.remove("img-clicked");
    }, 1000);

});

text1.addEventListener("click", function ()  {
    aux = aux + sorprendido2;
    if (aux == 8) {
        text1.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        buenas++;
    } else {
        aux = aux * 0;
        malas++;
    }
    aux = aux * 0;
    updateCounters();
});

text2.addEventListener("click", function ()  {
    aux = aux + enojado2;
    if (aux == 6) {
        text2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        buenas++;
    } else {
        aux = aux * 0;
        malas++;
    }
    aux = aux * 0;
    updateCounters();
});

text3.addEventListener("click", function ()  {
    aux = aux + feliz2;
    if (aux == 2) {
        text3.style.visibility = "hidden";
        img1.style.visibility = "hidden";
        buenas++;
    } else {
        aux = aux * 0;
        malas++;
    }
    aux = aux * 0;
    updateCounters();
});

text4.addEventListener("click", function ()  {
    aux = aux + triste2;
    if (aux == 4) {
        text4.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        buenas++;
    } else {
        aux = aux * 0;
        malas++;
    }
    aux = aux * 0;
    updateCounters();
});
