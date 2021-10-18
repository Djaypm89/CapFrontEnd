import React from 'react';
import './Stat.css'

const Stat = (props) => {
    return ( 
        <div className="frame">
            <div className="cover">
                <h1 className="location">{props.stat.location}</h1>
                <h4 className="data">{props.stat.data}</h4>
            </div>
        </div>
     );
}
 
export default Stat;