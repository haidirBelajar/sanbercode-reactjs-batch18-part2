import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
    const [theme,setTheme] = useState('light')
    

        return (
            <ThemeContext.Provider value={[theme,setTheme]}>
              {props.children}
            </ThemeContext.Provider>
          );
        
}