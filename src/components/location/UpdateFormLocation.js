/**
 * Created by Dhanar J Kusuma on 01/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { updateData, finishUpdate } from '../../actions/actionLocation';

import Message from '../Message';
class UpdateFormLocation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            location_name : this.props.location.name
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
        this.props.updateData(this.props.location._id, this.state.location_name);
    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }


    render(){
        return (
            <div className="col-md-12">
                {(this.props.rlocation.updated) ? <Message message={this.props.rlocation.message} onClose={this.handleCloseMessage.bind(this)}/>  : ""}
                <div className="form-group">
                    <button onClick={this.handleCloseForm.bind(this)} className="btn btn-primary"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;Kembali</button>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Nama Lokasi : </label>
                        <input
                            type="text"
                            name="location_name"
                            placeholder="Nama Lokasi"
                            className="form-control"
                            onChange={this.onTextChange.bind(this)}
                            value={this.state.location_name}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={this.props.rlocation.updating}>
                        { (this.props.rlocation.updating) ? "Posting..." : "Simpan"  }
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        rlocation : state.location
    }
}

export default connect(mapStateToProps, {updateData, finishUpdate})(UpdateFormLocation);