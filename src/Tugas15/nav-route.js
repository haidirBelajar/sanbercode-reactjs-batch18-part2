import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Form from '../Tugas9/appform';

const View = () => {
    return(
        <Route>
            <Switch>
                    <Route exact path="/Tugas9/appform">
                        <Form />
                    </Route>
                </Switch>
        </Route>
    )
}