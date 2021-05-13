import { INIT_STATE } from "../../constant";
import { getPosts, getType, createPost, updatePost } from "../actions";

export default function postReducers(state = INIT_STATE.posts, action){
    switch(action.type){
        case getType(getPosts.getPostsRequest): 
            return{
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess): 
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailure): 
            return{
                ...state,
                isLoading: false
            }
        case getType(createPost.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case getType(updatePost.updatePostRequest):
            console.log("update request");
        case getType(updatePost.updatePostSuccess):
            console.log("update thanh cong");
            return {
                ...state,
                data: state.data.map((post) =>
                post._id === action.payload._id ? action.payload : post
                ),
            };
        case getType(updatePost.updatePostFailure):
            console.log("update khong thanh cong");
        default: 
            return state;
    }
}