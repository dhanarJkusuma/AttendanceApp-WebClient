/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import TablePeserta from '../components/peserta/TablePeserta';
import { getData, getKloter } from '../actions/actionPeserta';

class Peserta extends React.Component{

    componentDidMount(){
        this.props.getData();
    }

    handleRefresh(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                <h3 className="page-header">Menu Peserta</h3>
                <TablePeserta peserta={this.props.peserta} onRefresh={ this.handleRefresh.bind(this) } />
            </div>
        );
    }
}

Peserta.propType = {
    peserta : React.PropTypes.object.isRequired,
    getData : React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        peserta : state.peserta
    }
}

export default connect(mapStateToProps, { getData, getKloter })(Peserta);