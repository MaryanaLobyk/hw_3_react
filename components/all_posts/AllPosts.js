import React, {Component} from 'react';
import Post from "../post/Post";
import PostService from "../../services/PostService";

class AllPosts extends Component {
    postService = new PostService();

    state = {posts: [], chooseOne: null}

    componentDidMount() {
        this.postService.getAllPost().then(value => this.setState({posts: value}));
    }

    selectById = (id) => {
        this.postService.getPostById(id).then(value => this.setState({chooseOne: value}))
    }


    render() {
        let {posts, chooseOne} = this.state
        return (
            <div>
                {
                    posts.map(post => {
                        return (<Post item={post} key={post.id} selectById={this.selectById}/>)
                    })
                }

                {
                    chooseOne && <h2>{chooseOne.id} - {chooseOne.title}</h2>
                }
            </div>
        );
    }

}

export default AllPosts;