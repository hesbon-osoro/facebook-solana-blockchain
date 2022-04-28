import { createContext } from 'react';

export const FacebookContext = createContext();

export const FacebookProvider = ({ children }) => {
	const requestToCreateUserProfile = async (walletAddress, name) => {
		try {
			await fetch(`/api/createUser`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ userWalletAddress: walletAddress, name: name }),
			});
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<FaceboookContect.Provider value={{ requestToCreateUserProfile }}>
			{children}
		</FaceboookContect.Provider>
	);
};
