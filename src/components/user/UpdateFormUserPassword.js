/**
 * Created by Dhanar J Kusuma on 06/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { changePassword, finishUpdate } from '../../actions/actionUser';

import Message from '../Message';
class UpdateFormUserPassword extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            password : '',
            password_confirmation : '',
            not_equal : false
        }
    }

    handleCloseForm(){
        this.props.onClose();
    }

    handleCloseMessage(){
        this.props.finishUpdate();
    }

    handleCloseError(){

    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.password === this.state.password_confirmation){
            this.props.changePassword(this.props.muser._id, this.state);
        }else{
            this.setState({ not_equal : true })
        }

    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }


    render(){
        return (
            <div>
                {(this.props.rmuser.updated) ? <Message message={this.props.rmuser.message}
                                                        onClose={this.handleCloseMessage.bind(this)}/> : ""}

                {(this.state.not_equal) ? <Message message="Password dan Password Konfirmasi tidak sama."
                                                        onClose={this.handleCloseError.bind(this)}/> : ""}

                <div className="form-group">
                    <button onClick={this.handleCloseForm.bind(this)} className="btn btn-primary"><span
                        className="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;Kembali
                    </button>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Password : </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password "
                            className="form-control"
                            onChange={this.onTextChange.bind(this)}
                            value={this.state.password}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password Konfirmasi : </label>
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Password Konfirmasi"
                            className="form-control"
                            onChange={this.onTextChange.bind(this)}
                            value={this.state.password_confirmation}
                        />
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

    }

}

function mapStateToProps(state){
    return {
        rmuser : state.muser
    }
}

export default connect(mapStateToProps, { changePassword, finishUpdate })(UpdateFormUserPassword);