import { addContent, tabPanel, container } from './utils'
import image from '../assets/*.png'

export const homeContent = () => {
  const homeDiv = document.createElement('div')
  homeDiv.id = 'home'

  addContent(homeDiv, 'h1', null, 'title', 'Maunganui')
  addContent(homeDiv, 'h1', null, 'title', 'Burgers')

  const myImage = document.createElement('img')
  myImage.classList.add('slide-in-elliptic-top-fwd')
  myImage.src = image.hamburger
  homeDiv.appendChild(myImage)
  tabPanel.appendChild(homeDiv)
}
