const Fruit = ["apple", "orange", "banana", "cucumber", "tomato"];
const Tool = ["hammer", "scissor", "pen", "eraser", "knife"];
const Name = ["mohamad", "reza", "hassan", "sepehr", "arman"]
const Words = [...Fruit, ...Tool, ...Name];
let RanItem = "";
let clicked = [];
let mistakes = 0;
let result = "";


function RandomItem() {
    RanItem = Words[Math.floor(Math.random() * Words.length)];

    if (Fruit.indexOf(RanItem) >= 0) {
        document.getElementById("idea").querySelector("p").innerText = "Fruit";
    } else if (Tool.indexOf(RanItem) >= 0) {
        document.getElementById("idea").querySelector("p").innerText = "Tool";

    } else if (Name.indexOf(RanItem) >= 0) {
        document.getElementById("idea").querySelector("p").innerText = "Name";
    }

    document.getElementById("letters").addEventListener("click", buttonhandler);
    window.addEventListener("keydown", keyhandler);
}


function buttonhandler(event) {
    letterhandler(event.target.id);

}
function Setunderscore() {
    let splitedWord = RanItem.split("");
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"));
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}

function letterhandler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).classList.add("used");

    if (RanItem.indexOf(letter) >= 0) {
        Setunderscore();
        Chekifwon();

    } else if (RanItem.indexOf(letter) === -1) {
        mistakes++;
        Checkiflost();
        Updatepic();
    }
}
function Chekifwon() {
    if (RanItem === result) {
        document.getElementById("over").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
        Wonstoped();
    }
}
function Checkiflost() {
    if (mistakes === 6) {
        document.getElementById("over").style.display = "block";
        document.getElementById("clue").querySelector("p").innerHTML = `<p>Random word is:${RanItem}</p>`;
        stoped();
    }

}

function Updatepic() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`;


}

function stoped() {

    document.getElementById("letters").style.display = "none";
    document.getElementById("idea").style.display = "none";
    document.getElementById("image").querySelector("img").src = "assets/hangman6.png";
    document.getElementById("name").querySelector("h1").style.marginBottom = "30px";
    document.getElementById("btn").querySelector("button").style.display = "block";
    Restart();
}

function Restart() {
    const reset = document.getElementById("btn").querySelector("button");
    reset.addEventListener("click", () => {
        document.location.reload();
    })
}
function keyhandler(event) {
    letterhandler(event.key)
}
function Wonstoped() {
    document.getElementById("letters").style.display = "none";
    document.getElementById("idea").style.display = "none";
    document.getElementById("image").querySelector("img").src = "assets/winner.png";
    document.getElementById("name").querySelector("h1").style.marginBottom = "30px";
    document.getElementById("btn").querySelector("button").style.display = "block";
    Restart();

}
RandomItem();
Setunderscore();
console.log(RanItem);
