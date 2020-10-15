import React from 'react';
import {BuahProvider} from './buahContext';
import ListBuah from './buahList'
import FormBUah from './buahForm';


export const Buahbuahan = () => {
    return(
        <div className="container bdark ptop">
            <div className="content noborder flex-wrap">
                <BuahProvider>
                <ListBuah/>
                <FormBUah />
                </BuahProvider>
            </div>
        </div>
    )
}

export default Buahbuahan