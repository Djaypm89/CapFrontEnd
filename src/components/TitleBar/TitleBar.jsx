import React from 'react';
import './TitleBar.css';

function TitleBar(props){
    return (
        <div classNname="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar-nav">
                    <h1>R2V</h1>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;