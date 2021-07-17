const menuResponsive = document.getElementsByClassName('menu-responsive')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    if(event.type ==='click') event.preventDefault()
    const nav = document.querySelector('.navbar-links')
    nav.classList.toggle('active')
}


menuResponsive.addEventListener('click', toggleMenu)
menuResponsive.addEventListener('touchstart', toggleMenu)