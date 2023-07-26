import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(); // Create the context

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null); // User state

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider, UserContext };
