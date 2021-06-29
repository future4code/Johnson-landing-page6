const menuResponsive = document.getElementsByClassName('menu-responsive')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menuResponsive.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})