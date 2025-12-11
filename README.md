🌟 GlowUp – Daily Small Wins Tracker

A full-stack productivity application that helps users track small daily achievements, understand mood patterns, and stay motivated.
Built using Spring Boot, React + Vite, MySQL, Docker, Chart.js, and a clean modern UI.

📌 Table of Contents

✨ Overview

🚀 Features

🧠 Tech Stack

📊 Dashboard Preview

🗄 API Endpoints

📦 Folder Structure

🐳 Running with Docker

▶️ Running Locally (Without Docker)

📸 Screenshots

🔮 Future Enhancements

📜 License

✨ Overview

GlowUp helps users log their daily small wins, track progress over time, and visualize patterns through charts.
The application is fully Dockerized with separate containers for:

Backend (Spring Boot ✓)

Frontend (React + Vite ✓)

MySQL Database ✓

🚀 Features
🔹 Win Management (CRUD)

Add win (task name, category, mood rating, notes)

Edit win

Delete win

View all wins

🔹 Smart Filters

Filter wins by date

Filter wins by category

Clear filters

🔹 Analytics Dashboard

Uses Chart.js to generate:

🥧 Pie Chart: Wins by Category

📊 Bar Chart: Average Mood by Date

🔹 Responsive UI

Clean layout

Mobile-friendly

Smooth interactions

🧠 Tech Stack
Frontend

React.js

Vite

Chart.js

Custom CSS

Backend

Java 17

Spring Boot 3+

Spring Data JPA

MySQL Connector

Hibernate ORM

Database

MySQL 8

Tools

IntelliJ IDEA

VS Code

Docker & Docker Compose

📊 Dashboard Preview

(Add your screenshot here)

Example:
/screenshots/dashboard.png

🗄 API Endpoints
Base URL:
http://localhost:8082/api/wins

GET – Fetch all wins
GET /api/wins

POST – Add a new win
POST /api/wins

PUT – Update win
PUT /api/wins/{id}

DELETE – Delete win
DELETE /api/wins/{id}

📦 Folder Structure
glowup/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── charts/
│   └── ...
│
│── glowup-backend/
│   ├── src/main/java/com/example/glowup
│   ├── controller/
│   ├── service/
│   ├── repository/
│   └── entity/
│
│── screenshots/
│── docker-compose.yml
│── README.md

🐳 Running with Docker
1️⃣ Build & Run all containers
docker compose up --build

2️⃣ Access services

🔹 Backend: http://localhost:8082/api/wins

🔹 Frontend: http://localhost:5173/

🔹 MySQL: localhost:3307

3️⃣ Stop containers
docker compose down

▶️ Running Locally (Without Docker)
Backend
cd glowup-backend
mvn spring-boot:run

Frontend
cd frontend
npm install
npm run dev

📸 Screenshots

(Add all screenshots inside /screenshots/ folder)

Example:

/screenshots/dashboard.png

🔮 Future Enhancements

User authentication (JWT)

Dark mode UI

Weekly/Monthly mood trend charts

Export insights as PDF

Streak tracking

Mobile app version

📜 License

This project is licensed under the MIT License.
See the LICENSE file for details.

✅ Status: Production-Ready

This project is complete, fully functional, and deployable using Docker.
