/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import TableUser from '../components/user/TableUser';
import { connect } from 'react-redux';
import { getData } from '../actions/actionUser';
class User extends React.Component{

    componentDidMount(){
        this.props.getData();
    }

    handleRefresh(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                <h3 className="page-header">Menu User</h3>
                <TableUser muser={this.props.muser} onRefresh={ this.handleRefresh.bind(this) } />
            </div>
        );
    }
}


User.propType = {
    muser : React.PropTypes.object.isRequired,
    getData : React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        muser : state.muser
    }
}

export default connect(mapStateToProps, { getData })(User);
