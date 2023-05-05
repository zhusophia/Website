const hamburger = document.querySelector(".hamburger");
const wrapper = document.querySelector(".wrapper");
const phone = document.querySelector(".phone");
const aniwrapper = document.getElementById("wrapper");
var check = false;
var count = 0;

hamburger.addEventListener("click", () => {
    if(!check && count == 0) {
        aniwrapper.style.visibility="active";
        hamburger.classList.add("active");
        wrapper.classList.add("active");
        phone.classList.add("active");
      
        check = true;
    } else if (!check) {
        aniwrapper.style.visibility="active";
        wrapper.classList.remove("fade");
        hamburger.classList.add("active");
        wrapper.classList.add("active");
        phone.classList.add("active");
     
        check = true;
        count++;
    } else {
        hamburger.classList.remove("active");
        wrapper.classList.remove("active");
        phone.classList.remove("active");

        wrapper.classList.add("fade");
        aniwrapper.style.visibility="visible";
        check = false;
        count++;
    }
})