import React, {useEffect, useState} from "react";
import CommentsSectionView from "./CommentsSectionView";

const CommentsSection = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://62a1ede4cd2e8da9b0fec808.mockapi.io/api/comments/comments")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setComments(data);
            })
    }, []);

    return (
        <CommentsSectionView comments={comments}/>
    )
}

export default CommentsSection;