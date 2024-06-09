let botones = document.querySelectorAll(".card");

let mezclar1Botton = document.getElementById("mezclar1");
let carta1 = document.getElementById("C1");
let carta2 = document.getElementById("C2");
let carta3 = document.getElementById("C3");
let carta4 = document.getElementById("C4");
let carta5 = document.getElementById("C5");
let carta6 = document.getElementById("C6");
let carta7 = document.getElementById("C7");
let carta8 = document.getElementById("C8");
let img1 = "/imgNivelUno/circulo2N1.jpeg"
let img2 = "/imgNivelUno/circuloN1.jpeg"
let img3 = "/imgNivelUno/cuadradoN1.jpeg"
let img4 = "/imgNivelUno/trianguloN1.jpeg"
let sameChecking  = ['n', 'n']
let combination= ['n', 'n']
let imagenes1 = [
    { 
        img: "",
        url : "0",
        id : "0a", 
        value : "0",
    },
    {
        img: "",
        url : "0",
        id : "0b",
        value : "0",
        
    },
    {
        img: "",
        url : "1",
        id : "1a",
        value : "1",
        
    },
    {
        img: "",
        url : "1",
        id : "1b",
        value : "1"
        
    },
    {
        img: "",
        url : "2",
        id : "2a",
        value : "2",
        
    },
    {
        img: "",
        url : "2",
        id : "2b",
        value : "2"
    },
    {
        img: "",
        url : "3",
        id : "3a",
        value : "3"
    },
    {
        img: "",
        url : "3",
        id : "3b",
        value : "3"
    }
]

function mix(arreglo) {
    arreglo.sort(function() {
        return Math.random() - 0.5;
    });
}
mezclar1Botton.addEventListener("click", () => {
    mix(imagenes1)
    botones.forEach(function(boton, i) {
        let asig = imagenes1[i];
        boton.textContent = asig.url;
        boton.id = asig.id;
        boton.value = asig.value;
    });
});

function asignarCheck(id, value){
    if(sameChecking [0] == "n"){
        sameChecking [0] = id
    }
    else{
        sameChecking [1] = id
    }

    if(combination[0] == "n"){
        combination[0] = value
    }
    else{
        combination[1] = value
    }
}

function checkcombination(){
    if(combination[0] == combination[1]){
        combination = ["n", "n"]
        sameChecking  = ["n", "n"]
        return true
    }
    else {
        combination = ["n", "n"]
        sameChecking  = ["n", "n"]
        return false
    }
}

function sameCheck(){
    if((sameChecking [0] && sameChecking [1]) != 'n' ) {
        if(sameChecking [0] === sameChecking [1]) {
            return false
        }
        else{
            return true
        }
    }
}

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        asignarCheck(boton.id, boton.value)
        let valuePid = boton.value
        let boton1 = document.getElementById(valuePid + "a")
        let boton2 = document.getElementById(valuePid + "b")
        if(sameCheck()){
            if(checkcombination()){
                boton1.style.opacity = "0"
                boton2.style.opacity = "0"
                boton1.disabled = true
                boton2.disabled = true
            }
        }
    });
});