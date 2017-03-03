/**
 * Created by Dhanar J Kusuma on 25/02/2017.
 */
import React from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { verifiedToken } from '../actions/actionLogin';
import { browserHistory } from 'react-router';

class Login extends React.Component{

    componentDidMount(){
        this.props.verifiedToken();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.authenticated === true) {
            browserHistory.push('/dashboard');
        }
    }

    render(){
         return (
             (this.props.auth.authenticating) ? <h1>Loading...</h1> : <LoginForm/>
         );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.login
    };
}

export default connect(mapStateToProps,{ verifiedToken })(Login);