/**
 * Created by Dhanar J Kusuma on 01/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { updateData, finishUpdate } from '../../actions/actionUser';
import Loader from '../Loader';

import Message from '../Message';
class UpdateFormUser extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username : this.props.muser.username,
            level : this.props.muser.level,
            reps : (this.props.muser.reps !== null) ? this.props.muser.reps._id : '',
            isNotReps : (this.props.muser.reps !== null) ? false : true,
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
        if(e.target.name === 'level'){
            if(e.target.value !== 'reps'){
                this.setState({ 'reps' : '', isNotReps : true });
            }else{
                this.setState({ 'reps' : '', isNotReps : false });
            }
        }
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
                                <label htmlFor="location"> Reps :</label>
                                <select
                                    name="location"
                                    className="form-control"
                                    onChange={ this.onTextChange.bind(this) }
                                    value={ this.state.reps }
                                    disabled={ this.state.isNotReps }
                                >
                                    <option value=""> -- Pilih Reps --</option>
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

export default connect(mapStateToProps, {updateData, finishUpdate})(UpdateFormUser);