/**
 * Created by Dhanar J Kusuma on 06/03/2017.
 */
import React from 'react';
import FormChangePassword from '../components/change_password/FormChangePassword';

class ChangePassword extends React.Component{



    render(){
        return (
            <div>
                <h3 className="page-header">Menu Ganti Password</h3>
                <FormChangePassword />
            </div>
        );
    }
}

export default ChangePassword;