const CardReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CARD': {
			// clone from card
			const updatedCard = [...state.card];
			const updatedItemIndex = updatedCard.findIndex((item) => item.id === action.payload.id);

			if (updatedItemIndex < 0) {
				updatedCard.push({ ...action.payload, quantity: 1 });
			} else {
				const updatedItem = { ...updatedCard[updatedItemIndex] };
				updatedItem.quantity++;
				updatedCard[updatedItemIndex] = updatedItem;
			}

			return { ...state, card: updatedCard, total: state.total + action.payload.offPrice };
		}

		case 'DECREASE_FROM_CARD': {
			// clone from card
			const updatedCard = [...state.card];
			const updatedItemIndex = updatedCard.findIndex((item) => item.id === action.payload.id);
			const updatedItem = { ...updatedCard[updatedItemIndex] };

			if (updatedItem.quantity === 1) {
				const filterProducts = updatedCard.filter((item) => item.id !== action.payload.id);
				return {
					...state,
					card: filterProducts,
					total: state.total - action.payload.offPrice,
				};
			} else {
				updatedItem.quantity--;
				updatedCard[updatedItemIndex] = updatedItem;
			}

			return { ...state, card: updatedCard, total: state.total - action.payload.offPrice };
		}

		default:
			return state;
	}
};

export default CardReducer;
