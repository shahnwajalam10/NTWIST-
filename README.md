📋 Task Manager - Full Stack Application
A full-featured task management system with authentication, task scheduling, and an interactive Gantt chart. Built using the MERN stack with a responsive frontend and secure backend.

🚀 Features
🔧 Frontend
🖥️ Responsive UI with React 18 + Vite

🔐 JWT Authentication with Context API

📋 Task Management Dashboard

📊 Interactive Gantt Chart using date-fns

🎨 Styled with CSS Variables

🔙 Backend

🚀 Express.js REST API

🔒 Secure JWT Authentication

🛡️ Protected Routes Middleware

📅 Task Scheduling Logic

🧩 MongoDB Models via Mongoose


🛠️ Tech Stack


Frontend
React 18

Vite

React Router v6

Context API

Axios

Date-fns

Backend
Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Tokens (JWT)

Bcrypt.js

CORS



📁 Project Structure
Frontend

task-manager-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskCard.jsx
│   │   └── GanttChart.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── .env
├── package.json
└── vite.config.js



Backend
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── utils/
│   └── generateToken.js
├── .env
├── package.json
└── server.js


🧪 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone 
cd task-manager
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB credentials
npm start
3. Frontend Setup
bash
Copy
Edit
cd ../task-manager-frontend
npm install
cp .env.example .env
# Set VITE_API_BASE_URL to your backend URL
npm run dev
📚 API Documentation
🔐 Authentication
Endpoint	Method	Description	Request Body
/api/auth/register	POST	Register new user	{ username, email, password }
/api/auth/login	POST	Login user	{ email, password }

📋 Tasks
Endpoint	Method	Description	Request Body
/api/tasks	GET	Get all tasks	-
/api/tasks	POST	Create task	{ title, description, status, startDate, endDate }
/api/tasks/:id	PUT	Update task	{ title, description, status }
/api/tasks/:id	DELETE	Delete task	-

⚙️ Configuration
Frontend .env
bash
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
Backend .env
ini
Copy
Edit
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
🚀 Deployment
🔙 Backend
bash
Copy
Edit
cd backend
npm install
npm run build # (if applicable)
npm start
🖥️ Frontend
bash
Copy
Edit
cd task-manager-frontend
npm install
npm run build

