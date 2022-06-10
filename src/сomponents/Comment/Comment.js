import React from "react";
import "./styles.css";

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

export default Comment;