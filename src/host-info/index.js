import React from 'react';
import './host-info.css';

class HostInfo extends React.Component {

    constructor(props) {
        super(props);
        this.data = {
            hostname: 'hkw1234567.whatever.net'
        }
    }

    render() {
        return (
            <div className="host-info">
                <div>
                    <div className="header">
                        {this.data.hostname}
                    </div>
                    <div className="status healthy">
                        sdf
                    </div>
                </div>
                <div className="details">
                </div>
            </div>
        );
    }
}

export default HostInfo;
