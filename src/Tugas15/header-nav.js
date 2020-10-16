import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Form from '../Tugas9/appform';
import Buah from '../Tugas10/daftarBuah';
import Waktu from '../Tugas11/tugas11'
import DaftarHarga from '../Tugas12/tugas12'
import DaftarBuah from '../Tugas13/tugas13'
import {ThemeContext} from './theme-context'
import './toogle.css'


const HeaderNav = () => {

const[theme,setTheme]= useContext(ThemeContext);

const handleChangeTheme = () => {
    
    if (theme == 'light') {
        setTheme('dark')
    } else {
        setTheme('light')
    }
}
console.log(theme);
    return(
        <header>
            <div className="header-logo">
                <img src="asdasd.jpg" />
            </div>
            <Route>
                <ul>
                    <li>
                        <Link className="menus" to="">Home</Link>
                    </li>
                    <li>
                        <Link className="menus" to="../Tugas9/appform">Tugas 9</Link>
                    </li><li>
                        <Link className="menus" to="../Tugas10/daftarBuah">Tugas 10</Link>
                    </li><li>
                        <Link className="menus" to="../Tugas11/tugas11">Tugas 11</Link>
                    </li><li>
                        <Link className="menus" to="../Tugas12/tugas12">Tugas 12</Link>
                    </li><li>
                        <Link className="menus" to="../Tugas13/tugas13">Tugas 13</Link>
                    </li>
                    <li>
                        <Link className="menus" to="../Tugas14/BuahBuahan">Tugas 14</Link>
                    </li>
                    <li>
                    <label className="switch">
                    <input type="checkbox" checked={theme=='light' ? false:true} onChange={handleChangeTheme}/>
                    <span className="slider round"></span>
                    </label>
                    </li>
                </ul>
            </Route>
           
        </header>
    )
}

export default HeaderNav