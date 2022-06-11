import React, {useEffect, useState} from "react";
import CommentsSectionView from "./CommentsSectionView";

const COMMENTS_API_LINK = "https://62a1ede4cd2e8da9b0fec808.mockapi.io/api/comments/comments";

const CommentsSection = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(COMMENTS_API_LINK)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    return (
        <CommentsSectionView comments={comments}/>
    )
}

export default CommentsSection;