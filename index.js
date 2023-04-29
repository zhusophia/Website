function displaydiv(idname, replacename) {
    var div = document.getElementById(idname)
    var replace = document.getElementById(replacename)
    replace.style.display = 'none';
    div.style.display = 'block';
}

function removediv(divname) {
    var remove = document.getElementById(divname)
    remove.style.opacity = 0;
}