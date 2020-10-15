import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios';

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [daftarBuah,setDaftarBuah] = useState(null)
    const [input, setInput]  =  useState({
        name: "", 
        price: "", 
        weight: 0,
        id: 0})


    useEffect( () => {
        if (daftarBuah === null){
            Axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {
                id: el.id,
                name: el.name, 
                price: el.price, 
                weight: el.weight 
            }} ))
            })
        }
        }, [daftarBuah])

        return (
            <BuahContext.Provider value={[daftarBuah,setDaftarBuah]}>
              {props.children}
            </BuahContext.Provider>
          );
        
}