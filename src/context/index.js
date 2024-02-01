import React, { createContext, useContext, useState } from "react";

// Step 1: Create Context
const CounterContext = createContext();

export default function CounterProvider({ children }) {
  // Step 2: Define State
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Step 3: Provide Context
  return (
    <CounterContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  // Step 4: Consume Context
  return useContext(CounterContext);
}
