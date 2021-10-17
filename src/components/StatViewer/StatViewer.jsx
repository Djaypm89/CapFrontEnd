import React from 'react';
import Stat from '../Stat/Stat';

const StatViewer = (props) => {
    return ( 
        <div className="row row-spacer">
        <div className="col-md-4">
            {/* more stuff here */}
            <button onClick={props.previousStat}>Previous Stat</button>
        </div>

        <div className="col-md-4">
            <Stat stat={props.stat} />
        </div>

        <div className="col-md-4">
            {/* more stuff here */}
            <button onClick={props.nextStat}>Next Stat</button>
        </div>
    </div>
     );
}
 
export default StatViewer;
