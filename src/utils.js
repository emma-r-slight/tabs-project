const container = document.getElementById('container')
const elementContent = document.createElement('div')
elementContent.id = 'elementContent'
const flexContainer = document.createElement('div')
flexContainer.id = 'flexContainer'

const addContent = (parentElement, element, addName, addClass, text) => {
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

export { addContent, container, elementContent, flexContainer }
