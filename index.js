import {
  map,
  path,
  values,
  reduce,
  filter
} from 'ramda'

const getPrice = map(path(['price']))
const sum = reduce((x, y) => x + y, 0)
const rid = filter(part => !part.skip)
const notBought = filter(part => !part.bought)

const parts = [
  {
    type: 'cpu',
    name: 'Intel i7-6700K',
    price: 25710
  },
  {
    type: 'graphics',
    name: 'Sapphire Radeon R9 390X',
    price: 49190,
    skip: true
  },
  {
    type: 'power',
    name: 'be quiet! Dark Power Pro 11 850W',
    price: 18382,
    bought: true
  },
  {
    type: 'motherboard',
    name: 'ASRock Fatal1ty Z170 Gaming K4',
    price: 9280,
    bought: true
  },
  {
    type: 'ram',
    name: 'CMK16GX4M2B3200C16',
    price: 9650,
    bought: true
  },
  {
    type: 'ssd',
    name: 'SDSSDHII-480G-G25',
    price: 9160,
    bought: true
  },
  {
    type: 'monitor',
    name: 'ASUS MG279Q',
    price: 52705,
    skip: true
  },
  {
    type: 'case',
    name: '',
    price: 7800,
    skip: true
  },
  {
    type: 'cooler',
    name: 'Noctua NH-U12S',
    price: 5108,
    bought: true
  }
]

const price = sum(getPrice(values(notBought(rid(parts)))))
console.log(`price`, price);
