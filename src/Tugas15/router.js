import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Form from '../Tugas9/appform';
import Buah from '../Tugas10/daftarBuah';
import Waktu from '../Tugas11/tugas11'
import DaftarHarga from '../Tugas12/tugas12'
import DaftarBuah from '../Tugas13/tugas13'
import Buahbuahan from '../Tugas14/BuahBuahan'

const RouterNav = () => {
    return(
        <Switch>
            <Route exact path="/Tugas9/appform">
                <Form />
            </Route>
            <Route exact path="/Tugas10/daftarBuah">
                <Buah />
            </Route>
            <Route exact path="/Tugas11/tugas11">
                <Waktu />
            </Route>
            <Route exact path="/Tugas12/tugas12">
                <DaftarHarga />
            </Route>
            <Route exact path="/Tugas13/tugas13">
                <DaftarBuah />
            </Route>
            <Route exact path="/Tugas14/BuahBuahan">
                <Buahbuahan />
            </Route>
        </Switch>
    )
}

export default RouterNav
