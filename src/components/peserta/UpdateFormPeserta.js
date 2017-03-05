/**
 * Created by Dhanar J Kusuma on 01/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { updateData, finishUpdate } from '../../actions/actionPeserta';
import Loader from '../Loader';

import Message from '../Message';
class UpdateFormPeserta extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : this.props.peserta.nama,
            alamat : this.props.peserta.alamat,
            kloter : this.props.peserta._kloter,
            location : this.props.peserta._location
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
        if(this.props.data.preparing){
            return (
                <Loader/>
            )
        }else {
            if(!this.props.data.preparing && this.props.data.prepared) {
                return (
                    <div className="col-md-12">
                        {(this.props.rpeserta.updated) ? <Message message={this.props.rpeserta.message}
                                                                  onClose={this.handleCloseMessage.bind(this)}/> : ""}
                        <div className="form-group">
                            <button onClick={this.handleCloseForm.bind(this)} className="btn btn-primary"><span
                                className="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;Kembali
                            </button>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Nama : </label>
                                <input
                                    type="text"
                                    name="name"
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
                                    <option value=""> -- Pilih Kloter --</option>
                                    {
                                        this.props.data.idata.kloter.map(function (kloter, i) {
                                            return (
                                                <option value={ kloter._id } key={ i }>{ kloter.name }</option>
                                            )
                                        }, this)
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location"> Location :</label>
                                <select
                                    name="location"
                                    className="form-control"
                                    onChange={ this.onTextChange.bind(this) }
                                    value={ this.state.location }
                                >
                                    <option value=""> -- Pilih Location --</option>
                                    {
                                        this.props.data.idata.location.map(function (location, i) {
                                            return (
                                                <option value={ location._id } key={ i }>{ location.name }</option>
                                            )
                                        }, this)
                                    }
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
            }else{
                return (
                    <Loader />
                )
            }
        }
    }
}

function mapStateToProps(state){
    return {
        rpeserta : state.peserta
    }
}

export default connect(mapStateToProps, {updateData, finishUpdate})(UpdateFormPeserta);