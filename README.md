# My Chat Server

## Introduction

A real-time chat application built with the **MERN stack** and **Socket.io**. It allows users to communicate instantly through text and supports file sharing such as images, videos, and audio. The system provides secure user authentication and authorization, along with both one-to-one and group chat functionality. An Admin Dashboard is included for managing users and monitoring activities, making the platform scalable and well-suited for community or organizational use.

---

### 🔑 Features

- Real-time messaging with Socket.io
- file like image, video, audio sharing
- Secure user authentication & authorization
- One-to-one and group chat support
- Admin Dashboard

---

## Technology Stack

- Node.js & Express.js
- MongoDB & Mongoose
- Socket.io
- JWT (Authentication & Authorization)
- Multer & Cloudinary

---

## Installation Guide

Follow these steps to set up locally.

### **Prerequisites**

- Node.js installed
- Code editor (e.g., VS Code)

1. **Clone the backend repository**

   ```bash
   git clone https://github.com/md-suhag/my-chat-server.git
   ```

2. **Navigate to the server directory**

   ```bash
   cd my-chat-server
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create environment variables**  
   Create a `.env` file in the server root directory and add:

```markdown
DB_URI= your_db_url
JWT_SECRET= your_secret
NODE_ENV = PRODUCTION
ADMIN_SECRET_KEY= your_admin_secret // this is for login in admin panel

CLIENT_URL =your_client_url

CLOUDINARY_CLOUD_NAME= your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

5. **Run the backend**
   ```bash
   npm run dev
   ```

---

## Api Endpoints

### User APIs

| Method | Endpoint                   | Description                |
| ------ | -------------------------- | -------------------------- |
| POST   | /api/v1/user/new           | Register a new user        |
| POST   | /api/v1/user/login         | User login                 |
| GET    | /api/v1/user/me            | Get logged-in user profile |
| GET    | /api/v1/user/logout        | Logout user                |
| GET    | /api/v1/user/search        | Search users               |
| PUT    | /api/v1/user/sendrequest   | Send friend request        |
| PUT    | /api/v1/user/acceptrequest | Accept friend request      |
| GET    | /api/v1/user/notifications | Get user notifications     |
| GET    | /api/v1/user/friends       | Get user friends list      |

### Chat APIs

| Method | Endpoint                  | Description                   |
| ------ | ------------------------- | ----------------------------- |
| POST   | /api/v1/chat/new          | Create new group chat         |
| GET    | /api/v1/chat/my           | Get user's chats              |
| GET    | /api/v1/chat/my/groups    | Get user's group chats        |
| PUT    | /api/v1/chat/addmembers   | Add members to group          |
| PUT    | /api/v1/chat/removemember | Remove member from group      |
| DELETE | /api/v1/chat/leave/:id    | Leave group chat              |
| POST   | /api/v1/chat/message      | Send message with attachments |
| GET    | /api/v1/chat/message/:id  | Get messages of a chat        |
| GET    | /api/v1/chat/:id          | Get chat details              |
| PUT    | /api/v1/chat/:id          | Rename group chat             |
| DELETE | /api/v1/chat/:id          | Delete chat                   |

### Admin APIs

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| POST   | /api/v1/admin/verify   | Admin login              |
| GET    | /api/v1/admin/logout   | Admin logout             |
| GET    | /api/v1/admin/         | Get admin dashboard data |
| GET    | /api/v1/admin/users    | Get all users            |
| GET    | /api/v1/admin/chats    | Get all chats            |
| GET    | /api/v1/admin/messages | Get all messages         |
| GET    | /api/v1/admin/stats    | Get dashboard stats      |

---

## Demo credentials

username: User <br>
password: User5

---

## Thank You

Happy coding! 💻
