import { Component } from 'react'
import "./index.css"

class BlogItemDetails extends Component {

    state={
        blogData:{}
    }

    getBlogItemData=async ()=>{
        // console.log(this.props);
        const {match}=this.props;
        // console.log(match);
        const {params}=match;
        const {id}=params;
        // console.log(id);
        const response=await fetch(`https://apis.ccbp.in/blogs/${id}`);
        // console.log(response.json());
        const data=await response.json();
        console.log("++++++++++++",data);
        const updatedData={
            id:data.id,
            title:data.title,
            imageUrl:data.image_url,
            avatarUrl:data.avatar_url,
            author:data.author,
            topic:data.topic,
            content:data.content
        }
        // console.log(updatedData);
        this.setState({blogData:updatedData});
    }

    componentDidMount(){
        this.getBlogItemData();
    }

    render() {
        const {blogData} = this.state;
        const {id, title, imageUrl, avatarUrl, author, content}=blogData;
        return (
            <div className='blog-item-container'>
                <h2>{title}</h2>
                <div className='img-div'>
                    <img className='avathar-img' src={avatarUrl} alt={author+id}/>
                    <p>{author}</p>
                </div>
                <img className='img-main' src={imageUrl} alt={author+id}/>
                <p>{content}</p>
            </div>
        )
    }
}

export default BlogItemDetails