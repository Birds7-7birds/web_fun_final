


function myFunction() {
    document.getElementById("zform").style.display = "none";
}
var sor = 18

for (let i = 1; i < 6; i++) {
    var img = document.createElement('img'); 
    img.src = `images/pic${i}.jpg`
    img.alt = `pic${i}.jpg`
    img.id = `pic${i}`
    img.class = "pic"
    console.log(`Walking east one ${img.src}`);
    document.getElementById('thumb-bar').appendChild(img);
    document.getElementById(`pic${i}`).addEventListener("mouseover", imgfunc);

}

var x = document.getElementById("displayed-img")

function imgfunc() {
    sor = this.id
    x.src = `images/${this.id}.jpg`
    console.log(this.id)
    if (document.getElementById("zform").style.display === "none"){
        document.getElementById("zform").style.display = "flex";
    }

}

var b = document.getElementById("BTN");
b.addEventListener("click", BTNfnc);

function BTNfnc(){
    var x = document.getElementById("displayed-img")
    var y = document.getElementById("effect");
    vale = y.value
    y.value = ''
    if (vale == "blur"){
        x.src = `images/${sor}B.jpg`
    } else {
        alert(vale)
    }



}