import React from "react";
import PropType from "prop-types";

class FooterLink extends React.Component {
    render() {
        const {onButtonEnter, linkTitle, footerLink, faClasses} = this.props;
        return (
            <a className="link-icon"
               onMouseEnter={() => onButtonEnter(linkTitle)}
               target="_blank"
               rel="noopener noreferrer"
               title={linkTitle}
               href={footerLink}>
                <i className={faClasses}/>
            </a>
        );
    }
}

FooterLink.propTypes = {
    onButtonEnter: PropType.func,
    linkTitle: PropType.string,
    footerLink: PropType.string,
    faClasses: PropType.string
}

export default FooterLink;