/**
 * Created by Dhanar J Kusuma on 28/02/2017.
 */
import React from 'react';
import Loader from '../Loader';

class FormPeserta extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'name' : '',
            'alamat' : '',
            'kloter' : ''
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
                                <label htmlFor="name"> Nama Peserta :</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Nama Peserta"
                                    onChange={this.onTextChange.bind(this)}
                                    value={this.state.kloter_name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="alamat"> Alamat :</label>
                                <textarea
                                    name="alamat"
                                    placeholder="Alamat"
                                    className="form-control"
                                    onChange={ this.onTextChange.bind(this) }
                                    value={ this.state.alamat }
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="kloter"> Kloter :</label>
                                <select
                                    name="kloter"
                                    className="form-control"
                                    onChange={ this.onTextChange.bind(this) }
                                    value={ this.state.kloter }
                                >
                                    <option value=""> -- Pilih Kloter --</option>
                                    {
                                        this.props.data.idata.kloter.map(function(kloter, i){
                                            return (
                                                <option value={ kloter._id } key={ i }>{ kloter.name }</option>
                                            )
                                        }, this)
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    disabled={this.props.peserta.posting}
                                    className="btn btn-primary"
                                >
                                    { (this.props.peserta.posting) ? "Posting..." : "Tambah"  }
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

export default FormPeserta;