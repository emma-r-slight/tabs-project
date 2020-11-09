const container = document.getElementById('container')
container.classList.add('container')
const content = document.createElement('div')
content.id = 'content'
const tabPanel = document.createElement('div')
tabPanel.classList.add('tab-panel-container')

const addContent = (parentElement, element, addId, addClass, text) => {
  const elementNode = document.createElement(element)
  const textNode = document.createTextNode(text)
  if (addId !== null) {
    elementNode.id = addId
  }
  if (addClass !== null) {
    elementNode.className = addClass
  }

  elementNode.appendChild(textNode)
  parentElement.appendChild(elementNode)
}

export { addContent, container, content, tabPanel }
