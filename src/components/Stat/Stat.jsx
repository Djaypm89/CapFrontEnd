import React from 'react';
import './Stat.css'

const Stat = (props) => {
    return ( 
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.stat.location}</h1>
                <h4 className="author">{props.stat.data}</h4>
            </div>
        </div>
     );
}
 
export default Stat;