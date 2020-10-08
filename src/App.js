import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1 className="title">Form Pembelian BUah</h1>

          <div className="form-beli">
            <form action="">
              <div className="input-txt">
                <label>Nama Pelanggan</label>
                <input type="text" />
              </div>    
              <div className="input-checkbox">
                <div className="label-checkbox">
                  <label>Daftar Item</label>
                </div>
                <div className="box">
                    <div className="ckbx">
                      <input type="checkbox" id="buah1" name="buah1" value="semangka" />
                      <label for="buah1">Semangka</label>
                    </div>
                    <div className="ckbx">
                      <input type="checkbox" id="buah2" name="buah2" value="jeruk" />
                      <label for="buah2">Jeruk</label>
                    </div>
                    <div className="ckbx">
                      <input type="checkbox" id="buah3" name="buah2" value="nanas" />
                      <label for="buah3">Nanas</label>
                    </div>
                    <div className="ckbx">
                      <input type="checkbox" id="buah4" name="buah4" value="salak" />
                      <label for="buah4">Salak</label>
                    </div>
                    <div className="ckbx">
                      <input type="checkbox" id="buah5" name="buah5" value="Anggur" />
                      <label for="buah5">Anggur</label>
                    </div>
                </div>
                
              </div>
              <div className="btn-submit">
                <button className="btn" type="submit">kirim</button>
              </div>
            </form>
          </div>

      </div>
    </div>
    </div>
  );
}

export default App;
