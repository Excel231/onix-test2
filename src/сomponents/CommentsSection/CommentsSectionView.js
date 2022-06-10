import React from "react";
import Comment from "../Comment/Comment"
import "./styles.css";
import PropType from "prop-types";

const CommentsSectionView = ({comments}) => {
    return (
        <div id={"commentContainer"}>
            <h2 className={"section-title"}>Comments from famous people</h2>
            {comments.map(({id, fullName, photoName, text}) => {
                return (
                    <Comment
                        key={id}
                        fullName={fullName}
                        photoName={photoName}
                        text={text}
                        styleType={id % 2 === 0 ? "left-aligned" : "right-aligned"}
                    />
                );
            })}
        </div>
    )
}

CommentsSectionView.propTypes = {
    comments: PropType.array
}

export default CommentsSectionView;