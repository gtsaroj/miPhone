import React, { useState } from "react";
import { useFetcher } from "react-router-dom";

const createContext = React.createContext({
  mode: "",
  setMode: () => {},
});

export const useThemeContext = () => {
  return React.useContext(createContext);
};

export const ContextProvider = (props) => {
  const persistentMode = localStorage.getItem("mode");

  const [themeMode, setThemeMode] = useState(persistentMode);

  const hanldeTheme = (theme) => {
    setThemeMode(theme);
    localStorage.setItem("mode", theme);
  };
  React.useEffect(() => {
    if (themeMode || persistentMode) {
      document
        .querySelector("body")
        .setAttribute("class", themeMode, persistentMode);
    }
  }, [persistentMode, themeMode]);

  return (
    <createContext.Provider value={{ mode: themeMode, setMode: hanldeTheme }}>
      {props.children}
    </createContext.Provider>
  );
};
