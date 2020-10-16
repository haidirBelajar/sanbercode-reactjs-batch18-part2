import React, { useEffect, useState,useContext } from 'react';
import {ThemeProvider, ThemeContext} from '../Tugas15/theme-context'
import {BuahProvider} from './buahContext';
import ListBuah from './buahList'
import FormBUah from './buahForm';

const Layout = () =>{

    const[theme]= useContext(ThemeContext);

    return(
        <div className={theme}>
            <ListBuah/>
            <FormBUah />
        </div>
    )
}

export default Layout