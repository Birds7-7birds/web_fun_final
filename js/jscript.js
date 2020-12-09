


function myFunction() {
    document.getElementById("zform").style.display = "none";
}
var sor = ''

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

var ximg = document.getElementById("displayed-img")

function imgfunc() {
    sor = this.id
    ximg.src = `images/${this.id}.jpg`
    console.log(this.id)
    if (document.getElementById("zform").style.display === "none"){
        document.getElementById("zform").style.display = "flex";
    }

}


var butn = document.getElementById("BTN");
butn.addEventListener("click", BTNfnc);

function BTNfnc(){
    var ximg = document.getElementById("displayed-img")
    var y = document.getElementById("effect");
    vale = y.value
    y.value = ''
    if (vale == "blur"){
        ximg.src = `images/${sor}B.jpg`
    } else {
        alert(`${vale} is not supported...only blur is`)
    }



}