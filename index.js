var count1 = 0
var count2 = 0

function displaydiv(idname, replacename) {
    var div = document.getElementById(idname)
    var replace = document.getElementById(replacename)
    replace.style.display = 'none';
    div.style.display = 'block';
    count1++;
}

function removediv() {
    document.getElementById('stuck').style.display = 'none'
    var remove = document.getElementById('hello');
    remove.style.display = 'none';
    setInterval(warning2, 6000)
}

function hint() {
    document.getElementById('stuck').style.display = 'block'
}

setInterval(warning1, 4500)

function warning1() {
    if (count1 == 0) {
        hint();
    } 
}


function warning2() {
    if (count2 == 0) {
       hint();
    } 
}

  