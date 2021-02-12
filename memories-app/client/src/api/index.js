import axios from 'axios';
const API = axios.create({baseURL: `http://localhost:5000`});
const url = `http://localhost:5000`;
API.interceptors.request.use((req)=>{
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    return req;
})

export const fetchPosts = () => axios.get(`${url}/posts`);

export const createPost = (newPost) => API.post('/posts',newPost);

export const updatePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likepost`);

export const register = (newUser) => axios.post(`${url}/register`,newUser);

export const login = (user) => axios.post(`${url}/login`,user);