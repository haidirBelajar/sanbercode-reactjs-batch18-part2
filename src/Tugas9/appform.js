import React from 'react';

class Form extends React.Component{
    render(){
        return(
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
                          <label>Semangka</label>
                        </div>
                        <div className="ckbx">
                          <input type="checkbox" id="buah2" name="buah2" value="jeruk" />
                          <label >Jeruk</label>
                        </div>
                        <div className="ckbx">
                          <input type="checkbox" id="buah3" name="buah2" value="nanas" />
                          <label >Nanas</label>
                        </div>
                        <div className="ckbx">
                          <input type="checkbox" id="buah4" name="buah4" value="salak" />
                          <label >Salak</label>
                        </div>
                        <div className="ckbx">
                          <input type="checkbox" id="buah5" name="buah5" value="Anggur" />
                          <label >Anggur</label>
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
        );
    }
}



export default Form;