/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';

class ItemUser extends React.Component{

    handleDelete(){
        this.props.onDeleteClick(this.props.user);
    }

    handleUpdate(){
        this.props.onUpdateClick(this.props.user);
    }

    render(){
        return (
            <tr>
                <td>{ this.props.index }</td>
                <td>{ this.props.user.username }</td>
                <td>
                    <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-warning" onClick={this.handleUpdate.bind(this)}>
                            <span className="glyphicon glyphicon-pencil"></span>&nbsp;Edit
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