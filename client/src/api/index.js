import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);
export const deletePost = (payload) => axios.post(`${URL}/posts/delete`, payload);
export const login = (payload) => axios.post(`${URL}/login`, payload);
export const register = (payload) => axios.post(`${URL}/register`, payload);