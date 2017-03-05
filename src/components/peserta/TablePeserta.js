/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { connect } from 'react-redux';

import Loader from '../Loader';
import ItemPeserta from './ItemPeserta';
import FormPeserta from './FormPeserta';
import UpdateFormPeserta from './UpdateFormPeserta';

import { insertData, deleteData, getKloter } from '../../actions/actionPeserta';
class TablePeserta extends React.Component{

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
        this.props.getKloter();
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
        const { requesting } = this.props.peserta;
        if(requesting){
            return (<Loader />)
        }else{
            if(requesting===false){
                const data = this.props.peserta.response;
                if(this.state.showUpdate){
                    return (
                        <UpdateFormPeserta data={ this.props.rPeserta } peserta={this.state.tmpUpdate} onClose={this.closeUpdateDialog.bind(this)} />
                    )
                }
                else{
                    return (
                        <div className="container">
                            <FormPeserta
                                data={ this.props.rPeserta }
                                peserta={this.props.peserta}
                                onPrepareData={ this.onHandleForm.bind(this) }
                                onFormSubmit={ this.onHandleSubmit.bind(this) }
                            />
                            <div className="col-md-12">
                                <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Alamat</th>
                                        <th>Lokasi</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map(function(peserta, i){
                                            return <ItemPeserta
                                                peserta={peserta}
                                                index={i+1}
                                                key={peserta._id}
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
TablePeserta.propType = {
    insertData: React.PropTypes.func.isRequired,
    getKloter : React.PropTypes.func.isRequired,
    rPeserta : React.PropTypes.object.isRequired
};


function mapStateToProps(state){
    return {
        rPeserta : state.peserta
    }
}



export default connect(mapStateToProps, { insertData, deleteData, getKloter })(TablePeserta);