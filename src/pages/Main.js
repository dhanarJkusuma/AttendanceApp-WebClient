import React from 'react';

class Main extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="page-content-inner">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Main;