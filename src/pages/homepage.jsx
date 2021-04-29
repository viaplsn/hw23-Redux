import { connect } from "react-redux"
import './homepage.css';
import Post from '../components/post/post.jsx'
import InputForm from '../components/inputform/input.jsx'

const Homepage = (props) => {
    const { posts } = props;
    return (
        <div className="main__container">
            <InputForm />
            <div className ="feed">
                {posts.map((post, index) => {
                    const { name, photo, nickname, date, content, image, likes, comments, reposts } = post;
                    if(name || photo || nickname || date || content || image || likes || comments || reposts) {
                        return <Post key={index} name={name} photo={photo} nickname={nickname} date={date} content={content} image={image} likes={likes} comments={comments} reposts={reposts} />
                    }
                    return null;
                })}
            </div>
        </div>
);
}

const mapStateToProp = (state) => (
    {
        posts: state.posts
    }
);

export default connect(mapStateToProp)(Homepage);