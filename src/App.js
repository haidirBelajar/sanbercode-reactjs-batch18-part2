import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Tugas9/appform';
import Buah from './Tugas10/daftarBuah';
import Waktu from './Tugas11/tugas11'

function App() {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 10000)
  }, []);
  return (
    <div className="App">
      <Buah title="Daftar Harga Buah" th1="Nama" th2="Harga" th3="Berat"/>
      <Form />
      {isShow && <Waktu />}
    </div>
  );
}

export default App;
