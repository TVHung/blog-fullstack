import {createActions, createAction} from 'redux-actions'

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,                     //lay ta ca post
    getPostsSuccess: (payLoad) => payLoad,          //tra ve du lieu
    getPostsFailure: (err) => err                   //tra ve loi
});

export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err,
});

    export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');