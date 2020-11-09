import { elementContent, container } from './utils'
import { tabNav } from './navigation'
import { HomeContent } from './home'

tabNav()
const homePanel = HomeContent.tabPanel
container.appendChild(homePanel)
