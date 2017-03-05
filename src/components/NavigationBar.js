/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import { getAuth, doLogout } from '../actions/actionLogin';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class NavigationBar extends React.Component{

    handleLogout(){
        this.props.doLogout();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login.authenticated === false) {
            browserHistory.push('/');
        }
    }

    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="dashboard">Absen</Link>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="kloter">Kloter</Link></li>
                            <li><Link to="lokasi">Lokasi</Link></li>
                            <li><Link to="peserta">Peserta</Link></li>
                            <li><Link to="user">User</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    { ( this.props.login.user !== null) ? this.props.login.user.username : "" } &nbsp;&nbsp;
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a onClick={ this.handleLogout.bind(this) }><span className="glyphicon glyphicon-off"></span>&nbsp;&nbsp;&nbsp;Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        login : state.login
    }
}

export default connect(mapStateToProps, { getAuth, doLogout })(NavigationBar);