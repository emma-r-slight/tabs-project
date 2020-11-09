import { addContent, tabPanel, container } from './utils'
import image from '../assets/*.png'

export const homeContent = () => {
  addContent(tabPanel, 'h1', null, 'title', 'Maunganui')
  addContent(tabPanel, 'h1', null, 'title', 'Burgers')

  const myImage = document.createElement('img')
  myImage.classList.add('slide-in-elliptic-top-fwd')
  myImage.src = image.hamburger
  tabPanel.appendChild(myImage)
}
