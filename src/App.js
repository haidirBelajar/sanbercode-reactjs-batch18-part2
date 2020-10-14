import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './Tugas9/appform';
// import Buah from './Tugas10/daftarBuah';
// import Waktu from './Tugas11/tugas11'
// import DaftarHarga from './Tugas12/tugas12'
import FormBuah from './Tugas13/tugas13'

function App() {
 
  return (
    <div className="App">
      {/* <Buah title="Daftar Harga Buah" th1="Nama" th2="Harga" th3="Berat"/>
      <Form />
      {isShow && <Waktu />}
      <DaftarHarga title="Daftar Harga Buah" /> */}
      <FormBuah />
    </div>
  );
}

export default App;
