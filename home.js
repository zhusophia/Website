const hamburger = document.querySelector(".hamburger");
const main = document.querySelector(".main2");
const wrapper = document.querySelector(".wrapper");
const footer = document.querySelector(".footer");
const aniwrapper = document.getElementById("wrapper");
var check = false;
var count = 0;

var tippossible = [
    "TIP: Keep your hands and feet inside SophLand rides to mitigate the probability of meteor strikes.",
   // "TIP: SophLand is legally responsible for your safety. Sue us!",
   // "TIP: SophLand Sprite is 7.2 milion dollars. A reasonable price, no?",
  //  "FACT: SophLand averages 4.6 trillion monthly visitors!",
 //   "FACT: SophLand has an 100% satisfaction rate (Based off: 1 review by Sophia Zhu).",
  //  "FACT: SophLand has a population of at least 0.",
  //  "FACT: Github servers are currently online!"
];

var randomNumber = Math.floor(Math.random() * tippossible.length);
document.getElementById("tip").innerHTML = tippossible[randomNumber];


hamburger.addEventListener("click", () => {
    if(!check && count == 0) {
        aniwrapper.style.visibility="active";
        hamburger.classList.add("active");
        wrapper.classList.add("active");
        main.classList.add("active")
        footer.classList.add("active")
        check = true;
    } else if (!check) {
        aniwrapper.style.visibility="active";
      //  wrapper.style.animation="fadein 0.4s linear";
        wrapper.classList.remove("fade");
        hamburger.classList.add("active");
        wrapper.classList.add("active");
        footer.classList.add("active")
        main.classList.add("active");
        check = true;
        count++;
    } else {
        hamburger.classList.remove("active");
        main.classList.remove("active");
        wrapper.classList.remove("active");
        footer.classList.remove("active");
        wrapper.classList.add("fade");
        aniwrapper.style.visibility="visible";
        check = false;
        count++;
    }
})







