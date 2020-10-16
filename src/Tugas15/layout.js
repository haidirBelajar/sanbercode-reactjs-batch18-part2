import React, { useEffect, useState,useContext } from 'react';
import HeaderNav from './header-nav'
import RouterNav from './router'
import {ThemeProvider, ThemeContext} from './theme-context'

const Layout = () =>{

    const[theme]= useContext(ThemeContext);

    return(
        <div className={theme}>
            <HeaderNav />
            <RouterNav />
        </div>
    )
}

export default Layout