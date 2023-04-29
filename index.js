function displaydiv(idname, replacename) {
    var div = document.getElementById(idname)
    var replace = document.getElementById(replacename)
  //  let fade1 = document.getElementById(fadename);
    replace.style.display = 'none';
   // fade1.classList.toggle('fade');
    div.style.display = 'block';
}

function removediv(divname) {
    var remove = document.getElementById(divname)
    remove.style.opacity = 0;
}