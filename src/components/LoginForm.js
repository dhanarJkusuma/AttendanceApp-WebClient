/**
 * Created by Dhanar J Kusuma on 26/02/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { doLogin, verifiedToken } from '../actions/actionLogin';
import { browserHistory } from 'react-router'



class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.authenticated === true) {
            browserHistory.push('/dashboard');
        }
    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.doLogin(this.state.username, this.state.password);
    }

    render(){
        return (
            <div className="col-md-4 col-md-offset-4 col-xs-12 form-login">
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">
                                <span className="glyphicon glyphicon-user"></span>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                aria-describedby="basic-addon1"
                                onChange={this.onTextChange.bind(this)}
                                value={this.state.username}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">
                                <span className="glyphicon glyphicon-asterisk"></span>
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                aria-describedby="basic-addon1"
                                onChange={this.onTextChange.bind(this)}
                                value={this.state.password}/>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-danger btn-block"
                        disabled={this.props.auth.authenticating}>
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.login
    };
}

export default connect(mapStateToProps,{doLogin, verifiedToken})(LoginForm);
