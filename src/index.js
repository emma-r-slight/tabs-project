import { tabPanel, container } from './utils'
import { tabNav } from './navigation'
import { homeContent } from './home'
import { menuPage } from './menu'

tabNav()
console.log(tabPanel.firstChild)

homeContent()
menuPage()

function clickEvent() {
  const tabElement = document.getElementById('tab-container')
  tabElement.addEventListener('click', theEvent, false)

  function theEvent(e) {
    if (e.target !== e.currentTarget) {
      let clickedItem = e.target.id
      console.log(clickedItem)
      clickedItem === 'menu-tab'
        ? ((document.getElementById('home').style.display = 'none'),
          (document.getElementById('menu').style.display = 'flex'))
        : ((document.getElementById('menu').style.display = 'none'),
          (document.getElementById('home').style.display = 'flex'))
    }
    e.stopPropagation()
  }
}

clickEvent()
