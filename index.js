// alert("Is this working at all?")
// console.log(typeof passwor)


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let output = document.querySelector(".output1");
let password = document.querySelector(".output2")
let generate = document.querySelector(".generate");

let n = 4;
let passray1 = [];
let passray2 = [];


function passwor(size) {
    for (let i = 0; i< size; i++){
    let character1 = Math.floor(Math.random()*characters.length);
    let character2 = Math.floor(Math.random()*characters.length);
    passray1.push(characters[character1]);
    passray2.push(characters[character2])
}
    password.textContent = passray1.join("");
    output.textContent = passray2.join("");
// Reseting the array after every generation
    passray1 = [];
    passray2 = [];
}

function alertLength(){
    let passLength = document.querySelector(".pass-length").value;
    passwor(passLength);
}

function copy(){
    let pass1 = document.querySelector(".output1");

    let pass2 = document.querySelector("output2")

    navigator.clipboard.writeText(pass1.textContent);

    navigator.clipboard.writeText(pass2.textContent);
}