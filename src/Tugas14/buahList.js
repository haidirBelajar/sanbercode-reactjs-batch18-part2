import React, { useState, useContext } from 'react';
import { BuahContext } from './buahContext';
import Axios from 'axios';

const ListBuah = () => {
    const [daftarBuah, setDaftarBuah] = useContext(BuahContext);
    const [input, setInput] = useState({
        name: "",
        price:"",
        weight:null,
        id: null
    })
    

    const handleDelete = (event) => {
        let idDataBuah = parseInt(event.target.value)
        Axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(() => {
          setDaftarBuah(null)
        })
    }

    const editHandle = (event) => {
        let idDataBuah = parseInt(event.target.value)
        Axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then(res => {
        let buahBuahan = res.data
        setInput({name: buahBuahan.name, price: buahBuahan.price, weight: buahBuahan.weight, id: idDataBuah})
      })

    //   edit masih error bang abdul sumpah dari materi hook kemaren belom ngerti cara edit :'( )
    }

    return (
                <div className="table-buah">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Price</th>
                                    <th>Weight</th>
                                    <th>aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                
                            {
                                daftarBuah !== null && daftarBuah.map((item, index)=>{
                                return(                    
                                    <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight/1000} Kg</td>
                                    <td>
                                        <button onClick={editHandle} value={item.id}>Edit</button>
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
       
    )
}

export default ListBuah