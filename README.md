# E-Commerce MERN Project

E-Mart a ssustainable full-stack e-commerce application built using the MERN stack with a modern TypeScript backend and a React-based frontend.

## Tech Stack

### Frontend

* React
* TypeScript
* Modern UI generated using Lovable
* API integration with backend
* tailwind css + html

### Backend

* Node.js
* Express.js
* TypeScript
* REST APIs

### Database

* MongoDB (via Mongoose)

---

# Project Structure

```
project-root
│
├── frontend        # React frontend application
│
├── backend         # Express + TypeScript backend API
│
└── README.md

```

---

# Features

* User authentication
* Product listing
* Cart management
* Order processing
* REST API architecture
* Modular backend structure

---

# Backend Architecture

The backend follows a production-ready modular architecture.

```
backend
│
├── config          # Database and environment configuration
├── controllers     # Route controllers
├── middlewares     # Authentication and custom middleware
├── routes          # API routes
├── services        # Business logic
├── utils           # Utility functions
└── server.ts       # Server entry point
```

---

# Getting Started

## Clone the Repository

```
git clone https://github.com/anjalideshmukh969/Typescript.git
```

```
cd Typescript
```

---

# Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# Backend Setup

```
cd backend
npm install
npm run dev
```

Backend server will run on:

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

Example:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```


# Future Improvements

* Payment gateway integration
* Product management
* Order tracking
* Deployment with CI/CD

---

# Author

Anjali Deshmukh
