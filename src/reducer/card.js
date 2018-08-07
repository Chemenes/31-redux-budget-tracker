const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let categoryCards;
  let updatedCards;
  let updatedState;

  switch (type) {
    // I have switch cases for SECTION in this card reducer because we need to change our state if someone wants to modify a section that has cards, (i.e. create or delete the section), we MUST do something to modify the cards state to keep our Redux store consistent. For example, if someone deletes a section, we must also delete the array of cards associated with that section
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      // we delete the id property off this staet
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line
      categoryCards = state[categoryId];
      updatedCards = [...categoryCards, payload];
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_UPDATE':
      categoryId = payload.categoryId;// eslint-disable-line
      categoryCards = state[categoryId];
      updatedCards = categoryCards.map(card => (card.id === payload.id ? payload : card));
      return { ...state, [categoryId]: updatedCards };
    case 'CARD_REMOVE':
      categoryId = payload.categoryId;// eslint-disable-line
      categoryCards = state[categoryId];
      updatedCards = categoryCards.filter(card => card.id !== payload.id);
      return { ...state, [categoryId]: updatedCards };
    default:
      return state;
  }
};
