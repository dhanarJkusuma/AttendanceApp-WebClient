/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import TableKloter from '../components/kloter/TableKloter';
import { getData } from '../actions/actionKloter';

class Kloter extends React.Component{

    componentDidMount(){
        this.props.getData();
    }

    handleRefresh(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                <h3 className="page-header">Menu Kloter</h3>
                <TableKloter kloter={this.props.kloter} onRefresh={ this.handleRefresh.bind(this) } />
            </div>
        );
    }
}

Kloter.propType = {
    kloter : React.PropTypes.object.isRequired,
    getData : React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        kloter : state.kloter
    }
}

export default connect(mapStateToProps, { getData })(Kloter);