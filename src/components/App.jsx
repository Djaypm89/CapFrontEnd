import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor (props){
        super(props);
        this.stats = [
            {location: "pass r2v location into here", statistics:"pass r2v info here"},
            {location: "Miami, FL (hardcoded)", statistics:"rent: x, value: y. etc"},
            {location: "Los Angeles, CA (hardcoded)", statistics:"rent: x, value: y. etc"}
            
        ];

        this.state = {
            statNumber: 0
        };
    }

    goToNextLocaltion = () => {
        // debugger;
        let tempStatNumber = this.state.statNumber;
        tempStatNumber++;
        if(tempStatNumber === this.stats.length) {
            tempStatNumber = 0;
        }
        this.setState({
            statNumber: tempStatNumber
        });
    }

    goToPreviousLocation = () => {
        let tempStatNumber = this.state.statNumber;
        tempStatNumber--;
        if(tempStatNumber < 0) {
            tempStatNumber = this.stats.length - 1;
        }
        this.setState({
            statNumber: tempStatNumber
        })
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/* more stuff here */}
                        <button onClick={this.goToPreviousLocation}>Previous Location</button>
                    </div>

                    <div className="col-md-4">
                        <h1>{this.stats[this.state.statNumber].location}</h1>
                        <h4>{this.stats[this.state.statNumber].statistics}</h4>
                    </div>

                    <div className="col-md-4">
                        {/* more stuff here */}
                        <button onClick={this.goToNextLocaltion}>Next Location</button>
                    </div>
                </div>

            </div>
        )
    }
 }

 export default App;