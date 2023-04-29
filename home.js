const toggle = document.getElementsByClassName('navbar')[0]
const links = document.getElementsByClassName('subpage')[0]

toggle.addEventListener('click', () => {
    links.classList.toggle('active')
})