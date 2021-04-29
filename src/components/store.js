import { createStore } from "redux";
import RonnieRadke from '../assets/images/RonnieRadke.jpg'



const posts = [
    {
        name: "Ronnie Radke",
        photo: RonnieRadke,
        nickname: "@RonnieRadke",
        date: new Date().toLocaleString("ua", {month: 'long', day: 'numeric'}),
        content: "Hope you’ve enjoyed the show, time for the encore.",
        image: "https://i.ytimg.com/vi/sRAG2NG5bkQ/maxresdefault.jpg",
        likes: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
        comments: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
        reposts: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    }
];

const initialState = {
    posts: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load_post':
            return {
                ...state,
                posts
            };
        case 'adding_post':
            return {
                ...state,
                posts: posts.concat(posts.push(action.payload))
            };
        default:
            return state;
    }
}

export const loadPosts = () => (
    {
        type: 'load_post',
    }
);

export const addingPost = (post) => (
    {
        type: 'adding_post',
        payload: post
    }
);

const store = createStore(reducer);

export default store;