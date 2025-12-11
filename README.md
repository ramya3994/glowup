🌟 GlowUp – Daily Small Wins Tracker

GlowUp is a full-stack application that helps users track daily achievements, analyze mood patterns, and stay motivated.
Built with Spring Boot, MySQL, React.js, Vite, Chart.js, and Docker.

🧠 Why I Built GlowUp

To showcase complete full-stack development skills:

REST API design (CRUD)

Modern React UI with charts

MySQL data modeling

Docker containerization

Clean and professional GitHub project structure

🚀 Tech Stack
Frontend

React.js (Vite)

Axios

Chart.js

Custom CSS (responsive UI)

Backend

Java 17

Spring Boot

Spring Data JPA

Hibernate ORM

Database

MySQL

MySQL Workbench

Tools

IntelliJ

VS Code

Git & GitHub

Docker Desktop

✨ Features
🔹 Daily Wins Management

Add wins

Edit wins

Delete wins

View all wins

🔹 Smart Filters

Filter by date

Filter by category

Clear filters

🔹 Analytics Dashboard

Pie Chart → Wins by Category

Bar Chart → Mood Trend by Date

🔹 Modern UI

Responsive layout

Clean visuals

Smooth interactions

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

📡 Backend REST APIs

✔ Base URL → http://localhost:8082/api/wins

Method	Endpoint	Description
GET	/api/wins	Fetch all wins
POST	/api/wins	Add new win
PUT	/api/wins/{id}	Update win
DELETE	/api/wins/{id}	Delete win
🐳 Running with Docker

From project root folder:

Start All Containers
docker compose up --build

Stop
docker compose down

Stop + Delete MySQL Data
docker compose down -v


✔ Frontend → http://localhost:5173

✔ Backend → http://localhost:8082

✔ MySQL → localhost:3306

🔧 Run Without Docker
Backend
cd glowup-backend
mvn spring-boot:run


Backend runs at http://localhost:8082

Frontend
cd glowup-frontend
npm install
npm run dev


Frontend runs at http://localhost:5173

📸 Screenshots

(Add your screenshots here)

🛠 Future Enhancements

JWT authentication

Weekly streaks

Export wins as PDF

Dark mode

Mobile app version

🏆 Badges
![Java](https://img.shields.io/badge/Java-17-blue)
![Spring Boot](https://img.shields.io/badge/SpringBoot-4.0-green)
![React](https://img.shields.io/badge/React-Vite-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![Docker](https://img.shields.io/badge/Docker-Compose-blue)

🎉 Final Notes

GlowUp demonstrates:

✔ Real full-stack experience
✔ REST API design
✔ Frontend charts + filters
✔ Docker deployment
✔ Clean code + folder structure

Perfect for resumes, GitHub portfolio, and job interviews.
