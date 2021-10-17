import React from 'react';


const StatViewer = (props) => {
    return ( 
        <div className="row row-spacer">
        <div className="col-md-4">
            {/* more stuff here */}
            <button onClick={props.previousStat}>Previous Stat</button>
        </div>

        <div className="col-md-4">
            <h1>{props.stat.location}</h1>
            <h4>{props.stat.data}</h4>
        </div>

        <div className="col-md-4">
            {/* more stuff here */}
            <button onClick={props.nextStat}>Next Stat</button>
        </div>
    </div>
     );
}
 
export default StatViewer;
