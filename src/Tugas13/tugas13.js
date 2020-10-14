import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const FormBuah = ()=> {
    const [dataBuah, setdataBuah] = useState(null)
    const [name, setName] = useState({name: "", id:null})
    const [price, setPrice] = useState({price: "", id:null})
    const [weight, setWeight] = useState({weight:"", id:null})

useEffect( () => {
        Axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
        let dataBuah = res.data
        setdataBuah(
            dataBuah.map(el=> {
            return {id: el.id, name: el.name, price: el.price, weight: el.weight}
            })
        )      
        })
    },[dataBuah])
    
const handleDelete = (event) =>{
    var idBuah= parseInt(event.target.value) 
    Axios.delete(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}}`)
    .then(res => {
    var dataBuahEuy = dataBuah.filter(x=> x.id !== idBuah)
    setdataBuah(dataBuahEuy)
})
}

const submitBuah = (event) =>{
    event.preventDefault()
    var url ="http://backendexample.sanbercloud.com/api/fruits";
    var editUrl = "http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}";
    var buahNama = name.name;
    var buahHarga = price.price;
    var buahBerat = weight.weight;
    var buahBaru = {
        name: buahNama,
        price: buahHarga,
        weight: buahBerat,
    }

    if (buahNama.id === null ){
        Axios.post(url, buahBaru);
    } else {
        Axios.put(editUrl, buahBaru)
    }    
}

const buahEditHandle = (event) =>{
    var idBuah= parseInt(event.target.value)
    var buahNama = name.name;
    var buahHarga = price.price;
    var buahBerat = weight.weight;
    var buahBuah = dataBuah.find(x=> x.id === idBuah)

    setName({id: idBuah, name: buahNama, price: buahHarga, weight: buahBerat})

}

const changeInputBuah = (event) =>{
    let value = event.target.value
    let namaInput = event.target.name
    setName({...name, [namaInput]:value})
    setPrice({...price, [namaInput]:value})
    setWeight({...weight, [namaInput]:value})
  }

    
    return(
        <div className="container">
            <div className="content noborder">
                <div className="table-buah">
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Price</th>
                                <th>weight</th>
                            </tr>
                        </thead>
                        <tbody>
                        { dataBuah !== null && (
                            dataBuah.map((x, index)=>{
                            return(                    
                                <tr key={x.id}>
                                <td>{x.name}</td>
                                <td>{x.price}</td>
                                <td>{x.weight}</td>
                                <td>
                                    <button value={x.id} >Edit</button>
                                    <button style={{marginLeft: "1em"}} value={x.id} onClick={handleDelete}>Delete</button>
                                </td>
                                </tr>
                            )
                            })
                        )}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="content noborder">
                    <form className="form-input" onSubmit={submitBuah}>
                        <div className="input">
                            <label>
                                Name:
                            </label> 
                            <input type="text" name="name" autoComplete="off" required value={name.name} onChange={changeInputBuah}/> 
                        </div>
                        <div className="input">
                            <label>
                                Price:
                            </label> 
                            <input type="number" name="price" autoComplete="off" required value={price.price} onChange={changeInputBuah}/> 
                        </div>
                        <div className="input">    
                            <label>
                                Weight:
                            </label> 
                            <input type="number" name="weight" autoComplete="off" required value={weight.weight} onChange={changeInputBuah}/>
                        </div>
                        <div className="submit">   
                            <input type="submit" value="Submit" />   
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default FormBuah