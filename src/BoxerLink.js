import React from "react";

export class BoxerLink extends React.Component {
    render() {
        return (
            <a className="boxer-link" 
                target="_blank" 
                href={this.props.boxerSite} 
                rel="noreferrer"> {this.props.boxerName}
            </a>
        );
    };
};