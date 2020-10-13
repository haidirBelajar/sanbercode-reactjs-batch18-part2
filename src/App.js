import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Tugas9/appform';
import Buah from './Tugas10/daftarBuah';
import Waktu from './Tugas11/tugas11'
import DaftarHarga from './Tugas12/tugas12'

function App() {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 10000)
  }, []);
  return (
    <div className="App">
      {/* <Buah title="Daftar Harga Buah" th1="Nama" th2="Harga" th3="Berat"/>
      <Form />
      {isShow && <Waktu />} */}
      <DaftarHarga title="Daftar Harga Buah" />
    </div>
  );
}

export default App;
