import {takeLatest, call, take, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

//yield giong synce await
function* fetchPostSaga(){
    try{
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    }catch(err){
        console.error(err);
        yield put(actions.getPosts.getPostsFailure(err));
    }
}

function* createPostSaga(action) {
    try {
      const post = yield call(api.createPost, action.payload);
      yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
      console.error(err);
      yield put(actions.createPost.createPostFailure(err));
    }
  }
  
  function* updatePostSaga(action) {
    try {
      const updatedPost = yield call(api.updatePost, action.payload);
      yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (err) {
      console.error(err);
      yield put(actions.updatePost.updatePostFailure(err));
    }
  }

  function* deletePostSaga(action) {
    try {
      const deletePost = yield call(api.deletePost, action.payload);
      yield put(actions.deletePost.deletePostSuccess(deletePost.data));
    } catch (err) {
      console.error(err);
      yield put(actions.deletePost.deletePostFailure(err));
    }
  }

  function* loginSaga(action) {
    try {
      const login = yield call(api.login, action.payload);
      yield put(actions.login.loginSuccess(login.data));
    } catch (err) {
      console.error(err);
      yield put(actions.login.loginFailure(err));
    }
  }

  function* registerSaga(action) {
    try {
      const register = yield call(api.register, action.payload);
      yield put(actions.register.registerSuccess(register.data));
    } catch (err) {
      console.error(err);
      yield put(actions.register.registerFailure(err));
    }
  }


function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
    yield takeLatest(actions.login.loginRequest, loginSaga);
    yield takeLatest(actions.register.registerRequest, registerSaga);

}

//generator funcion es6

export default mySaga;