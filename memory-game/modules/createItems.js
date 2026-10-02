import { imgData } from '../assets/data/data.js';

const body = document.querySelector('.body');

const doubleData = [...imgData, ...imgData];
console.log(doubleData);

function createItem(item, itemClass) {
  const newItem = document.createElement(`${item}`);
  newItem.classList.add(`${itemClass}`);
  return newItem;
}

function createCard(el, board) {
  const cardWrapper = createItem('div', 'wrapper')
  cardWrapper.classList.add('card-wrapper');

  const cardBack = createItem('img', 'card-back');
  cardBack.src = './assets/img/back.png';
  cardBack.alt = 'Card Back';

  const cardFront = createItem('img', 'card-front');
  cardFront.src = el.src;
  cardFront.alt = el.name;
  cardFront.id = el.cardId;

  cardWrapper.append(cardBack, cardFront);
  board.append(cardWrapper);
}

export function init() {
  const header = createItem('header', 'header');
  const headerWrapper = createItem('div', 'wrapper');
  headerWrapper.classList.add('header-wrapper');

  const h1 = createItem('h1', 'heading');
  h1.append('Memory Game');
  h1.classList.add('hidden');

  const btnNew = createItem('button', 'btn');
  btnNew.id = 'btn-new';
  btnNew.append('New Game');

  const btnLead = createItem('button', 'btn');
  btnLead.id = 'btn-lead';
  btnLead.append('Leaderboard');

  const curScore = createItem('p', 'text');
  curScore.append('0 / 8');

  const curStep = createItem('p', 'text');
  curStep.append('0');

  const main = createItem('main', 'main');
  const board = createItem('div', 'board');

  doubleData.forEach(el => createCard(el, board));

  headerWrapper.append(h1, btnNew, curScore, curStep, btnLead);
  header.append(headerWrapper);

  main.append(board);

  body.append(header, main);
}