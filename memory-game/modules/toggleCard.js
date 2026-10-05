import { body } from './createItems.js';

export function openCard() {
  const board = body.querySelector('.board');
  if (!board) return;
  
  board.addEventListener('click', function(e) {
    const card = e.target.closest('.card-wrapper');
    if (!card) return;
    
    card.classList.add('card-open');
  });
}

function closeCard(card) {
  card.classList.remove('card-open');
} 
