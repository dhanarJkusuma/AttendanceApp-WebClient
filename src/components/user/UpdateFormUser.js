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
            username : this.props.peserta.username,
            level : this.props.peserta.level,
            location : this.props.peserta._location,
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
        this.props.updateData(this.props.muser._id, this.state);
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
                        {(this.props.rmuser.updated) ? <Message message={this.props.rmuser.message}
                                                                  onClose={this.handleCloseMessage.bind(this)}/> : ""}
                        <div className="form-group">
                            <button onClick={this.handleCloseForm.bind(this)} className="btn btn-primary"><span
                                className="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;Kembali
                            </button>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Username : </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="form-control"
                                    onChange={this.onTextChange.bind(this)}
                                    value={this.state.username}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="alamat"> Level :</label>
                                <select
                                    name="level"
                                    className="form-control"
                                    onChange={ this.onTextChange.bind(this) }
                                    value={ this.state.level }
                                >
                                    <option value=""> -- Pilih Level --</option>
                                    <option value="sh"> SH </option>
                                    <option value="reps"> REPS </option>
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

                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-warning"
                                disabled={ this.props.rmuser.updating }>
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
        rmuser : state.muser
    }
}

export default connect(mapStateToProps, {updateData, finishUpdate})(UpdateFormPeserta);