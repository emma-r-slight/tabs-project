import { tabPanel, container } from './utils'
import { tabNav } from './navigation'
import { homeContent } from './home'
import { menuPage } from './menu'

tabNav()
console.log(tabPanel.firstChild)

const clearcontent = () => {
  while (tabPanel.firstChild) tabPanel.removeChild(tabPanel.firstChild)
}

const home = document.getElementById('home-tab')
home.addEventListener('click', () => {
  clearcontent()
  homeContent()
})

const burgerMenu = document.getElementById('menu-tab')

burgerMenu.addEventListener('click', () => {
  clearcontent()
  menuPage()
})
// const homePanel = HomeContent.tabPanel
// container.appendChild(homePanel)
