import React, { Component } from 'react';
import './App.css'
import StatList from './StatList/StatList';
import TitleBar from './TitleBar/TitleBar';
import StatViewer from './StatViewer/StatViewer';
import StatCreator from './StatCreator/StatCreator'; 
import Footer from './Footer/Footer';


class App extends Component {
    constructor (props){
        super(props);
        this.stats = [
            {location: "mock R2V location", data:"mock R2V data"},
            {location: "Miami, FL (hardcoded)", data:"rent: x, value: y. etc"},
            {location: "Los Angeles, CA (hardcoded)", data:"rent: x, value: y. etc"}
        ];

        this.state = {
            statNumber: 0,
            filter : {city: '', state: '', country: ''},
            city: '', country: '', state: ''
        };
    }

    clear(e) {
        e.preventDefault()
        this.setState({filter : {city: '', state: '', country: ''},
                         city: '', country: '', state: ''})
    }
    filter(e) {
        e.preventDefault();
        this.setState({filter: {city: this.state.city, state: this.state.state, country: this.state.country}})
    }

    cityChanged(e) {
        this.setState({city : e.target.value})
    }

    stateChanged(e) {
        this.setState({state : e.target.value})
    }

    countryChanged(e) {
        this.setState({country : e.target.value})
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

    createStat = (newStat) => {
        console.log('from the createStat on App component', newStat)
        this.stats.push(newStat);
        this.setState ({
            statNumber: this.stats.length - 1
        })
    }

    render(){
        return (
            <div className="container-fluid">
               
                <StatList filter={this.state.filter} />
              
                <input type="text" value={this.state.city} onChange={e =>this.cityChanged(e) } placeHolder="City" />
                <input type="text" value={this.state.state} onChange={e =>this.stateChanged(e) } placeHolder="State"   />
                <input type="text" value={this.state.country} onChange={e =>this.countryChanged(e) } placeHolder="Country" />
                <button onClick={e => this.filter(e) }>Filter</button>
                <button onClick={e => this.clear(e) }>Clear</button>
            </div>
        )
    }
 }

 export default App;

 