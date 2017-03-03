/**
 * Created by Dhanar J Kusuma on 28/02/2017.
 */
import React from 'react';


class FormKloter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'kloter_name' : ''
        };
    }

    onTextChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    onHandleButtonSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state);
    }

    render(){
        return(
        <div className="col-md-12">
            <form className="form-horizontal" onSubmit={this.onHandleButtonSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name"> Nama Kloter :</label>
                    <input
                        type="text"
                        name="kloter_name"
                        className="form-control"
                        placeholder="Nama Kloter"
                        onChange={this.onTextChange.bind(this)}
                        value={this.state.kloter_name}/>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        disabled={this.props.kloter.posting}
                        className="btn btn-primary"
                        >
                        { (this.props.kloter.posting) ? "Posting..." : "Tambah"  }
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

export default FormKloter;