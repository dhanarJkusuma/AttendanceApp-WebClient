/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { connect } from 'react-redux';

import Loader from '../Loader';
import ItemUser from './ItemUser';
import FormUser from './FormUser';
import UpdateFormUser from './UpdateFormUser';

import { insertData, deleteData, getLocation } from '../../actions/actionUser';
class TableUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showConfirm : false,
            showUpdate : false,
            tmpDelete : null,
            tmpUpdate : null
        };
        this.onHandleDelete = this.onHandleDelete.bind(this);
    }

    onHandleSubmit(data){
        this.props.insertData(data);
    }

    onHandleForm(){
        this.props.getLocation();
    }

    onHandleDelete(data){
        this.props.deleteData(data._id);
    }

    showConfirmation(data){
        this.setState({ showConfirm : true, tmpDelete : data });
    }

    showUpdateDialog(data){
        this.setState({ showUpdate : true, tmpUpdate : data });
    }

    closeUpdateDialog(){
        this.setState({ showUpdate : false });
        this.props.onRefresh();
    }

    handleUpdate(){
        this.setState({ showUpdate : false });
    }



    render(){
        const { requesting } = this.props.muser;
        if(requesting){
            return (<Loader />)
        }else{
            if(requesting===false){
                const data = this.props.muser.response;
                if(this.state.showUpdate){
                    return (
                        <UpdateFormUser data={ this.props.rmUser } muser={this.state.tmpUpdate} onClose={this.closeUpdateDialog.bind(this)} />
                    )
                }
                else{
                    return (
                        <div className="container">
                            <FormUser
                                data={ this.props.rmUser }
                                muser={this.props.muser}
                                onPrepareData={ this.onHandleForm.bind(this) }
                                onFormSubmit={ this.onHandleSubmit.bind(this) }
                            />
                            <div className="col-md-12">
                                <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map(function(user, i){
                                            return <ItemUser
                                                muser={user}
                                                index={i+1}
                                                key={user._id}
                                                onDeleteClick={this.showConfirmation.bind(this)}
                                                onUpdateClick={this.showUpdateDialog.bind(this)}
                                            />
                                        },this)
                                    }
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <SweetAlert
                                show={this.state.showConfirm}
                                title="Delete Confirmation"
                                type="warning"
                                showCancelButton={true}
                                confirmButtonColor="#DD6B55"
                                confirmButtonText="Yes, delete it!"
                                text="Are you sure ?"
                                onConfirm={() => {
                                    this.setState({ showConfirm: false });
                                    this.onHandleDelete(this.state.tmpDelete);
                                }}
                                onCancel={() => this.setState({ showConfirm : false, tmpDelete : null })}
                            />
                        </div>
                    );
                }

            }else{
                return (<Loader />)
            }

        }
    }
}
TableUser.propType = {
    insertData: React.PropTypes.func.isRequired,
    getLocation : React.PropTypes.func.isRequired,
    deleteData : React.PropTypes.func.isRequired,
    rmUser : React.PropTypes.object.isRequired
};


function mapStateToProps(state){
    return {
        rmUser : state.muser
    }
}



export default connect(mapStateToProps, { insertData, deleteData, getLocation })(TableUser);