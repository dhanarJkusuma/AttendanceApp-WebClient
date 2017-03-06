/**
 * Created by Dhanar J Kusuma on 28/02/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { getAuth } from  '../../actions/actionLogin';
import { changePassword, finishUpdate } from  '../../actions/actionUser';
import Message from '../Message';


class FormChangePassword extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            password : '',
            password_confirmation : '',
            not_equal : false,
            auth : {}
        }
    }

    componentDidMount(){
        this.setState({ auth : getAuth() });
    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    onHandleButtonSubmit(e){
        e.preventDefault();
        if(this.state.password === this.state.password_confirmation){
            console.log(this.state.auth);
            this.props.changePassword(this.state.auth._id, this.state);
        }else{
            this.setState({ not_equal : true })
        }
    }

    handleCloseMessage(){
        this.props.finishUpdate();
    }

    render(){
        return(
        <div className="col-md-12">
            {(this.props.rmuser.updated) ? <Message message={this.props.rmuser.message}
                                                    onClose={this.handleCloseMessage.bind(this)}/> : ""}
            <form className="form-horizontal" onSubmit={this.onHandleButtonSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="password"> Password :</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.onTextChange.bind(this)}
                        value={this.state.password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password Confirmation:</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        className="form-control"
                        placeholder="Password Confirmation"
                        onChange={ this.onTextChange.bind(this) }
                        value={ this.state.password_confirmation }/>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        disabled={this.props.rmuser.updating}
                        className="btn btn-primary"
                        >
                        { (this.props.rmuser.updating) ? "Posting..." : "Ganti Password"  }
                    </button>
                </div>
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




export default connect(mapStateToProps, { changePassword, finishUpdate })(FormChangePassword);