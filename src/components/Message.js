/**
 * Created by Dhanar J Kusuma on 01/03/2017.
 */
import React from 'react';

class Message extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show : true,
        };
    }

    handleClose(){
        this.setState({ show : false });
        this.props.onClose();
    }

    render(){
        if(this.state.show){
            return (
                <div className="alert alert-info alert-dismissible" role="alert">
                    <button
                        onClick={ this.handleClose.bind(this) }
                        type="button"
                        className="close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    { this.props.message }
                </div>
            );
        }else{
            return (
                <div className="alert-closed"></div>
            )
        }

    }    
    
}

export default Message;
