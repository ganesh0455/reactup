import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import SingleComment from "./Comment";

class CommentsApp extends Component {

    state={
        name:"",
        comment:"",
        commentsList:[],
        wantYouRenderLikedComments:false,
        timeCount:0
    }

    onChangeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    onChangeComment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    onSbmitCommentDetails=(event)=>{
        event.preventDefault();
        const {name,comment,commentsList}=this.state;
        const length=commentsList.length+1;
        const newComment={
            uniqueNumber:length,
            name,
            comment,
            isLiked:false,
            timeCount:0
        }
        if(name!=="" && comment!==""){
            this.setState((prevState)=>({
                name:"",
                comment:"",
                commentsList:[newComment,...prevState.commentsList]
            }))
                this.timerId=setInterval(() => {
                    this.setState((prevState)=>({
                        timeCount:prevState.timeCount+1
                    }))
                }, 60000);
            toast.success("Comment Added Successfully");
        }
        else{
            toast.error("Please fill name or comment fields")
        }
    }

    doLikeComment=(id)=>{
        this.setState((prevState)=>({
            commentsList:prevState.commentsList.map((eachComment)=>{
                if(eachComment.uniqueNumber===id){
                    return {...eachComment,isLiked:!eachComment.isLiked}
                }
                return eachComment;
            })
        }))
    }

    doDeleteComment=(id)=>{
        const {commentsList}=this.state;
        const filterCommentsAfterDelete=commentsList.filter((eachComment)=>{
            return eachComment.uniqueNumber !== id
        })
        this.setState({
            commentsList:filterCommentsAfterDelete
        })
    }

    onGetLikedComments=()=>{
        const {wantYouRenderLikedComments}=this.state;
        this.setState({
            wantYouRenderLikedComments:!wantYouRenderLikedComments
        })
    }

    render(){
        const {name, comment, commentsList,wantYouRenderLikedComments,timeCount} = this.state;
        const filterLikedComments=commentsList.filter((eachComment)=>{
            return eachComment.isLiked===true;
        })

        const sendComments=wantYouRenderLikedComments?filterLikedComments:commentsList;
        
        const changeClass=wantYouRenderLikedComments?"like-color":"like";

        return(
            <div className="comments-app-container">
                <h2>Comments</h2>
                <p>Say somthing about your work</p>
                <div className="form-img">
                    <form onSubmit={this.onSbmitCommentDetails} className="form-conatiner">
                        <input
                            className="input-comment" 
                            type="text"
                            value={name}
                            onChange={this.onChangeName}
                            placeholder="Enter the name" 
                        />
                        <textarea 
                            className="comment-text"
                            cols="30" 
                            rows="5"
                            value={comment}
                            onChange={this.onChangeComment}
                            placeholder="Enter comment"
                        >

                        </textarea>
                        <button className="add-comment-btn">Add Comment</button>
                    </form>
                    <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" />
                </div>
                <div className="comment-count-container">
                    <div className="count-comment-liked">
                        <div className="count-comment">
                            <p className="comment-count">{sendComments.length}</p>
                            <p>Comments</p>
                        </div>
                        <button className={changeClass} onClick={this.onGetLikedComments}>Liked</button>
                    </div>
                    <div className="comments-container">
                        {sendComments.map((eachComment)=>{
                            return <SingleComment 
                                        key={eachComment.uniqueNumber} 
                                        eachComment={eachComment} 
                                        doLikeComment={this.doLikeComment} 
                                        doDeleteComment={this.doDeleteComment}
                                        timeCount={timeCount}
                                    />
                        })}
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default CommentsApp;