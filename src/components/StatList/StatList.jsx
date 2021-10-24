import { stat } from 'fs';
import React, {Component} from 'react';

import './StatList.css'
//import CreateStat from '../CreateStat/CreateStat';

class StatList extends Component {
    constructor(props) {
       
        super(props);
        this.state = { 
            stats: [],
            search: ''
         }
    }

    
    componentDidMount(){
        this.getStats()
    }
    
    getStats(){
       fetch('http://127.0.0.1:8000/housingdata/', {mode: 'cors'}
       ).then(resp => resp.json()
       ).then(json =>  this.setState({ stats: json }) )
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
      
    }
   
    buildTable() {
        const result = []
        const filter = this.props.filter;
        console.log(filter)

        for(let i = 0 ; i < this.state.stats.length ; i++) {
            const stat = this.state.stats[i];
            const record = (<tr key={stat.id}><td>{ stat.sizeRank }
                </td>
                    <td>{ stat.country }</td>
                    <td>{ stat.state }</td>
                    <td>{ stat.city}</td>
                    <td>{ stat.rent1YearAvg}</td>
                    <td>{ stat.rent5YearAvg}</td>
                    <td>{ stat.value1YearAvg}</td>
                    <td>{ stat.value5YearAvg}</td>

                    <td>{ stat.value1YearAvg ? (100 * stat.rent1YearAvg / stat.value1YearAvg).toFixed(1) : "" }</td>
                    <td>{ stat.value5YearAvg ? (100 * stat.rent5YearAvg / stat.value5YearAvg).toFixed(1) : "" }</td>

                </tr>)   
                             
            if(this.props.filter.city === '' || this.props.filter.city === stat.city) {
                if(this.props.filter.state === '' || this.props.filter.state === stat.state) {
                    if(this.props.filter.country === '' || this.props.filter.country === stat.country) {
                          result.push(record)
                    }
                }
            }
        }
        return result;
    }
    render() { 
        return (
        <React.Fragment>
            <table className="table styled-table">
                <thead>
                    <tr>
                    <th>Pop. Rank</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Rent 1 Year Avg</th>
                    <th>Rent 5 year Avg</th>
                    <th>Value 1 Year Avg</th>
                    <th>Value 5 year Avg</th>
                    <th>Ratio 1 year</th>
                    <th>Ratio 5 year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.buildTable()
                    }
                </tbody>
            </table>
      
            <table className='styled-table'>
                <tbody>
                <tr>
                    <td className="active-row">
                    
                    </td>
                </tr>
                </tbody>
            </table>
            
        </React.Fragment>  
         );
    }
}
 
export default StatList;