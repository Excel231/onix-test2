import React from "react";
import Comment from "../Comment/Comment"
import "./styles.css";

const CommentsSectionView = ({comments}) => {
    return (
        <div id={"comment-container"}>
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

export default CommentsSectionView;