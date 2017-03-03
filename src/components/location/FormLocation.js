/**
 * Created by Dhanar J Kusuma on 28/02/2017.
 */
import React from 'react';


class FormLocation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'location_name' : ''
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
                    <label htmlFor="name"> Nama Lokasi :</label>
                    <input
                        type="text"
                        name="location_name"
                        className="form-control"
                        placeholder="Nama Lokasi"
                        onChange={this.onTextChange.bind(this)}
                        value={this.state.location_name}/>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        disabled={this.props.location.posting}
                        className="btn btn-primary"
                        >
                        { (this.props.location.posting) ? "Posting..." : "Tambah"  }
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

export default FormLocation;