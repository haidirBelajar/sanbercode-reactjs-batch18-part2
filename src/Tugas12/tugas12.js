import React, { Component, useDebugValue } from 'react';

class DaftarHarga extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
                nama: "",
                harga: "",
                berat: "",
            index: -1 
        }
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        let index = this.state.index
        let hargaBuah = this.state.hargaBuah
        let namaBuah = this.state.nama
        let buahHarga = this.state.harga
        let beratbuah = this.state.berat
        
        
        
        if (index === -1){
            let tambahBuah = hargaBuah.push({
                nama: namaBuah,
                harga: buahHarga,
                berat: beratbuah
            })
        } else { 
            hargaBuah[index] = ({
                nama: namaBuah,
                harga: buahHarga,
                berat: beratbuah,
            })  
        }
        
        this.setState({hargaBuah})

    }

        handleChange = (event) =>{
            var name = event.target.name
            var value = event.target.value
            this.setState({
                [name]: value
            })
        }

        handleEdit(event){
            let index = event.target.value;
            this.setState({nama: this.state.hargaBuah[index].nama, index})
            this.setState({harga: this.state.hargaBuah[index].harga, index})
            this.setState({berat: this.state.hargaBuah[index].berat, index})
        
        }
            
        handleDelete = (event) =>{
            let index = event.target.value;
            this.state.hargaBuah.splice(index, 1)
            this.setState({hargaBuah: this.state.hargaBuah})
        }
        
    
    render(){
        return (
            <div className="container ptop">
                <div className="content noborder flex-wrap">
                    <h1 className="title">{this.props.title}</h1>
 
                    <div className="table-buah">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Harga</th>
                                    <th>Berat</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.hargaBuah.map((val, index)=>{ 
                                        var number = index+1; 
                                    return(                    
                                        <tr>
                                        <td>{val.nama}</td>
                                        <td>{val.harga}</td>
                                        <td>{val.berat/1000 + " " + "kg"}</td>
                                        <td className="center">
                                            <button className="btn-edit" value={index} onClick={this.handleEdit}>Edit</button>
                                            <button className="btn-delete" value={index} onClick={this.handleDelete}>Delete</button>
                                        </td>
                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="content noborder">
                    <form className="form-input" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="input">
                            <label>
                                Nama:
                            </label> 
                            <input type="text" name="nama" autoComplete="off" required onChange={this.handleChange} value={this.state.nama}/> 
                        </div>
                        <div className="input">
                            <label>
                                Harga:
                            </label> 
                            <input type="number" name="harga" autoComplete="off" required  onChange={this.handleChange} value={this.state.harga}/> 
                        </div>
                        <div className="input">    
                            <label>
                                Berat:
                            </label> 
                            <input type="number" name="berat" autoComplete="off" required  onChange={this.handleChange} value={this.state.berat}/>
                        </div>
                        <div className="submit">   
                            <input type="submit" value="Submit" />   
                        </div>
                    </form>
                </div>
                
            </div>
         );
      }
}
export default DaftarHarga;