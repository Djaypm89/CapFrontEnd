import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor (props){
        super(props);
        this.stats = [
            {location: "pass r2v location into here", statistics:"pass r2v info here"}
        ];
        this.state = {
            statNumber: 0
        };
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/* more stuff here */}
                    </div>
                    
                    <div className="col-md-4">
                        <h1>{this.stats[this.state.statNumber].location}</h1>
                        <h4>{this.stats[0].statistics}</h4>                        
                    </div>

                    <div className="col-md-4">
                        {/* more stuff here */}
                    </div>
                </div>

            </div>
        )
    }
 }

 export default App;