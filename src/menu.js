import { addContent, elementContent, container } from './utils'

const burgerMenu = {
  title: 'BEEF',
  description: 'Comes with Free Range NZ Angus beef patty',
  items: [
    {
      name: 'GREAT AMERICAN',
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

const MenuPage = (() => {
  const tabMenu = elementContent
  tabMenu.classList.add('tab-panel')
  tabMenu.id = 'menu'

  addContent(tabMenu, 'h1', null, 'title', 'Menu')
  addContent(tabMenu, 'h3', 'menu-title', null, burgerMenu.title)
  addContent(
    tabMenu,
    'blockquote',
    'menu-description',
    null,
    burgerMenu.description
  )
  burgerMenu.items.forEach((burger) => {
    addContent(tabMenu, 'h5', null, 'burgerName', burger.name)
    addContent(tabMenu, 'p', null, 'description', burger.description)
    addContent(tabMenu, 'p', null, 'type', burger.type)
    addContent(tabMenu, 'p', null, 'price', burger.price)
  })
  return { tabMenu }
})()
