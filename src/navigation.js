import { addContent, container, content, tabPanel } from './utils'
import { homeContent } from './home'
import home from 'home'

const tabNav = () => {
  const header = document.createElement('header')
  container.appendChild(header)
  addContent(header, 'h1', 'header-nav', null, 'Maunganui Burgers')

  const tabBtn = document.createElement('div')
  tabBtn.classList.add('tab-container')
  header.appendChild(tabBtn)
  addContent(tabBtn, 'p', 'home-tab', 'tab-btn', 'Home')
  addContent(tabBtn, 'p', 'menu-tab', 'tab-btn', 'Menu')
  addContent(tabBtn, 'p', 'contact-tab', 'tab-btn', 'Contact')

  const main = document.createElement('main')
  container.appendChild(main)

  main.appendChild(tabPanel)
}

export { tabNav }
