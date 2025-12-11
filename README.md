🌟 GlowUp – Daily Small Wins Tracker

GlowUp is a full-stack application that helps users track daily achievements, analyze mood patterns, and stay motivated.
Built with Spring Boot, MySQL, React.js, Vite, Chart.js, and Docker.

🧠 Why I Built GlowUp

To showcase end-to-end full-stack development:

REST API design (CRUD)

Modern React UI with charts

MySQL database modeling

Docker containerization

Clean GitHub project structure

Perfect for Java Full-Stack Developer roles.

🚀 Tech Stack
Frontend

React.js (Vite)

Axios

Chart.js

Modern CSS

Backend

Java 17

Spring Boot

Spring Data JPA

Hibernate ORM

Database

MySQL

MySQL Workbench

Tools

IntelliJ IDEA

VS Code

Git & GitHub

Docker Desktop

✨ Features
🔹 Daily Wins Management

Add a new win

Edit win

Delete win

View all wins

🔹 Smart Filters

Filter by date

Filter by category

Clear filters instantly

🔹 Analytics Dashboard

Pie Chart: Wins by category

Bar Chart: Average mood by date

🔹 Clean Modern UI

Fully responsive

Beautiful visuals

Smooth UX

🗂 Project Structure
glowup/
 ├── glowup-backend/
 │    ├── src/main/java/com/example/glowup_backend/
 │    ├── src/main/resources/application.properties
 │    ├── Dockerfile
 │
 ├── glowup-frontend/
 │    ├── src/
 │    ├── package.json
 │    ├── Dockerfile
 │
 ├── docker-compose.yml
 ├── README.md

🧱 App Architecture
  React (5173)
        │
        ▼
Spring Boot API (8080)
        │
        ▼
    MySQL DB (3306)

🐳 Run with Docker (Recommended)

From project root:

Start All Services
docker compose up --build

Stop
docker compose down

Stop + Remove DB Data
docker compose down -v


✔ Frontend → http://localhost:5173

✔ Backend → http://localhost:8080

✔ MySQL → localhost:3306

🔧 Run Without Docker
Backend
cd glowup-backend
mvn spring-boot:run

Frontend
cd glowup-frontend
npm install
npm run dev

📡 Backend REST APIs
Method	Endpoint	Description
GET	/api/wins	Get all wins
POST	/api/wins	Add a new win
PUT	/api/wins/{id}	Update a win
DELETE	/api/wins/{id}	Delete a win
📸 Screenshots

(Add screenshots here)

🛠 Future Enhancements

Login + JWT Authentication

Weekly streak tracker

Export data to PDF

Google login

Dark mode

🏆 Badges
![Java](https://img.shields.io/badge/Java-17-blue)
![Spring Boot](https://img.shields.io/badge/SpringBoot-4.0-green)
![React](https://img.shields.io/badge/React-Vite-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![Docker](https://img.shields.io/badge/Docker-Compose-blue)

🎉 Conclusion

GlowUp is a modern, production-ready full-stack project showcasing:

✔ Spring Boot APIs
✔ MySQL database
✔ React dashboards
✔ Docker deployment
✔ Clean UI + charts

Perfect for portfolio, interviews, and resume.
