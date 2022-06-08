const categories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Mexican',
  'Italian',
  'Desserts',
  'Drinks',
]

const scrollElementIntoView = (e) => {
  e.preventDefault()
  document
    .querySelector(`${e.target.getAttribute('href').slice(1)}`)
    .scrollIntoView({ behavior: 'smooth' })
}

const getRandomCategories = () => {
  let found = []
  let randomCount = Math.floor(Math.random() * 6) + 1
  for (let i = 0; i < randomCount; i++) {
    let randomI = Math.floor(Math.random() * 6)
    while (found.includes(categories[randomI])) {
      randomI = Math.floor(Math.random() * 6)
    }
    found.push(categories[randomI])
  }
  return found
}

const getChildrenByOrder = (parent)=>{
    let children = Array.from(parent.children)
    children.sort((a, b)=>{
        return Number(a.style.order) - Number(b.style.order)
    })
    return (children)
}


module.exports.categories = categories
module.exports.scrollElementIntoView = scrollElementIntoView
module.exports.getRandomCategories = getRandomCategories
module.exports.getChildrenByOrder = getChildrenByOrder
