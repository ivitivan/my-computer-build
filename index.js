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
    price: 25710,
    bought: true
  },
  {
    type: 'graphics',
    name: 'Radeon RX480',
    bought: true
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
    type: 'ssd',
    name: 'Samsung EVO 850 500gb',
    bought: true,
  },
  {
    type: 'ssd',
    name: 'Samsung EVO 850 500gb',
    bought: true,
  },
  {
    type: 'monitor',
    name: 'DELL 2516D',
    bought: true,
  },
  {
    type: 'case',
    name: 'NZXT S340',
    bought: true,
  },
  {
    type: 'cooler',
    name: 'Noctua NH-U12S',
    price: 5108,
    bought: true,
  }
]

const price = sum(getPrice(values(notBought(rid(parts)))))
console.log(`price`, price);
