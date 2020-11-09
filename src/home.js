import { addContent, elementContent, container } from './utils'
import image from '../assets/*.png'

const HomeContent = (() => {
  const tabPanel = document.createElement('div')
  tabPanel.classList.add('tab-panel')
  tabPanel.id = 'home'

  addContent(tabPanel, 'h1', null, 'title', 'Maunganui')
  addContent(tabPanel, 'h1', null, 'title', 'Burgers')

  const myImage = document.createElement('img')
  myImage.classList.add('slide-in-elliptic-top-fwd')
  myImage.src = image.hamburger
  tabPanel.appendChild(myImage)

  return { tabPanel }
})()

export { HomeContent }
