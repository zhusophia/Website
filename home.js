const hamburger = document.querySelector(".hamburger");
const main = document.querySelector(".main");
const wrapper = document.querySelector(".wrapper");
const aniwrapper = document.getElementById("wrapper");
var check = false;
var count = 0;

hamburger.addEventListener("click", () => {
    if(!check && count == 0) {
        aniwrapper.style.visibility="active";
        hamburger.classList.add("active");
        wrapper.classList.add("active");
        main.classList.add("active")
        check = true;
        console.log("check false 2");
    } else if (!check) {
        aniwrapper.style.visibility="active";
      //  wrapper.style.animation="fadein 0.4s linear";
        wrapper.classList.remove("fade");
        hamburger.classList.add("active");
        wrapper.classList.add("active");
        main.classList.add("active");
        check = true;
        console.log("check false");
        count++;
    } else {
        hamburger.classList.remove("active");
        main.classList.remove("active");
        wrapper.classList.remove("active");
        wrapper.classList.add("fade");
        aniwrapper.style.visibility="visible";
        check = false;
        console.log("check true");
        count++;

    }

   
})





