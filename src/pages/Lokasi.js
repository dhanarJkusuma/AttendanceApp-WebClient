/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import TableLocation from '../components/location/TableLocation';
import { getData } from '../actions/actionLocation';

class Lokasi extends React.Component{

    componentDidMount(){
        this.props.getData();
    }

    handleRefresh(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                <h3 className="page-header">Menu Location</h3>
                <TableLocation location={this.props.location} onRefresh={ this.handleRefresh.bind(this) } />
            </div>
        );
    }
}

Lokasi.propType = {
    location : React.PropTypes.object.isRequired,
    getData : React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        location : state.location
    }
}

export default connect(mapStateToProps, { getData })(Lokasi);