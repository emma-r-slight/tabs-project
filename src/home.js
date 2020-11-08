import { addContent, elementContent, container } from './utils'
import image from '../assets/*.png'

const HomeContent = (() => {
  const tabPanel = document.createElement('div')
  tabPanel.classList.add('tab-panel')
  tabPanel.id = 'home'

  addContent(tabPanel, 'h1', 'home', null, 'Maunganui Fish n Chips')

  const myImage = document.createElement('img')
  myImage.src = image.hamburger
  tabPanel.appendChild(myImage)
  return { tabPanel }
})()

export { HomeContent }
