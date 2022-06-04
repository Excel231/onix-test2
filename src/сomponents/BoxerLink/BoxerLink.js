import React from "react";
import PropType from "prop-types";

class BoxerLink extends React.Component {
    render() {
        const {boxerSite, boxerName} = this.props;
        return (
            <a className={"boxer-link"}
               target="_blank"
               href={boxerSite}
               rel="noopener noreferrer">{boxerName}
            </a>
        );
    }
}

BoxerLink.propTypes = {
    boxerSite: PropType.string,
    boxerName: PropType.string
}

export default BoxerLink;