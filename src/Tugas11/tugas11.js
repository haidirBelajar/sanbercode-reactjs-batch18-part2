import React, { Component } from 'react';

class Waktu extends Component {
    constructor(props){
        super(props)
        this.state ={
            time:new Date(),
            timeMundur: 10,
            isShow: true
        }
    }
// iini unttuk menampilkan wakttu saat ini
    currentTime(){
        this.setState({
            time : new Date()
        })
    }

    componentWillMount(){
        setInterval(()=>
            this.currentTime(),1000
        )
    }



//  ini untuk menampilkan hitung mundur



componentDidMount() {
    console.log("did Mount");
    if (this.props.start != undefined){
        this.setState({timeMundur: this.props.start})
     }
     this.timerID = setInterval(
         () => this.tick(),
         1000
    )
 }
 
 tick() {
     this.setState({
         timeMundur: this.state.timeMundur - 1 
     });
 }

componentDidUpdate(){
    console.log("Update")
    if (this.state.timeMundur ===0 ){
        clearInterval(this.timerID);
    }
}


componentWillUnmount(){
    console.log("Unmount");
    
}

    render(){
        console.log("render");
        return(
            <div className="container">
                <div className="content pr">
                    <div className="waktu">
                        <h1>Sekarang jam : {this.state.time.toLocaleTimeString()}</h1>
                        <h2>Hitung Mundur : {this.state.timeMundur}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Waktu;