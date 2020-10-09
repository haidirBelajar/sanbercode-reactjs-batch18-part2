import React from 'react';



class Buah extends React.Component{
    render() {
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
          ]
        
        return (
           <div className="container">
               <div className="content noborder">
                   <h1 className="title">{this.props.title}</h1>

                   <div className="table-buah">
                   <table>
                       <tr>
                            <th>{this.props.th1}</th>
                            <th>{this.props.th2}</th>
                            <th>{this.props.th3}</th>
                       </tr>
                       {dataHargaBuah.map(x =>
                            <tr>
                                <td>{x.nama}</td>
                                <td>{x.harga}</td>
                                <td>{x.berat/1000 + " " + "kg"}</td>
                            </tr>
                        )}
                       
                   </table>
                </div>
               </div>
               
           </div>
        );
    }
}

export default Buah;