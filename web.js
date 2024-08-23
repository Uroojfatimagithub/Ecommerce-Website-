let card=document.querySelector(".trend");
let card2=document.getElementById("trendSecond");
let about = document.querySelector(".about");
let blog=document.querySelector(".trends");
let mainPage=document.querySelector(".main");
let contact = document.querySelector(".contact");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
   about.style.display="none"


    
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"


}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgb(2, 173, 173)"

}
function shops(){
    mainPage.style.display="none";
    blog.style.display="none";

    document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
}
function blogs(){
    mainPage.style.display="none";
    blog.style.display="block";       //is sy sirf blog wala portion dikhy ga
    card.style.display="none";
    card2.style.display="none";

    document.getElementById("blog").style.color="rgb(2, 173, 173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
}


function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
document.getElementById("contact").style.color="rgb(2, 173, 173)"

}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
}


function addCart(){
    alert("Added To Cart");
    location.reload()
}

// Get all buttons with the class 'addToCartButton'
const addToCartButtons = document.querySelectorAll('.addToCartButton');

// Loop through each button and attach the click event listener
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Show an alert message when any button is clicked
        alert('Item added to cart!');
        location.reload()
    });
});


document.querySelector('.back').addEventListener('click', function() {
    window.location.href = 'web.html'; // Replace 'index.html' with the actual path to your homepage
});