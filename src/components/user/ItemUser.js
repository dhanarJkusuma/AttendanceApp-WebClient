/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';

class ItemUser extends React.Component{

    handleDelete(){
        this.props.onDeleteClick(this.props.muser);
    }

    handleUpdate(){
        this.props.onUpdateClick(this.props.muser);
    }

    handleChPassword(){
        this.props.onChPassClick(this.props.muser);
    }

    render(){

        return (
            <tr>
                <td>{ this.props.index }</td>
                <td>{ this.props.muser.username }</td>
                <td>{ this.props.muser.level }</td>
                <td>{ (this.props.muser.reps !== null && this.props.muser.reps!== '') ? this.props.muser.reps.name : <p><i>Not Available</i></p> }</td>
                <td>
                    <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-warning" onClick={this.handleUpdate.bind(this)}>
                            <span className="glyphicon glyphicon-pencil"></span>&nbsp;Edit
                        </button>
                        <button type="button" className="btn btn-info" onClick={this.handleChPassword.bind(this)}>
                            <span className="glyphicon glyphicon-asterisk"></span>&nbsp;Ganti Password
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this)}>
                            <span className="glyphicon glyphicon-trash"></span>&nbsp;Hapus
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ItemUser;