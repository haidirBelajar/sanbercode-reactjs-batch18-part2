import React, { useEffect, useState,useContext } from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './Tugas9/appform';
// import Buah from './Tugas10/daftarBuah';
// import Waktu from './Tugas11/tugas11'
// import DaftarHarga from './Tugas12/tugas12'
// import DaftarBuah from './Tugas13/tugas13'
import Buahbuahan from './Tugas14/BuahBuahan'
import { BrowserRouter } from 'react-router-dom'
import HeaderNav from './Tugas15/header-nav'
import RouterNav from './Tugas15/router'
import {ThemeProvider, ThemeContext} from './Tugas15/theme-context'
import Layout from './Tugas15/layout';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>      
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
