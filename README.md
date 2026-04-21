# Amazon Clone 🛒

A full-stack Amazon clone built with the MERN stack (MongoDB, Express, React, Node.js) featuring user authentication, shopping cart functionality, and a beautifully designed, pixel-perfect UI.

## ✨ Features

- **Full-Stack Architecture**: Robust backend API built with Express and MongoDB, connected to a responsive React frontend.
- **User Authentication**: Secure Sign-in and Sign-up flows using JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Pixel-Perfect UI**: Carefully crafted UI using Tailwind CSS that closely mimics the real Amazon experience.
- **State Management**: Redux Toolkit used for managing global state like the shopping cart.
- **Product Management**: View products and add/remove them from the shopping cart.
- **Amazon Prime UI Clone**: A stunning, responsive replica of the Amazon Prime subscription page.

## 💻 Tech Stack

### Frontend
- **React.js** (built with Vite)
- **Tailwind CSS** for rapid and responsive styling
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Axios** for API requests
- **Material UI Icons** for Amazon-like iconography

### Backend
- **Node.js & Express.js** for the RESTful API
- **MongoDB & Mongoose** for database management
- **JWT (JSON Web Tokens)** for stateless authentication
- **Bcrypt.js** for secure password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB instance (local or Atlas)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd amazon-clone
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` folder and add your environment variables:
   ```env
   PORT=5000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### 4. View the App
Open [http://localhost:5173](http://localhost:5173) in your browser to see the application running. The backend API will be running on `http://localhost:5000`.

## 📁 Project Structure

```
amazon-clone/
├── Backend/               # Node.js + Express API
│   ├── src/
│   │   ├── controllers/   # Route controllers (user.controllers.js, etc.)
│   │   ├── middlewares/   # Custom middlewares (auth, error handling)
│   │   ├── models/        # Mongoose schemas (user.models.js, etc.)
│   │   ├── routes/        # API routes (user.routes.js, etc.)
│   │   └── app.js         # Express app configuration
│   └── .env               # Backend environment variables
│
└── Frontend/              # React Application
    ├── src/
    │   ├── api/           # API integration logic
    │   ├── assets/        # Images and static assets
    │   ├── components/    # Reusable UI components (Navbar, Auth, etc.)
    │   ├── redux/         # Redux setup (if applicable)
    │   ├── screen/        # Page level components (Home, Cart, Prime, etc.)
    │   ├── store/         # Redux store configuration
    │   ├── App.jsx        # Main application component & Routing
    │   └── main.jsx       # Entry point
    ├── package.json
    └── tailwind.config.js
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📝 License
This project is for educational purposes.
