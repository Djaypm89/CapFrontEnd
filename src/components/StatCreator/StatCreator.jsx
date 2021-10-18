import React, { Component } from 'react';


class StatCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: '',
            data: ''
         }
    }

    handleChange = (event) => {
           this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewStat(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                
                <label>Stat Location</label>
                <input name="location" onChange={this.handleChange} value={this.state.location} />
                <label>Stat Data</label>
                <input name="data" onChange={this.handleChange} value={this.state.data} />

                <button type="submit">Create Statistic</button>
            </form>
         );
    }
}
 
export default StatCreator;