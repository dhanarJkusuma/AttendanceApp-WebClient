/**
 * Created by Dhanar J Kusuma on 01/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { updateData, finishUpdate } from '../../actions/actionKloter';

import Message from '../Message';
class UpdateFormKloter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            kloter_name : this.props.kloter.name
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
        this.props.updateData(this.props.kloter._id, this.state.kloter_name);
    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }


    render(){
        return (
            <div className="col-md-12">
                {(this.props.rkloter.updated) ? <Message message={this.props.rkloter.message} onClose={this.handleCloseMessage.bind(this)}/>  : ""}
                <div className="form-group">
                    <button onClick={this.handleCloseForm.bind(this)} className="btn btn-primary"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;&nbsp;Kembali</button>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Nama : </label>
                        <input
                            type="text"
                            name="kloter_name"
                            placeholder="Nama Kloter"
                            className="form-control"
                            onChange={this.onTextChange.bind(this)}
                            value={this.state.kloter_name}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={this.props.rkloter.updating}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        rkloter : state.kloter
    }
}

export default connect(mapStateToProps, {updateData, finishUpdate})(UpdateFormKloter);