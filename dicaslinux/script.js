let iconMenu = document.querySelector('#icon-menu').addEventListener('click', showMenu)
let backgroundMenu = document.querySelector('#background-menu').addEventListener('click', hideMenu)
let backToTopButton = document.querySelector('#back-to-top-button').addEventListener('click', backToTop)

function showMenu() {
    document.querySelector('#background-menu').style.left = '0'
    document.querySelector('#mobile-menu').style.left = '0'
}

function hideMenu() {
    document.querySelector('#background-menu').style.left = '-100vw'
    document.querySelector('#mobile-menu').style.left = '-280px'
}

function backToTop() {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
}