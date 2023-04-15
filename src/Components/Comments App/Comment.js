import { Component } from "react";

class SingleComment extends Component {

    onLikeComment=()=>{
        const {eachComment,doLikeComment}=this.props;
        const {uniqueNumber}=eachComment;
        doLikeComment(uniqueNumber);
    }

    onDeleteComment=()=>{
        const {eachComment,doDeleteComment}=this.props;
        const {uniqueNumber}=eachComment;
        doDeleteComment(uniqueNumber);
    }

    render(){
        const {eachComment,timeCount}=this.props;
        let timeMessage;
        timeMessage=timeCount<1?"less than a minute":
                    timeCount===1?`${timeCount} minute`:`${timeCount} minutes`;
        // console.log(eachComment);
        const {name,comment,isLiked}=eachComment;
        const unLikedImage="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";
        const likedImage="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png";
        const renderLikeImg=isLiked?likedImage:unLikedImage;
        const deleteImage="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        return(
            <div className="single-comment-div">
                <div className="profile-div">
                    <p className="profile">{name.charAt(0)}</p>
                    <div>
                        <div className="name-time">
                            <h3 className="name">{name}</h3>
                            <p className="timeMessage">{timeMessage} ago</p>
                        </div>
                        <p>{comment}</p>
                    </div>
                </div>
                <div className="like-del">
                    <button onClick={this.onLikeComment} className="likeButton">
                        <img src={renderLikeImg} alt="unLiked" />
                    </button>
                    <button onClick={this.onDeleteComment} className="delete-btn">
                        <img src={deleteImage} alt="delete" />
                    </button>
                </div>
            </div>
        )
    }
}

export default SingleComment;