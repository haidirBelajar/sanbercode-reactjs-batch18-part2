import React, {useContext, useState} from "react"
import {BuahContext} from './buahContext';
import Axios from 'axios'

const FormBUah = () => {
    const [daftarBuah, setDaftarBuah] = useContext(BuahContext)
    const [input, setInput] = useState({
        name: "",
        price:"",
        weight:0,
        id: null
    })

    const onIputChange = (event) => {
        let type = event.target.name
        let value = event.target.value

        switch(type){
            case "name" : {setInput({...input, name: value});break;}
            case "price" : {setInput({...input, price: value});break;}
            case "weight" : {setInput({...input, weight: value});break;}
        }

    }

    const onSubmitBuah = (event) => {
        event.preventDefault()

        Axios.post(`http://backendexample.sanbercloud.com/api/fruits`, 
        {
            name: input.name,
            price: input.price, 
            weight: input.weight})
        .then(res => {
            setDaftarBuah([
              ...daftarBuah, 
              { id: res.data.id, 
                name: input.name, 
                price: input.price,
                weight: input.weight
              }])
        })
      
    }

    return (
        <>
                <form className="form-input" onSubmit={onSubmitBuah}>
                    <div className="input">
                        <label style={{float: "left"}}>
                        Nama:
                        </label>
                        <input style={{float: "right"}} type="text" required name="name" 
                        value={input.name} onChange={onIputChange}/>
                    </div>   
                    <div className="input">
                        <label style={{float: "left"}}>
                        Harga:
                        </label>
                        <input style={{float: "right"}} type="text" required name="price" 
                        value={input.price} onChange={onIputChange}/>   
                    </div>
                        <div className="input">
                        <label style={{float: "left"}}>
                        Berat (dalam gram):
                        </label>
                        <input style={{float: "right"}} type="number" required name="weight" 
                        value={input.weight} onChange={onIputChange}/>  
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" /> 
                    </div>
                </form>
   `    </>
    )
}

export default FormBUah