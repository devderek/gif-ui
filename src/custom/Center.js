import React from 'react'
import './Center.css'

/**
 * Simple component to center something in a container.
 */
export default class Center extends React.Component {
    render() {
        return(
            <div className="center" id={this.props.id}>{this.props.children}</div>
        )
    };
}