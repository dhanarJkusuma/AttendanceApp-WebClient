/**
 * Created by Dhanar J Kusuma on 01/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { updateData, finishUpdate } from '../../actions/actionPeserta';

import Message from '../Message';
class UpdateFormPeserta extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : this.props.peserta.name,
            alamat : this.props.peserta.alamat,
            kloter : this.props.peserta.kloter,
        }
    }

    handleCloseForm(){
        this.props.onClose();
    }

    handleCloseMessage(){
        this.props.finishUpdate();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateData(this.props.peserta._id, this.state);
    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }


    render(){
        return (
            <div className="col-md-12">
                {(this.props.rpeserta.updated) ? <Message message={this.props.rpeserta.message} onClose={this.handleCloseMessage.bind(this)}/>  : ""}
                <div className="form-group">
                    <button onClick={this.handleCloseForm.bind(this)} className="btn btn-primary"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;Kembali</button>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Nama : </label>
                        <input
                            type="text"
                            name="kloter_name"
                            placeholder="Nama Peserta"
                            className="form-control"
                            onChange={this.onTextChange.bind(this)}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alamat"> Alamat :</label>
                        <textarea
                            name="alamat"
                            placeholder="Alamat"
                            className="form-control"
                            onChange={ this.onTextChange.bind(this) }
                            value={ this.state.alamat }
                        >
                    </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="kloter"> Kloter :</label>
                        <select
                            name="kloter"
                            className="form-control"
                            onChange={ this.onTextChange.bind(this) }
                            value={ this.state.kloter }
                        >

                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={ this.props.rpeserta.updating }>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        rpeserta : state.peserta
    }
}

export default connect(mapStateToProps, {updateData, finishUpdate})(UpdateFormPeserta);