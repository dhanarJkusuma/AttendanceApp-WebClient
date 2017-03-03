/**
 * Created by Dhanar J Kusuma on 28/02/2017.
 */
import React from 'react';

class Loader extends React.Component{
    render(){
        return (
            <div className="col-md-12">
                <div className="loader">
                </div>
                <h4 className="loading">Loading...</h4>
            </div>
        );
    }
}


export default Loader;