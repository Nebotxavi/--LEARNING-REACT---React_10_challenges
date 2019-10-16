import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = React.useState();
  const [location, setLocation] = React.useState();

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
