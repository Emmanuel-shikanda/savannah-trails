 const homePage=document.getElementById("homepage");

 let media = [
     "img/27707-lion-951778_1920.jpg",
    "img/pexels-mansur-travel-planner-2160841616-37049823.jpg",
    "img/pexels-cottonbro-9943065.jpg"
 ]

 let index = 0;
 
 function changeback(){

 const current = media[index];

homePage.style.backgroundImage=`url(${current})`;
 index++;

 if(index>=media.length){
 index=0;

 }

 }

changeback();
setInterval(changeback, 7000);


let menuIcon = document.getElementsByClassName("menu-icon")[0];
let navbar = document.getElementById("navbar");
let header = document.getElementById("head");
let links = document.querySelectorAll(".nav-links li a");
let open =false;

menuIcon.addEventListener("click",function(){
    if(open===false){
 menuIcon.src="icon/icons8-close-button-100.png";
 navbar.style.width="210px";
open = true;
navbar.style.backgroundColor="black";
header.style.backgroundColor="black";

  links.forEach(function(link){
    link.style.opacity="1";
  })

    }
    else{
menuIcon.src="icon/icons8-menu-100.png";
navbar.style.width="49px";
open  = false;
navbar.style.backgroundColor= "transparent";
header.style.backgroundColor= "transparent" ;

links.forEach(function(link){
link.style.opacity="0";
});

    }

})

 
let icons = document.querySelectorAll(".nav-links-phone li");

icons.forEach(function(icon){

icon.addEventListener("click", function(){

icons.forEach(function(i){

    i.style.backgroundColor= "transparent";
});

this.style.backgroundColor ="rgba(128, 128, 128, 0.217)";


});



});


/*image reveal*/


const about = document.getElementById("about-page");
const text= document.querySelector(".story");
const images= document.querySelectorAll(".photo img");



window.addEventListener("scroll", function(){

    const reach = about.getBoundingClientRect();

    if(reach.top < window.innerHeight){

    text.style.transform="translateX(0)";
    text.style.opacity="1";

    images.forEach(function(img){
   img.style.transform ="translateX(0)";
   img.style.opacity = "1";
    });

    }


});


const story= document.getElementsByClassName("more")[0];


if(window.innerWidth <= 950){

window.addEventListener("scroll",function(){

    const about = document.getElementById("about-page");
    const position = about.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){
 story.style.transform="translateY(0)";
 story.style.opacity="1";
 


}

});

}






const head = document.querySelector(".texts h1");
const paragraph = document.querySelector(".texts p");
const container2= document.getElementsByClassName("container2")[0];
const phoneSocials= document.getElementsByClassName("social-icons2")[0];

window.addEventListener("DOMContentLoaded",function(){

head.style.transform ="translateY(0)";
head.style.opacity="1";

paragraph.style.transform = "translateX(0)";
paragraph.style.opacity="1";

container2.style.transform = "translateX(0px)";
container2.style.opacity="1";

phoneSocials.style.transform = "translateY(0)";
phoneSocials.style.opacity="1";

});



/*carousel-Animation*/

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listitem = document.querySelector('.carousel .list');
let thumbnailsDOM = document.querySelector('.carousel .thumbnails');

next.onclick = function(){
     showslider('next');
}
prev.onclick = function(){
    showslider('prev');
}


let runAutorun = setTimeout(function(){
     next.click();
    },7000);


let runTimeout;



 function showslider(type){
        let itemslide = document.querySelectorAll('.carousel .list .item');
        let itemthumbnail = document.querySelectorAll('.carousel .thumbnails .item');
    
        if(type === 'next'){
            listitem.appendChild(itemslide[0]);
            thumbnailsDOM.appendChild(itemthumbnail[0]);
            carousel.classList.add('next');
        }
        else{
            let lastItem = itemslide.length-1;
            let lastThumb = itemthumbnail.length-1;
            listitem.prepend(itemslide[lastItem]);
            thumbnailsDOM.prepend(itemthumbnail[lastThumb]);
            carousel.classList.add('prev');
        }
    
        clearTimeout(runTimeout);
        runTimeout = setTimeout(function() {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, 2000);
    clearTimeout(runAutorun);
    
    
    }

//TAB-CHANGER.

const buttons = document.querySelectorAll(".list-container-btn");
const page = document.querySelectorAll(".country-content");

buttons.forEach(button =>{
    button.addEventListener("click",function(){
    buttons.forEach(button => button.classList.remove("available"));
    page.forEach(page => page.classList.remove("available"));

    button.classList.add("available");

    const target=button.getAttribute("data-country");
    document.getElementById(target).classList.add("available");


    });
}   );


const toggle = document.getElementsByClassName("drop-down")[0];
const ideas = document.getElementsByClassName("ideas")[0];
const  btns = document.querySelectorAll(".list-container-btn");
let opened = false;

if(window.innerWidth <= 990){
    toggle.addEventListener("click",function(){

if(opened ===true){
    ideas.style.height="63px";
    opened = false
}
else{
    ideas.style.height="420px";
    opened = true;
}

    });

btns.forEach(btn =>{
btn.addEventListener("click",function(){
    if(!btn.getAttribute("data-country"))return;

    toggle.textContent=btn.textContent+" ▼";
    ideas.style.height="63px";
    opened = false;


});




})



}


const adventure = document.querySelector(".adventures");
const adtext = document.querySelector(".adtext");
const cards = document.querySelectorAll(".country-container");


window.addEventListener("scroll",function(){

const onscreen= adventure.getBoundingClientRect();
if(onscreen.top < window.innerHeight - 100){
    adtext.style.transform ="translateY(0px)";
    adtext.style.opacity="1";
    adtext.style.filter="blur(0)";

}
});


 
if (window.innerWidth <= 990) {

    const images = document.querySelectorAll(".country-content img");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const container= entry.target.closest(".country-container");

            const content = container.querySelector(".big-content");

            if (entry.intersectionRatio >= 0.96) {
                content.classList.add("show");
                container.classList.add("active")
            } else {
                content.classList.remove("show");
                container.classList.remove("active")
            }

        });

    }, {
        threshold: 0.96
    });

    images.forEach(img => {
        observer.observe(img);
    });

}

const text4 = document.querySelector(".reviewstext");

const textObserver = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
  if(entry.intersectionRatio){
   entry.target.classList.add("show");

  }

  });

},
{
threshold:0.3
}

);

textObserver.observe(text4);

const cardsS= document.querySelectorAll(".review-card");

const cardsobserver = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("avail");

}

});

},
{
    threshold :0.7
}

);

cardsS.forEach(card=>{
cardsobserver.observe(card);
});


const bookings = document.querySelectorAll(".small-content a");
const bigcontainer= document.getElementsByClassName("container2")[0];
bookings.forEach(booking=>{
booking.addEventListener("click",function(){
bigcontainer.classList.add("active");

});


});


window.addEventListener("load",function(){
const loading = document.getElementById("loader");
loading.style.opacity="0";
loading.style.transition="opacity 3s ease";

setTimeout(function(){
    loading.style.display="none"
},1000)
})
 

const payButtons=document.querySelectorAll(".payment-btn");
const payPage= document.querySelectorAll(".cards-content");

 payButtons.forEach(function(payButton) {
    payButton.addEventListener("click", function() {

        payButtons.forEach(function(payButton) {
            payButton.classList.remove("available");
        });

        payPage.forEach(function(payPage) {
            payPage.classList.remove("available");
        });

        payButton.classList.add("available");

        const target = payButton.getAttribute("data-payment");
        document.getElementById(target).classList.add("available");

        const textH = document.querySelector(".payment-content h1");

        if (target === "Mpesa") {
            textH.style.color = "green";

        } else if (target === "visa") {
            textH.style.color = "rgba(0, 166, 255, 0.502)";

        } else if (target === "paypal") {
            textH.style.color = "rgba(0, 0, 255, 0.69)";

        } else if (target === "Mastercard") {
            textH.style.color = "black";

        } else {
            textH.style.color = "black";
        }

        // update amount currency when switching tabs
        if (paymentForm.style.display === "flex") {

            const singlePrice = destinationPrices[locationinput.value];
            const guest = guestInput.value;
            const totalAmount = singlePrice * guest;

            const payAmountInputs = document.querySelectorAll("#payAmount");

            if (target === "Mpesa") {
                payAmountInputs.forEach(function(input) {
                    input.value = "KSh " + (totalAmount * USD_TO_KES).toLocaleString();
                });
            } else {
                payAmountInputs.forEach(function(input) {
                    input.value = "Total Amount: $" + totalAmount;
                });
            }
        }

    });
});

//booking inputs
const locationinput = document.getElementById("locationInput");
const dateInput=document.getElementById("dateInput");
const guestInput = document.getElementById("guestInput");
const scheduleBtn= document.getElementById("scheduleBtn");;


//errorbox
const errorBox=document.getElementById("errorBox");
const errorText= document.getElementById("errorText");

//payment page

const paymentForm = document.getElementById("paymentForm");

//readonly inputs

const payAmoutinputs=document.querySelectorAll("#payAmount");
const payAmountKsh = document.getElementById("payAmountksh");



const imageContent = document.querySelector(".image-content");



function showError(message){

errorText.textContent = message;

errorBox.classList.add("show");

setTimeout(()=>{
errorBox.classList.remove("show");
},3000)

}

const validDestinations = [

    "Indian Ocean, Kenya",
    "Maasai Mara, Kenya",
    "Nairobi, Kenya",
    "Mount Kenya",

    "Zanzibar, Tanzania",
    "Serengeti Culture",
    "Serengeti National Park",
    "Mt. Kilimanjaro, Tanzania",

    "Rwenzori Mountains, Uganda",
    "Queen Elizabeth National Park",
    "River Nile, Uganda",
    "Mgahinga Gorilla National Park",

    "Nyungwe Forest National Park",
    "Akagera Wildlife, Rwanda",
    "Lake Kivu, Rwanda",
    "Kigali City, Rwanda",

    "Lake Tanganyika, Burundi",
    "Kibira Forest, Burundi",
    "Kibira Culture, Burundi",
    "Karera Waterfalls, Burundi",

    "Lalibela Wonders, Ethiopia",
    "Simien Mountains, Ethiopia",
    "Addis Ababa, Ethiopia",
    "Kaffa, Ethiopia"

];


scheduleBtn.addEventListener("click",function(){

const location = locationinput.value.trim();
const date = dateInput.value;
const guest = guestInput.value;

//location Empty

if(location === ""){
    showError("please enter your destination");
    return;
}

if(!validDestinations.includes(location)){

    showError("Destination not available.choose from the list.");

    return;
}


if(date === ""){
   showError("please choose your travel date");
   return;
}
const today = new Date().toISOString().split("T")[0];

if(date<today){
    showError("you cannot book past dates");
    return;
}
if(guest < 1){
    showError("pliz enter number of guests ");
    return;
}
if(guest > 15){
    showError("Maximum guests allowed is 15");
    return;
} 


openPaymentPage(location,date,guest);

})


const destinationPrices = {

    "Indian Ocean, Kenya": 1500,
    "Maasai Mara, Kenya": 1700,
    "Nairobi, Kenya": 350,
    "Mount Kenya": 1100,

    "Zanzibar, Tanzania": 1700,
    "Serengeti Culture": 950,
    "Serengeti National Park": 1600,
    "Mt. Kilimanjaro, Tanzania": 1800,

    "Rwenzori Mountains, Uganda": 1350,
    "Queen Elizabeth National Park": 1900,
    "River Nile, Uganda": 800,
    "Mgahinga Gorilla National Park": 1000,

    "Nyungwe Forest National Park": 1200,
    "Akagera Wildlife, Rwanda": 350,
    "Lake Kivu, Rwanda": 1100,
    "Kigali City, Rwanda": 1700,

    "Lake Tanganyika, Burundi": 900,
    "Kibira Forest, Burundi": 800,
    "Kibira Culture, Burundi": 900,
    "Karera Waterfalls, Burundi": 850,

    "Lalibela Wonders, Ethiopia": 1200,
    "Simien Mountains, Ethiopia": 1100,
    "Addis Ababa, Ethiopia": 700,
    "Kaffa, Ethiopia": 350

};

const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
 
//readonly inputs for payment page
 

const imageCard = document.getElementsByClassName("image-content")[0];


//destination images for payment page
const destinationImages={
     
    "Indian Ocean, Kenya":"img/7366571b50b4283a29856b985c9909a6.jpg",
    "Maasai Mara, Kenya":"img/d80d0fa3a9165f28003eb602b946ab51.jpg",
    "Nairobi, Kenya":"img/7a8854e29fae7e2c75f865c8cc35ab1b.jpg",
    "Mount Kenya":"img/pexels-tejas-kamble-715220277-34731910.jpg ",

    "Zanzibar, Tanzania":"img/c452fda6128ac82f95dfca42c27504f2.jpg",
    "Serengeti Culture":"img/f33bd47bdf4ffb90adb422299fa1ee5f.jpg",
    "Serengeti National Park":"img/fa025c7189d3be96222a7a5d3167d3a5.jpg",
    "Mt. Kilimanjaro, Tanzania":"img/f99e2fdce5cee014a440d0ee3eedce76.jpg",

    "Rwenzori Mountains, Uganda":"img/663c60ba3eed5e4464a9388afbfe479a.jpg",
    "Queen Elizabeth National Park":"img/131ba06e4a788cc16736fbce77bddb28.jpg",
    "River Nile, Uganda":"img/61021305c10266c8187070ee33523881.jpg",
    "Mgahinga Gorilla National Park":"img/a851a155910cf89acc36f7598a83ee84.jpg",

    "Nyungwe Forest National Park":"img/08255c9e53ebfb367b9090daf4b3911a.jpg",
    "Akagera Wildlife, Rwanda":"img/ff538a228e3a8956fe5cd34c15c5a55f.jpg",
    "Lake Kivu, Rwanda":"img/51a9a84199c37fc7ade67a32a8b6df39.jpg",
    "Kigali City, Rwanda":"img/4836d087cd180301fe40578f905e51c6.jpg",

    "Lake Tanganyika, Burundi":"img/87c76bff887fef75e382ab2cababd465.jpg",
    "Kibira Forest, Burundi":"img/68eb9129e6b4a3761262010e3cddfba6.jpg",
    "Kibira Culture, Burundi":"img/8dff68ef01821ff5a47705ad5baaf09a.jpg",
    "Karera Waterfalls, Burundi":"img/5b3abb1e6089e3756e86c1e72c7c996f.jpg",

    "Lalibela Wonders, Ethiopia":"img/feabdbd7ed3fd59843169e3f50a04dc5.jpg",
    "Simien Mountains, Ethiopia":"img/c4f8883f2fd479462ed631ad8eb4618d.jpg",
    "Addis Ababa, Ethiopia":"img/251d8f003a43c0d71db5297d948c680f.jpg",
    "Kaffa, Ethiopia":"img/21c56dbfd1e847ebdc13f191e6069ce7.jpg"
}




//change destination images on payment page
function changeDestinationImages(){

    const destination = locationinput.value;

    if(destinationImages[destination]){
        imageCard.style.backgroundImage = `url(${destinationImages[destination]})`;
    }

}


//open payment page and populate readonly inputs    
 const USD_TO_KES = 129; // update this rate as needed

function openPaymentPage(location, date, guest) {

    changeDestinationImages();
    paymentForm.style.display = "flex";

    const singlePrice = destinationPrices[location];
    const totalAmount = singlePrice * guest;

    // check which payment method is currently active
    const activeBtn = document.querySelector(".payment-btn.available");
    const activeMethod = activeBtn ? activeBtn.getAttribute("data-payment") : "";

    // format the amount string per payment method
 let amountString;

if (activeMethod === "Mpesa") {
    amountString = "Total Ksh: " + (totalAmount * USD_TO_KES).toLocaleString();
} else {
    amountString = "Total Amount: $" + totalAmount;
}
    // set ALL #payAmount inputs (one per card)
    const payAmountInputs = document.querySelectorAll("#payAmount");
    payAmountInputs.forEach(input => {
        input.value = amountString;
    });

    // format the date nicely
    const fullDate = new Date(date);
    const day = fullDate.getDate();
    const month = months[fullDate.getMonth()];
    const year = fullDate.getFullYear();
    const beautifulDate = `${month} ${day}, ${year}`;

    // format guests
    const guestText = guest < 2 ? guest + " Guest" : guest + " Guests";

    //  Mastercard 
    document.getElementById("payLocation").value = location;
    document.getElementById("payDate").value = beautifulDate;
    document.getElementById("payGuests").value = guestText;

    // PayPal 
    document.getElementById("payLocationPaypal").value = location;
    document.getElementById("payDatePaypal").value = beautifulDate;
    document.getElementById("payGuestsPaypal").value = guestText;

    // Visa
    document.getElementById("payLocationVisa").value = location;
    document.getElementById("payDateVisa").value = beautifulDate;
    document.getElementById("payGuestsVisa").value = guestText;

    // M-Pesa 
    document.getElementById("payLocationMpesa").value = location;
    document.getElementById("payDateMpesa").value = beautifulDate;
    document.getElementById("payGuestsMpesa").value = guestText;

    // Image overlay
    document.getElementById("payLocationOver").value = location;
    document.getElementById("payDateOverlay").value = beautifulDate;
    document.getElementById("payGuestsOverlay").value = guestText;
}

function setLabelError(inputId, labelId ,message){

const label=document.getElementById(labelId);
const input= document.getElementById(inputId);

label.style.color = "red";
input.style.borderBottom = "3px solid red";
input.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.861)";
label.textContent = message;

}

function removeLabelError(inputId, labelId ,message){

const input = document.getElementById(inputId);
const label = document.getElementById(labelId)

label.style.color=""
input.style.borderBottom=""
label.textContent = message
input.style.boxShadow = "0 0 5px rgba(21, 255, 0, 0.86)";


}

//Master card

function validMasterCard(){

let valid = true;

//cardholder.

const cardHolder = document.getElementById("cardholder").value.trim();

const namePattern = /^[A-Za-z\s'-]{4,26}$/;

if(cardHolder === ""){
 setLabelError(
    "cardholder",
     "cardholderlabel",
     "Enter card-holder name"
     );

   valid = false;
}

else if(!namePattern.test(cardHolder)){
     setLabelError(
    "cardholder",
     "cardholderlabel",
     "invalid cardholder name"
     );

  valid = false;
}
  else{
    removeLabelError(
  "cardholder",
  "cardholderlabel",
  "Cardholder"

    );


}

//cardnumber.

const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");

const pattern = /^\d{16}$/;

if(cardNumber ===""){
 setLabelError(
    "cardNumber",
    "cardnumberlabel",
    "Enter card-number"
   )
   valid = false;
}

else if(!pattern.test(cardNumber)){
   setLabelError(
    "cardNumber",
    "cardnumberlabel",
    "invalid card-number"
   )
   valid = false;
}
else{
   removeLabelError(
   "cardNumber",
   "cardnumberlabel",
   "card number"
   );

}

//expiary date

const expDate = document.getElementById("expInput").value;

const expiaryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

if(expDate ===""){
setLabelError(
    "expInput",
    "expdatelabel",
    "Enter exp date"
    );

    valid = false;
}
else if(!expiaryPattern.test(expDate)){
    setLabelError(
    "expInput",
    "expdatelabel",
    "invalid exp date"
    );

    valid = false;
}
else{
    removeLabelError(
    "expInput",
    "expdatelabel",
    "Expiration date"
    )

}


//cvv

const cvv = document.getElementById("cvv").value;

const cvvPattern =  /^\d{3,4}$/;

if(cvv===""){
setLabelError(
     "cvv",
     "cvvlabel",
     "Enter cvv"
    );
}
else if(!cvvPattern.test(cvv)){
 
    setLabelError(
     "cvv",
     "cvvlabel",
     "invalid cvv"
    );
}
  else{
    removeLabelError(
      "cvv",
     "cvvlabel",
     "cvv"
    );
  
}
 if (valid) {

        const payBtn = document.getElementsByClassName("paye")[0];

        payBtn.innerHTML = "Processing...";

        payBtn.disabled = true;



            window.location.href = "payment.html";

        
    }

}

//paypal

function validpaypal(){
    

let valid = true;

//Email
const paypalEmail = document.getElementById("paypalEmail").value.trim();

const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(paypalEmail === ""){

    setLabelError(
   "paypalEmail",
   "paypallabel",
   "pliz enter email"

    );

    valid = false;
}

else if(!emailPattern.test(paypalEmail)){
     
 setLabelError(
   "paypalEmail",
   "paypallabel",
   "invalid Email"
    );

    valid = false;
}

else{
removeLabelError(

  "paypalEmail",
   "paypallabel",
   "paypal Email"

    );

}

//password

const passwordPaypaal = document.getElementById("password").value.trim();

const passwordPattern =  /^.{6,}$/;

if(passwordPaypaal === ""){
 setLabelError(
  "password",
  "passwordlabel",
  "pliz enter password"

 );

  value = false;

}
else if (!passwordPattern.test(passwordPaypaal)){
  setLabelError(
    "password",
  "passwordlabel",
  "Password must be at least 6 characters"

  );

  value = "false";
}
else{
    removeLabelError(
  "password",
  "passwordlabel",
  "Password"
    )

}

 if (valid) {

        const payBtn = document.getElementsByClassName("paye")[0];

        payBtn.innerHTML = "Processing...";

        payBtn.disabled = true;



            window.location.href = "payment.html";
    }

}

//visa card

function validVisaCard(){

let valid = true;

//cardholder.

const cardholder = document.getElementById("cardHolder").value.trim();

const namePattern = /^[A-Za-z\s'-]{4,26}$/;

 
 if(cardholder === ""){

 setLabelError(
    "cardHolder",
     "cardHolderlabel",
     "Enter cardholder name"
     );

  valid = false;
 
 }
else if(!namePattern.test(cardholder)){
     setLabelError(
    "cardHolder",
     "cardHolderlabel",
     "invalid cardholder name"
     );

  valid = false;
}
  else{
    removeLabelError(
  "cardHolder",
  "cardHolderlabel",
  "Cardholder"

    );


}

//cardnumber.

const cardnumber = document.getElementById("cardnumber").value.replace(/\s/g, "");

const pattern = /^\d{16}$/;

if(cardnumber === ""){
   setLabelError(
    "cardnumber",
    "cardNumberlabel",
    "Enter card-number"
   )
   valid = false;
}
else if(!pattern.test(cardnumber)){
   setLabelError(
    "cardnumber",
    "cardNumberlabel",
    "invalid card-number"
   )
   valid = false;
}
else{
   removeLabelError(
   "cardnumber",
   "cardNumberlabel",
   "card number"
   );

}

//expiary date

const expDate = document.getElementById("expinput").value;

const expiaryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

if(expDate === ""){
    setLabelError(
    "expinput",
    "expdateLabel",
    "Enter expiration-date"
    );

    valid = false;
}
else if(!expiaryPattern.test(expDate)){
    setLabelError(
    "expinput",
    "expdateLabel",
    "invalid exp date"
    );

    valid = false;
}
else{
    removeLabelError(
    "expinput",
    "expdateLabel",
    "Expiration date"
    )

}


//cvv

const cvV = document.getElementById("cvV").value;

const cvvPattern =  /^\d{3,4}$/;

if(cvV ===""){
 
    setLabelError(
     "cvV",
     "cvvLabel",
     "Enter cvv"
    );
}
else if(!cvvPattern.test(cvV)){
 
    setLabelError(
     "cvV",
     "cvvLabel",
     "invalid cvv"
    );
}
  else{
    removeLabelError(
      "cvV",
     "cvvLabel",
     "cvv"
    );
  
}
 if (valid) {

        const payBtn = document.getElementsByClassName("paye")[0];

        payBtn.innerHTML = "Processing...";

        payBtn.disabled = true;



            window.location.href = "payment.html";

        
    }

}

//Mpesa 
 
function validMpesaPrompt() {

    let valid = true;

    const phoneNumber = document.getElementById("phone").value.trim();

    const phonePattern = /^(07\d{8}|01\d{8}|\+254\d{9})$/;

    if (phoneNumber === "") {

        setLabelError(
            "phone",
            "phonelabel",
            "Enter phone number"
        );

        valid = false;

    }

    else if (!phonePattern.test(phoneNumber)) {

        setLabelError(
            "phone",
            "phonelabel",
            "Invalid phone number"
        );

        valid = false;

    }

    else {

        removeLabelError(
            "phone",
            "phonelabel",
            "Phone number"
        );

    }

    if (valid) {

        const payBtn = document.getElementsByClassName("paye")[0];

        payBtn.innerHTML = "Processing...";

        payBtn.disabled = true;



            window.location.href = "payment.html";

        
    }

}



function closePaymentPage(){
paymentForm.style.display = "none";
}


































