import { useReducer, createContext, useContext } from 'react';
import CardReducer from './CardReducer';

const CardContext = createContext();
const CardContextDispatcher = createContext();

const initialState = {
	card: [],
	total: 0,
};

const CardProvider = ({ children }) => {
	const [card, dispatch] = useReducer(CardReducer, initialState);

	return (
		<CardContext.Provider value={card}>
			<CardContextDispatcher.Provider value={dispatch}>
				{children}
			</CardContextDispatcher.Provider>
		</CardContext.Provider>
	);
};

export default CardProvider;

export const useCard = () => useContext(CardContext);
export const useCardActions = () => useContext(CardContextDispatcher);
