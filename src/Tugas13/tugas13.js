import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const DaftarBuah = () => {  
    const [daftarBuah, setDaftarBuah] =  useState(null)
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})
  
    useEffect( () => {
      if (daftarBuah === null){
        Axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
        })
      }
    }, [daftarBuah])
    
    const handleDelete = (event) => {
      let idDataBuah = parseInt(event.target.value)
  
      // cara 1
      // let newdaftarBuah = daftarBuah.filter(el => el.id !== idDataBuah)
      // setDaftarBuah([...newdaftarBuah])
      // Axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      // .then(res => {
      //   console.log(res)
      // })
  
  
      // cara 2
      Axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then(() => {
        setDaftarBuah(null)
      })
            
      
    }
    
    const handleEdit = (event) =>{
      // cara 1 ambil data dari daftarBuah yg di inisialisasi di awal (bukan api baru)
      // let idDataBuah = parseInt(event.target.value)
      // let dataBuah = daftarBuah.find(x=> x.id === idDataBuah)
      // setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
      
      // cara 2 ambil data dari api baru
      let idDataBuah = parseInt(event.target.value)
          
      Axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then(res => {
        let dataBuah = res.data
        setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
      })
    
    }
  
    const handleChange = (event) =>{
      let typeOfInput = event.target.name
  
      switch (typeOfInput){
        case "name":
        {
          setInput({...input, name: event.target.value});
          break
        }
        case "price":
        {
          setInput({...input, price: event.target.value});
          break
        }
        case "weight":
        {
          setInput({...input, weight: event.target.value});
            break
        }
      default:
        {break;}
      }
    }
  
    const handleSubmit = (event) =>{
      // menahan submit
      event.preventDefault()
  
      let name = input.name
      let price = input.price.toString()
      
  
      if (input.id === null){        
        Axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: input.weight})
        .then(res => {
            setDaftarBuah([
              ...daftarBuah, 
              { id: res.data.id, 
                name, 
                price,
                weight: input.weight
              }])
        })
      }else{
        Axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name, price, weight: input.weight})
        .then(() => {
            let dataBuah = daftarBuah.find(el=> el.id === input.id)
            dataBuah.name = name
            dataBuah.price = price
            dataBuah.weight = input.weight
            setDaftarBuah([...daftarBuah])
        })
      }
  
      // reset input form to default
      setInput({name: "", price: "", weight: 0, id: null})
  
    }
  
    return(
      <div className="container ptop">
        <div className="content noborder">
        <h1>Daftar Harga Buah</h1>
        <div className="table-buah">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
  
              {
                daftarBuah !== null && daftarBuah.map((item, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.weight/1000} Kg</td>
                      <td>
                        <button onClick={handleEdit} value={item.id}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={item.id}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        </div>
        {/* Form */}
        </div>
        <div className="content noborder">
            <form className="form-input" onSubmit={handleSubmit}>
              <div className="input">
              <label >
                Nama:
              </label>
              <input type="text" required name="name" value={input.name} onChange={handleChange}/>

              </div>
              <div className="input">
              <label >
                Harga:
              </label>
              <input type="text" required name="price" value={input.price} onChange={handleChange}/>
                
              </div>
              <div className="input">
              <label >
                Berat (dalam gram):
              </label>
              <input type="number" required name="weight" value={input.weight} onChange={handleChange}/>
                
              </div>
              <div className="submit">
              <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
      </div>
    )
  }
  
  export default DaftarBuah
  