# 💬 Full Stack Realtime Chat App

A modern full-stack realtime chat application built with the MERN stack. Users can register, log in securely, exchange realtime messages, upload profile pictures, and communicate instantly using Socket.IO.

## 🚀 Live Demo

**Application:** https://fullstack-realtime-chat-app-1-yzbr.onrender.com

---

## ✨ Features

* 🔐 User authentication with JWT
* 🍪 Secure authentication using HTTP-only cookies
* 💬 Realtime messaging with Socket.IO
* 👥 User sidebar with online status
* 🖼️ Profile picture upload using Cloudinary
* 🌙 Light & Dark theme support
* 📱 Responsive UI
* 🔒 Protected API routes
* ☁️ MongoDB Atlas database
* 🚀 Deployed on Render

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* React Router
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT Authentication
* Cookie Parser
* Cloudinary
* CORS

---

## 📂 Project Structure

```text
chat-web-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yashBaraiya-tech/fullstack-realtime-chat-app.git
cd chat-web-app
```

### Install dependencies

```bash
npm run build
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

---

## ▶️ Running Locally

### Start the backend

```bash
cd backend
npm start
```

### Start the frontend

```bash
cd frontend
npm run dev
```

---

## 🚀 Deployment

This project is deployed on **Render**.

Build Command:

```bash
npm run build
```

Start Command:

```bash
npm run start
```

---


## 📸 Screenshots

<table>
  <tr>
    <td align="center">
      <strong>Login</strong><br>
      <img src="./screenshot//login page.png" width="450">
    </td>
    <td align="center">
      <strong>Signup</strong><br>
      <img src="./screenshot/signup page.png" width="450">
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Chat</strong><br>
      <img src="./screenshot/home page.png" width="450">
    </td>
    <td align="center">
      <strong>Profile</strong><br>
      <img src="./screenshot//profile page.png" width="450">
    </td>
  </tr>
</table>


---


## 👨‍💻 Author

**Yash Baraiya**

GitHub: https://github.com/yashBaraiya-tech

LinkedIn: https://www.linkedin.com/in/yash-baraiya-gec-ldce-it/


