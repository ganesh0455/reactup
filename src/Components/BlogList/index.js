import { Component } from "react";
import BlogItem from "../BlogItem";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css"

class BlogList extends Component{

    state={
        blogsData:[],
        isLoading:true
    }

    getBlogsData=async ()=>{
        const response=await fetch("https://apis.ccbp.in/blogs")
        const data=await response.json();
        // console.log(data);
        const updatedData=data.map(eachItem=>({
            id:eachItem.id,
            title:eachItem.title,
            imageUrl:eachItem.image_url,
            avatarUrl:eachItem.avatar_url,
            author:eachItem.author,
            topic:eachItem.topic
        }))
        this.setState({
            blogsData:updatedData,
            isLoading:false
        })
    }

    componentDidMount(){
        this.getBlogsData();
    }

    render(){
        const {blogsData,isLoading}=this.state;
        // console.log(blogsData);
        return(
            <div className="blog-list-container">
                {isLoading ?<div className="loading">Loading.....</div>:
                // <Loader type="TailSpin" color="$000BFFF" height={50} width={50} /> :
                blogsData.map(item=>{
                    return <BlogItem blogData={item} key={item.id} />
                })}
            </div>
        )
    }
}

export default BlogList;