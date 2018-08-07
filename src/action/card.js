import uuid from 'uuid/v4';

// doing a different style of exporting this time around
export const createCard = ({ title, categoryId, price }) => ({
  type: 'CARD_CREATE',
  payload: {
    title,
    categoryId,
    price,
    id: uuid(),
  },
});

export const updateCard = card => ({
  type: 'CARD_UPDATE',
  payload: card,
});

export const removeCard = card => ({
  type: 'CARD_REMOVE',
  payload: card,
});
