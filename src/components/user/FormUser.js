/**
 * Created by Dhanar J Kusuma on 28/02/2017.
 */
import React from 'react';
import Loader from '../Loader';

class FormUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'username' : '',
            'password' : '',
            'level' : '',
            'location' : ''
        };
    }

    componentDidMount(){
        this.props.onPrepareData();
    }


    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    onHandleButtonSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    render(){
        if(this.props.data.preparing){
            return (
                <Loader/>
            )
        }else{
            if(!this.props.data.preparing && this.props.data.prepared){
                return(
                    <div className="col-md-12">
                        <form className="form-horizontal" onSubmit={this.onHandleButtonSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name"> Username :</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Username"
                                    onChange={this.onTextChange.bind(this)}
                                    value={this.state.username}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"> Password :</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={ this.onTextChange.bind(this) }
                                    value={ this.state.password }
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="level"> Level :</label>
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
                                    {
                                        this.props.data.idata.location.map(function(location, i){
                                            return (
                                                <option value={ location._id } key={ i }>{ location.name }</option>
                                            )
                                        }, this)
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    disabled={ this.props.muser.posting }
                                    className="btn btn-primary"
                                >
                                    { (this.props.muser.posting) ? "Posting..." : "Tambah"  }
                                </button>
                            </div>
                        </form>
                    </div>
                );
            }
            else{
                return (
                    <Loader/>
                )
            }

        }
    }
}

export default FormUser;