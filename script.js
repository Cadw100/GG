console.log("Which Fry Cook are you");

let NonchalantButton = document.querySelector(".NonchalantButton");
let JokeyButton = document.querySelector(".JokeyButton");
let SquidwardButton = document.querySelector(".SquidwardButton");
let JimButton = document.querySelector(".JimButton");
let SpongebobButton = document.querySelector(".SpongebobButton");
let PatrickButton = document.querySelector(".PatrickButton");

let ChillButton = document.querySelector(".ChillButton");
let HateButton = document.querySelector(".HateButton");
let LazyAndBoringButton = document.querySelector(".LazyAndBoringButton");
let FunAndEnergeticButton = document.querySelector(".FunAndEnergeticButton");

let Spongebobimg = document.querySelector(".Spongebobimg");
let Patrickimg = document.querySelector(".Patrickimg");
let Squidwardimg = document.querySelector(".Squidwardimg");
let Jimimg = document.querySelector(".Jimimg");

let Chillimg = document.querySelector(".Chillimg");
let Hateimg = document.querySelector(".Hateimg");
let LazyAndBoringimg = document.querySelector(".LazyAndBoringimg");
let FunAndEnergeticimg = document.querySelector(".FunAndEnergeticimg");

// Initially hide all buttons and images except the first two options
SquidwardButton.style.display = "none";
JimButton.style.display = "none";
SpongebobButton.style.display = "none";
PatrickButton.style.display = "none";
ChillButton.style.display = "none";
HateButton.style.display = "none";
LazyAndBoringButton.style.display = "none";
FunAndEnergeticButton.style.display = "none";

Spongebobimg.style.display = "none";
Patrickimg.style.display = "none";
Squidwardimg.style.display = "none";
Jimimg.style.display = "none";
Chillimg.style.display = "none";
Hateimg.style.display = "none";
LazyAndBoringimg.style.display = "none"; 
FunAndEnergeticimg.style.display = "none"; 

// Initial Button Click Events
NonchalantButton.addEventListener('click', function() {
    console.log("Nonchalant Button Clicked");
    
    // Hide Nonchalant and Jokey Buttons after selection
    NonchalantButton.style.display = "none";
    JokeyButton.style.display = "none";
    
    // Show options for Nonchalant (Chill and Hate)
    ChillButton.style.display = "block";
    HateButton.style.display = "block";
    
    // Hide images of other characters
    Spongebobimg.style.display = "none";
    Patrickimg.style.display = "none";
    Squidwardimg.style.display = "none";
    Jimimg.style.display = "none";
    
    // Hide Lazy and Fun images until clicked
    LazyAndBoringimg.style.display = "none"; 
    FunAndEnergeticimg.style.display = "none"; 
});


JokeyButton.addEventListener('click', function() {
    console.log("Jokey Button Clicked");

    
    NonchalantButton.style.display = "none";
    JokeyButton.style.display = "none";
    
    
    LazyAndBoringButton.style.display = "block";
    FunAndEnergeticButton.style.display = "block";
    
    
    Squidwardimg.style.display = "none";
    Jimimg.style.display = "none";
    
    
    LazyAndBoringimg.style.display = "none"; 
    FunAndEnergeticimg.style.display = "none";
});


ChillButton.addEventListener('click', function() {
    console.log("Chill Button Clicked");
    
    Chillimg.style.display = "block";  
    Hateimg.style.display = "none";   
    Spongebobimg.style.display = "none";       
    Patrickimg.style.display = "none";         
    Squidwardimg.style.display = "none";       
    Jimimg.style.display = "none";             
});

HateButton.addEventListener('click', function() {
    console.log("Hate Button Clicked");
   
    Hateimg.style.display = "block";  
    Chillimg.style.display = "none";   
    Spongebobimg.style.display = "none";       
    Patrickimg.style.display = "none";         
    Squidwardimg.style.display = "none";       
    Jimimg.style.display = "none";             
});


LazyAndBoringButton.addEventListener('click', function() {
    console.log("Lazy and Boring Button Clicked");
   
    LazyAndBoringimg.style.display = "block";  
    FunAndEnergeticimg.style.display = "none"; 
    Spongebobimg.style.display = "none";       
    Patrickimg.style.display = "none";         
    Squidwardimg.style.display = "none";       
    Jimimg.style.display = "none";             
});

FunAndEnergeticButton.addEventListener('click', function() {
    console.log("Fun and Energetic Button Clicked");
    
    FunAndEnergeticimg.style.display = "block";  
    LazyAndBoringimg.style.display = "none";
    Spongebobimg.style.display = "none";         
    Patrickimg.style.display = "none";           
    Squidwardimg.style.display = "none";         
    Jimimg.style.display = "none";               
});
