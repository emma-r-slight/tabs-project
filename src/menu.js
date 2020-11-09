import { addContent, tabPanel } from './utils'

const burgerMenu = {
  title: 'Beef Burgers  ',
  description: 'Comes with Free Range NZ Angus beef patty',
  items: [
    {
      name: 'Great American',
      description:
        'Beef patty, kosher dill pickle, American mustard, double cheese, ketchup, salad, mayo on a sesame seed bun',
      type: 'GRAND',
      price: '$16.00',
    },

    {
      name: 'California',
      description:
        'Beef patty, bacon, avocado, salad, mayo, relish on a sesame seed bun',
      type: 'GRAND',
      price: '$15.60',
      type2: 'PETITE',
      price2: '$13.60',
    },

    {
      name: 'Wisconsin w/ Cheese',
      description:
        'Beef patty, colby cheese, salad, mayo, relish on a sesame seed bun',
      type: 'GRAND',
      price: ' $12.60',
      type2: 'PETITE',
      price2: '$10.60',
    },

    {
      name: 'Kiwi Classic',
      description:
        'Beef patty, bacon, egg, colby cheese, beetroot relish, salad, mayo, relish on a sesame seed bun',
      type: 'GRAND',
      price: '$17.60',
      type2: 'PETITE',
      price: '$15.60',
    },

    {
      name: 'Full Monty',
      description:
        'Double beef patty, bacon, colby cheese, garlic mayo, salad, relish on a sesame seed bun',
      type: 'GRAND',
      price: ' $18.60',
    },

    {
      name: 'BBQ Beef & Bacon',
      description:
        'Beef patty, bacon, onion rings, cheddar, BBQ sauce, salad, mayo, relish on a sesame seed bun',
      type: 'GRAND',
      price: ' $17.00',
      type2: 'PETITE',
      price2: '$15.00',
    },
    {
      name: 'Beef & Blue Cheese',
      description:
        'Beef patty, blue cheese sauce, caramelised onions, salad, relish on a sesame seed bun',
      type: 'GRAND',
      price: ' $14.60',
      type2: 'PETITE',
      price2: '$12.60',
    },
  ],
}

export const menuPage = () => {
  const menuDiv = document.createElement('div')
  menuDiv.id = 'menu'
  menuDiv.classList.add('text-focus-in')
  menuDiv.classList.add('tab-content')
  tabPanel.appendChild(menuDiv)

  addContent(menuDiv, 'h1', null, 'title', 'Menu')
  addContent(menuDiv, 'h2', 'menuDiv-title', 'title', burgerMenu.title)
  addContent(
    menuDiv,
    'blockquote',
    'menuDiv-description',
    null,
    burgerMenu.description
  )
  burgerMenu.items.forEach((burger, index) => {
    console.log('burger')
    addContent(menuDiv, 'h4', null, 'burgerName', burger.name)
    addContent(menuDiv, 'p', null, 'description', burger.description)
    addContent(menuDiv, 'p', null, 'price', `${burger.type} : ${burger.price}`)
    if ('type2' in burger)
      addContent(
        menuDiv,
        'p',
        null,
        'price',
        `${burger.type2} : ${burger.price2}`
      )
  })
}
