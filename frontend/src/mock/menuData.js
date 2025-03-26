// src/mock/menuData.js

import danishImg from '../assets/menu images/danish.jpg';
import scoopImg from '../assets/menu images/scoop.jpg';
import shakeImg from '../assets/menu images/shake.jpg';
import trufflecakeImg from '../assets/menu images/trufflecake.jpg';

const mockData = [
  {
    id: 1,
    name: 'Chocolate Truffle Cake',
    description: 'A rich, velvety chocolate cake for all the chocolate lovers.',
    price: 1500,
    image: danishImg,  // Use the imported image
  },
  {
    id: 2,
    name: 'Vanilla Almond Scoop',
    description: 'A creamy, nutty ice cream scoop with a hint of vanilla.',
    price: 500,
    image: scoopImg,  // Use the imported image
  },
  {
    id: 3,
    name: 'Strawberry Danish',
    description: 'Flaky and buttery pastry filled with sweet strawberry jam.',
    price: 700,
    image: shakeImg,  // Use the imported image
  },
  {
    id: 4,
    name: 'Classic Danish',
    description: 'Perfectly flaky and filled with rich custard.',
    price: 600,
    image: danishImg,  // Use the imported image
  },
  {
    id: 5,
    name: 'Mixed Berry Muffin',
    description: 'Soft and fluffy muffin packed with mixed berries.',
    price: 350,
    image: trufflecakeImg,  // Use the imported image
  },
];

export default mockData;
