/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import React from 'react';
import NavigationBar from '../components/NavigationBar';
class DashboardMain extends React.Component{
    render(){
        return (
            <div>
                <NavigationBar/>
                    { this.props.children }
            </div>
        )
    }
}

export default DashboardMain;