# Memories app

Social media project

### Features

- Full CRUD implementation (Create post, update post, get posts, remove post)
- Authentication (Users can login, register)
- Authorization (Only authenticated users can work with posts).
- Semi responsive design

### Technologies used

- MongoDB
- Nodejs express framework for backend
- Reactjs + Redux for frontend
- MaterialUI for prettier user interface


### Project structure
#### Backend

- server/controllers
- server/models : MongoDB models for users and posts
- server/middleware : for authentication (only requests with valid token can access protected routes)
- server/routes : routes


