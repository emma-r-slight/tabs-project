import { addContent, container, elementContent, flexContainer } from './utils'
import { homeContent } from './home'
import home from 'home'

const tabNav = () => {
  const tabBtn = document.createElement('div')
  tabBtn.classList.add('tab-container')
  elementContent.appendChild(tabBtn)
  container.appendChild(elementContent)
  addContent(tabBtn, 'p', 'home-tab', 'tab-btn', 'Home')
  addContent(tabBtn, 'p', 'menu-tab', 'tab-btn', 'Menu')
  addContent(tabBtn, 'p', 'contact-tab', 'tab-btn', 'Contact')
}

export { tabNav }
