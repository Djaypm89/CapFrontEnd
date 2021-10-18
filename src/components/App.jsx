import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import StatViewer from './StatViewer/StatViewer';
import StatCreator from './StatCreator/StatCreator'; 

class App extends Component {
    constructor (props){
        super(props);
        this.stats = [
            {location: "mock R2V location", data:"mock R2V data"},
            {location: "Miami, FL (hardcoded)", data:"rent: x, value: y. etc"},
            {location: "Los Angeles, CA (hardcoded)", data:"rent: x, value: y. etc"}
            
        ];

        this.state = {
            statNumber: 0
        };
    }

    goToNextStat = () => {
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

    goToPreviousStat = () => {
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
                <StatViewer stat={this.stats[this.state.statNumber]} nextStat={this.goToNextStat} previousStat={this.goToPreviousStat}/>
                <StatCreator />

            </div>
        )
    }
 }

 export default App;