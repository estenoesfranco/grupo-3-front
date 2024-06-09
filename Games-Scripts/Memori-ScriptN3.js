let botones = document.querySelectorAll(".card");
let mezclar3Botton = document.getElementById("mezclar3");
let carta1 = document.getElementById("C1");
let carta2 = document.getElementById("C2");
let carta3 = document.getElementById("C3");
let carta4 = document.getElementById("C4");
let carta5 = document.getElementById("C5");
let carta6 = document.getElementById("C6");
let carta7 = document.getElementById("C7");
let carta8 = document.getElementById("C8");
let carta9 = document.getElementById("C9");
let carta10 = document.getElementById("C10");
let carta11 = document.getElementById("C11");
let carta12 = document.getElementById("C12");
let carta13 = document.getElementById("C13");
let carta14 = document.getElementById("C14");
let carta15 = document.getElementById("C15");
let carta16 = document.getElementById("C16");
let carta17 = document.getElementById("C17");
let carta18 = document.getElementById("C18");
let carta19 = document.getElementById("C19");
let carta20 = document.getElementById("C20");
let carta21 = document.getElementById("C21");
let carta22 = document.getElementById("C22");
let carta23 = document.getElementById("C23");
let carta24 = document.getElementById("C24");
let carta25 = document.getElementById("C25");
let carta26 = document.getElementById("C26");
let carta27 = document.getElementById("C27");
let carta28 = document.getElementById("C28");
let sameChecking  = ['n', 'n']
let combination= ['n', 'n']
let imagenes3 = [
    {
        url : "0",
        id : "0a",
        value : "0"
    },
    {
        url : "0",
        id : "0b",
        value : "0"
    },
    {
        url : "1",
        id : "1a",
        value : "1"
    },
    {
        url : "1",
        id : "1b",
        value : "1"
    },
    {
        url : "2",
        id : "2a",
        value : "2"
    },
    {
        url : "2",
        id : "2b",
        value : "2"
    },
    {
        url : "3",
        id : "3a",
        value : "3"
    },
    {
        url : "3",
        id : "3b",
        value : "3"
    },
    {
        url : "4",
        id : "4a",
        value : "4"
    },
    {
        url : "4",
        id : "4b",
        value : "4"
    },
    {
        url : "5",
        id : "5a",
        value : "5"
    },
    {
        url : "5",
        id : "5b",
        value : "5"
    },
    {
        url : "6",
        id : "6a",
        value : "6"
    },
    {
        url : "6",
        id : "6b",
        value : "6"
    },
    {
        url : "7",
        id : "7a",
        value : "7"
    },
    {
        url : "7",
        id : "7b",
        value : "7"
    },
    {
        url : "8",
        id : "8a",
        value : "8"
    },
    {
        url : "8",
        id : "8b",
        value : "8"
    },
    {
        url : "9",
        id : "9a",
        value : "9"
    },
    {
        url : "9",
        id : "9b",
        value : "9"
    },
    {
        url : "10",
        id : "10a",
        value : "10"
    },
    {
        url : "10",
        id : "10b",
        value : "10"
    },
    {
        url : "11",
        id : "11a",
        value : "11"
    },
    {
        url : "11",
        id : "11b",
        value : "11"
    },
    {
        url : "12",
        id : "12a",
        value : "12"
    },
    {
        url : "12",
        id : "12b",
        value : "12"
    },
    {
        url : "13",
        id : "13a",
        value : "13"
    },
    {
        url : "13",
        id : "13b",
        value : "13"
    },
    {
        url : "14",
        id : "14a",
        value : "14"
    },
    {
        url : "14",
        id : "14b",
        value : "14"
    },
]

function mix(arreglo) {
    arreglo.sort(function() {
        return Math.random() - 0.5;
    });
}

mezclar3Botton.addEventListener("click", () => {
    mix(imagenes3)
    botones.forEach(function(boton, i) {
        let asig = imagenes3[i];
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