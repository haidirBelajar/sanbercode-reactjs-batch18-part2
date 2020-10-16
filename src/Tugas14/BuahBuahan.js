import React from 'react';
import {BuahProvider} from './buahContext';
import ListBuah from './buahList'
import FormBUah from './buahForm';
import Layout from './layout-tugas14'


export const Buahbuahan = () => {
    return(
        <div className="container ptop">
            <div className="content noborder flex-wrap">
                <BuahProvider>
                    <Layout />
                </BuahProvider>
            </div>
        </div>
    )
}

export default Buahbuahan