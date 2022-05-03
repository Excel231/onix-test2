import React from "react";

export class FooterLink extends React.Component {
    render() {
        return (
            <a className="link-icon" 
                target="_blank" 
                rel="noreferrer"
                title={this.props.linkTitle}
                href={this.props.footerLink}>
                <i className={this.props.faClasses}></i>
            </a>
        );
    };
};