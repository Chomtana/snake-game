import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [foodIndex, setFoodIndex] = useState("apple");
    const [snakeColor, setSnakeColor] = useState("#00ff00");
    const [foodAmount, setFoodAmount] = useState(1);
    const [tickTime, setTickTime] = useState(150);
    const [AIMode, setAIMode] = useState(false);
    const [inmortalMode, setInmortalMode] = useState(false);

    return (
        <SettingsContext.Provider
            value={{
                foodIndex,
                setFoodIndex,
                snakeColor,
                setSnakeColor,
                foodAmount,
                setFoodAmount,
                tickTime,
                setTickTime,
                AIMode,
                setAIMode,
                inmortalMode,
                setInmortalMode
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);