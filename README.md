# 🚀 Full-Stack Intern Assignment

A complete full-stack web application built using **React + TypeScript (Frontend)** and **Node.js + Prisma (Backend)** based on a provided **Figma design**.

---

## 🎯 Objective

Build a full-stack app with:

- 🎨 A pixel-perfect frontend based on a Figma design  
- 🔐 A backend using Node.js and Prisma with a simple User schema  
- ✅ Modern tools like TypeScript, React Query, Zod, and React Hook Form  
- 🧠 Clean architecture, error handling, and type safety

---

## 🧱 Project Structure


---

## 🖥️ Frontend Requirements

### 🎨 Figma Design Conversion
- Convert the Figma design into a functional UI using React + TypeScript.

### 🧩 Structure
- **UI Components**: Modular & reusable components matching design
- **Business Logic**: Custom hooks or utils for logic separation
- **API Handling**: Efficient API communication layer

### 🔧 Tech Stack
- 🧪 **TypeScript** – Type safety
- ⚛️ **React** – UI library
- 🔁 **React Query** – Data fetching and caching
- 📝 **React Hook Form** – Form management
- 🛡 **Zod** – Form & input validation

### 🧠 Type Safety
- Define interfaces for API responses and form data
- Enforce types throughout the app for safer coding

### ❗ Error Handling
- API errors handled with toast/popups or UI messages
- User-friendly and visible error display

---

## 🔧 Backend Requirements

### 🔨 Stack
- 🟢 Node.js with **TypeScript**
- 🧬 **Prisma ORM** for DB modeling
- 🔐 Password hashing with **bcrypt**
- 🌐 Express.js for routing

### 📐 Prisma Schema

```prisma
model User {
  id       String @id @default(uuid())
  email    String @unique
  password String
}
📂 Structure
Controllers: Logic for each route

Routes: Express route handlers

Middlewares: Centralized error handling

Utils: Reusable helper functions

⚠️ Error Handling
Custom error classes

Express error middleware to return consistent API errors

📝 README Requirements
Each project (/frontend, /backend) must include a README with:

📦 Setup instructions

⚙️ Environment variable setup

▶️ How to run the project locally

🛠️ Overview of tech stack & file structure

📹 Video Demonstration
💡 Required for submission!

🎬 Record a video showing:

✅ Fully working frontend and backend

⚠️ API error handling (invalid inputs, backend errors)

📋 Walkthrough of core features

🔗 Share the video via a Google Drive link

⛔ No video = immediate disqualification

📁 GitHub Repository
One public repository:

Copy
Edit
fullstack-intern-assignment/
├── frontend/
└── backend/
Must be public or shared with reviewers

Deployment not required — local functionality is enough

✅ Evaluation Criteria

✔️ Criteria	Description
🎨 UI Accuracy	Matches Figma
🧠 TypeScript Usage	Across frontend & backend
🧰 Library Integration	Zod, RHF, React Query
🔧 Backend Schema	Prisma User model
🗂 Clean Structure	Modular & organized
⚠️ Robust Error Handling	In both frontend & backend
📹 Video Quality	Clear demo of features & errors
🧼 Code Quality	Readable & best practices
📌 Notes
The app must be fully functional with no major bugs

Focus on:

✨ Code clarity

📦 Reusability

📚 Documentation