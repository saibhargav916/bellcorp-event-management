
Event Management Application
=> Overview

This is a full-stack Event Management Application built using the MERN stack. The platform allows users to browse events, register for events, and manage their registrations through a personalized dashboard.

The application demonstrates authentication, dynamic event discovery, pagination, filtering, and state management.

=> Tech Stack

Frontend:

React.js

React Router

Context API

Axios

Backend:

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcryptjs

Deployment:

Frontend: Vercel

Backend: Render

=> Features
Authentication

User registration

User login

JWT-based authentication

Protected dashboard route

Event Discovery

Browse all events

Search by name

Filter by category

Filter by location

Filter by date range

Pagination support

Dynamic available seats calculation

Event Management

Register for an event

Prevent duplicate registration

Capacity validation

Cancel registration

Dashboard

View registered events

Separate Upcoming and Past events

Real-time UI updates after cancellation

=> Project Structure
root/
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── seed.js
│   ├── server.js
│   └── .env
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md

=> How to Run Locally
1️ Clone Repository
git clone <your-repo-url>
cd bellcorp-event-management

2️ Setup Backend
cd server
npm install


Create a .env file inside server:

MONGO_URI=mongodb://localhost:27017/eventdb
JWT_SECRET=yourSecretKey
PORT=5000


Run backend:

npm run dev


Server runs on:

http://localhost:5000

3️ Seed Sample Data (Optional)
node seed.js

4️ Setup Frontend

Open new terminal:

cd client
npm install
npm start


Frontend runs on:

http://localhost:3000

=> Environment Variables

Backend (.env):

MONGO_URI=
JWT_SECRET=
PORT=


Frontend (for production):

REACT_APP_API_URL=

=> Database Relations

User ↔ Registration ↔ Event

One User can register for multiple Events.

One Event can have multiple Users.

Registration collection acts as a bridge (many-to-many relationship).


