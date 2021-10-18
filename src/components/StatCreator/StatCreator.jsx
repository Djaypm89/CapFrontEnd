import React, { Component } from 'react';


class StatCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: '',
            data: ''
         }
    }
    render() { 
        return ( 
            <form>
                <label>Stat Location</label>
                <input value={this.state.location} />
                <label>Stat Data</label>
                <input value={this.state.data} />
                
                <button type="submit">Create Statistic</button>
            </form>
         );
    }
}
 
export default StatCreator;