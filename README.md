# CosmoChat 🌌

CosmoChat is a simple AI chat application built with **React** and **Node.js/Express**. It provides a clean chat interface where users can send messages and receive AI-generated responses through a backend API.

## ✨ Features

* 💬 Interactive chat interface
* 🤖 AI-powered responses
* ⚡ React frontend
* 🚀 Express/Node.js backend
* 🔐 API key stored securely in environment variables
* ⏳ Loading/typing indicator while waiting for a response
* 📱 Responsive design for smaller screens
* 🔌 Frontend and backend communicate through a REST API

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* CSS
* Create React App

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### AI

* Google Gemini API

---

## 📁 Project Structure

```text
cosmochatui/
│
├── app/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## 🔄 How It Works

CosmoChat uses a frontend/backend architecture.

```text
User
  │
  ▼
React Chat Interface
  │
  │ POST /api/chat
  ▼
Express Backend
  │
  │ Gemini API request
  ▼
Google Gemini
  │
  │ AI response
  ▼
Express Backend
  │
  │ JSON response
  ▼
React Chat Interface
  │
  ▼
User sees AI response
```

The API key is kept on the **backend** rather than being exposed in the React frontend.

---

## 🔐 Environment Variables

Create a `.env` file in the **root folder** of the project:

```env
GEMINI_API_KEY=your_api_key_here
PORT=5000
```

### Important

Do **not** commit your `.env` file to GitHub.

Your `.gitignore` should contain:

```gitignore
.env
node_modules/
```

If an API key is accidentally exposed publicly, revoke it and create a new one.

---

## 📦 Installation

Clone the repository and enter the project directory:

```bash
git clone <your-repository-url>
cd cosmochatui
```

Install the dependencies:

```bash
npm install
```

---

## ▶️ Running the Application

CosmoChat requires both the backend and frontend development servers.

### 1. Start the backend

Open a terminal in the project root:

```bash
node server.js
```

You should see:

```text
CosmoChat API running at http://localhost:5000
```

### 2. Start the React frontend

Open another terminal:

```bash
npm start
```

If port `5000` is already being used by the backend, React may automatically start on another port such as:

```text
http://localhost:5001
```

Open the displayed localhost URL in your browser.

---

## 🧪 Testing the Backend

You can test whether the backend is running by opening:

```text
http://localhost:5000
```

You should receive:

```json
{
  "message": "CosmoChat API is running"
}
```

You can also test the chat endpoint using PowerShell:

```powershell
$body = @{
    message = "Hello CosmoChat"
} | ConvertTo-Json

Invoke-WebRequest `
    -Uri http://localhost:5000/api/chat `
    -Method POST `
    -ContentType "application/json" `
    -Body $body `
    -UseBasicParsing
```

A successful request should return a JSON response containing a `reply`.

---

## 💬 Chat API

### Endpoint

```text
POST /api/chat
```

### Request

```json
{
  "message": "Hello CosmoChat"
}
```

### Response

```json
{
  "reply": "Hello! How can I help you today?"
}
```

---

## 🖥️ Frontend

The main chat interface is implemented in:

```text
src/App.jsx
```

The styling is implemented in:

```text
src/App.css
```

The frontend sends messages to:

```text
http://localhost:5000/api/chat
```

and displays the returned AI response in the chat window.

---

## 🎨 UI

CosmoChat currently includes:

* Gradient header
* Online status indicator
* User and AI message bubbles
* Scrollable conversation area
* Message input
* Send button
* Loading state while the AI is responding
* Responsive mobile layout

---

## 🚧 Current Limitations

This is currently a development project, so some production features are not yet implemented.

Possible future improvements include:

* 💾 Conversation history
* 👤 User accounts
* 🌙 Dark mode
* 🗂️ Multiple conversations
* 📝 Markdown rendering for AI responses
* 💻 Code syntax highlighting
* 📎 File uploads
* 🎙️ Voice input
* 🔊 Text-to-speech
* ⚙️ AI model/settings controls
* 🛡️ Authentication and rate limiting
* ☁️ Deployment to a production server

---

## 🚀 Future Vision

CosmoChat can be expanded from a basic AI chat interface into a more complete personal AI assistant.

Potential additions include:

```text
CosmoChat
│
├── AI Chat
├── Conversation History
├── User Accounts
├── File Uploads
├── Voice Interaction
├── Custom AI Instructions
├── Model Selection
└── Personal Assistant Features
```

---

## 📚 What This Project Demonstrates

This project demonstrates how a modern web application can connect a React frontend to an AI-powered backend.

It covers concepts such as:

* React state management
* Event handling
* API requests with `fetch`
* REST API design
* Express.js servers
* Environment variables
* Frontend/backend communication
* Asynchronous JavaScript
* Error handling
* Responsive CSS
* AI API integration

---

## 📄 License

This project is intended for learning and personal development.

---

## 👩‍💻 Author

**Isha**

Built as a personal AI project while learning and experimenting with React, Node.js, APIs, and AI integration.
