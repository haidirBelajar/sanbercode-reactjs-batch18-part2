import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Tugas9/appform';
import Buah from './Tugas10/daftarBuah';


function App() {
  return (
    <div className="App">
      <Buah title="Daftar Harga Buah" th1="Nama" th2="Harga" th3="Berat"/>
      <Form />
    </div>
  );
}

export default App;
