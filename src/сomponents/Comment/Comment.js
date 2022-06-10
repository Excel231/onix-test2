import React from "react";
import "./styles.css";
import PropType from "prop-types";

const Comment = ({fullName, photoName, text, styleType}) => {
    return (
        <ul className={"comment-list " + styleType}>
            <li className={"comment-preview"}>
                <img
                    className={"comment-photo"}
                    src={require("../../images/commentator-photos/" + photoName)}
                    alt={fullName}
                />
                <h3 className={"comment-name"}>{fullName}</h3>
            </li>
            <li className={"comment-text"}>
                <i>{`"${text}"`}</i>
            </li>
        </ul>
    )
}

Comment.propTypes = {
    fullName: PropType.string,
    photoName: PropType.string,
    text: PropType.string,
    styleType: PropType.string
}

export default Comment;