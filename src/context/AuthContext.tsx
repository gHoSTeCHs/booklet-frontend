import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
	id: string;
	email: string;
	name: string;
}

interface AuthContextType {
	currentUser: User | null;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string, name: string) => Promise<void>;
	logout: () => void;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setCurrentUser(JSON.parse(storedUser));
		}
		setIsLoading(false);
	}, []);

	const login = async (email: string) => {
		setIsLoading(true);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		const userData: User = {
			id: '123',
			email,
			name: 'John Doe',
		};

		setCurrentUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));
		setIsLoading(false);
	};

	const register = async (email: string, _password: string, name: string) => {
		setIsLoading(true);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		const userData: User = {
			id: '123',
			email,
			name,
		};

		setCurrentUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));
		setIsLoading(false);
	};

	const logout = () => {
		setCurrentUser(null);
		localStorage.removeItem('user');
	};

	const value = {
		currentUser,
		login,
		register,
		logout,
		isLoading,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
