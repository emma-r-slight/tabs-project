import { container } from './utils'
const newEl = document.createElement('h1')
const text = document.createTextNode('Hello World')
newEl.appendChild(text)
container.appendChild(newEl)
