const menuToggler = document.querySelector('.menu-toggler')
const menuTogglerClose = document.querySelector('.menu-toggler-close')
const navMenu = document.querySelector('.nav-menu')
const navBadges = document.querySelector('.nav-badges')

menuToggler.addEventListener('click', () => {
  navMenu.classList.add('active')
  navBadges.classList.add('active')
})

menuTogglerClose.addEventListener('click', () => {
  navMenu.classList.remove('active')
  navBadges.classList.remove('active')
})
