import { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState(false);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('authState')) || false;
		setAuthState(userData);
	}, []);

	useEffect(() => {
		localStorage.setItem('authState', JSON.stringify(authState));
	}, [authState]);

	return (
		<AuthContext.Provider value={authState}>
			<AuthContextDispatcher.Provider value={setAuthState}>
				{children}
			</AuthContextDispatcher.Provider>
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
