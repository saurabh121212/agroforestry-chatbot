# 🌳 Agroforestry Advisor Chatbot

An AI-powered Agroforestry Advisor built using **React**, **Vite**, and **Google Gemini AI**. The chatbot assists farmers, students, researchers, and agroforestry practitioners by answering questions related to tree species selection, agroforestry systems, sustainable farming, forestry practices, and crop-tree integration.

---

## 📌 Project Overview

This project was developed as part of the **CIFOR-ICRAF Technical Assessment**.

The Agroforestry Advisor is a domain-specific AI chatbot designed to provide practical information on:

- Agroforestry systems
- Tree species selection
- Fruit trees
- Timber trees
- Shade trees
- Forestry practices
- Sustainable agriculture
- Moringa cultivation

The chatbot is intentionally restricted to agroforestry and farming-related topics to ensure focused and relevant responses.

---

## 🚀 Features

### AI-Powered Chatbot
Uses Google Gemini 2.5 Flash API to generate intelligent responses.

### Agroforestry Domain Restriction
Responds only to questions related to:

- Agroforestry
- Forestry
- Tree species
- Sustainable farming

### Quick Prompt Buttons

Built-in shortcuts for common queries:

- Shade Trees
- Moringa Care
- Fruit Trees

### Typing Animation

Bot responses appear gradually using a typewriter effect for a natural conversational experience.

### Auto Scrolling

Automatically scrolls to the latest message in the conversation.

### Welcome Screen

Displays guidance and example questions when the chat is empty.

### Responsive Design

Works on desktop, tablet, and mobile devices.

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- CSS3

### AI Integration

- Google Gemini 2.5 Flash API

---

## 📂 Project Structure

```text
src/
│
├── App.jsx
├── App.css
├── main.jsx
│
├── assets/
│
└── components/
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/agroforestry-advisor-chatbot.git
```

### 2. Navigate to Project Folder

```bash
cd agroforestry-advisor-chatbot
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Gemini SDK

```bash
npm install @google/generative-ai
```

### 5. Create Environment File

Create a file named:

```text
.env
```

Add your Gemini API key:

```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Obtaining a Gemini API Key

1. Visit Google AI Studio
2. Sign in with your Google account
3. Generate a new API key
4. Add the key to your `.env` file

Example:

```env
VITE_GEMINI_API_KEY=AIzaxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🤖 Prompt Engineering Strategy

The chatbot uses a custom prompt that:

- Restricts responses to agroforestry topics
- Limits responses to approximately 100 words
- Prevents markdown formatting
- Prevents tables and long lists
- Provides concise and practical recommendations

Example prompt:

```text
You are an Agroforestry Advisor chatbot.

Answer only agroforestry, forestry, tree species and farming-related questions.

Maximum 100 words.

No bullet points.
No markdown.
No tables.
```

---

## 🎨 User Interface Components

### Header Section

Displays:

```text
🌳 Agroforestry Advisor
AI Assistant for Trees, Agroforestry & Farming
```

### Quick Action Buttons

- Shade Trees
- Moringa Care
- Fruit Trees

### Chat Area

Displays:

- User messages
- AI responses
- Typing indicator
- Welcome screen

### Input Area

Allows users to:

- Enter custom questions
- Press Enter to send
- Click Send button

---

## Advanced Features

### Typewriter Effect

Responses are displayed word-by-word to simulate natural conversation.


### Loading State

Displays:

```text
🌳 Thinking...
```

while Gemini generates a response.

---

## 📋 Example Questions

### Tree Selection

```text
Best shade trees in Rajasthan?
```

### Fruit Trees

```text
Which fruit trees grow well in sandy soil?
```

### Agroforestry

```text
What are the benefits of agroforestry systems?
```

### Moringa

```text
How to grow Moringa in India?
```

---

## 🔒 Limitations

### Domain Restriction

The chatbot intentionally answers only:

- Agroforestry
- Forestry
- Tree Species
- Sustainable Farming

For unrelated questions, it responds:

```text
I can only assist with agroforestry, tree species, forestry, and farming-related questions.
```

### No External Agricultural Dataset

The chatbot currently relies on Gemini's general knowledge and prompt engineering.
---

## 📌 Assumptions

This project was developed as a prototype demonstration for the technical assessment.

Since no official agroforestry dataset was provided, recommendations and responses are generated using Google's Gemini AI model with domain-specific prompt engineering.

The chatbot is intended to demonstrate:

- AI integration
- Domain restriction
- User experience design
- Frontend development skills
- Practical application of AI in agriculture

rather than serving as a production-grade agricultural advisory system.

---

## 📸 Screenshots

Add screenshots inside a folder:

```text
screenshots/
├── home.png
├── chatbot.png
├── recommendations.png
```

Example:

```markdown
![Home Screen](screenshots/home.png)
```

---

## 👩‍💻 Author

Saurabh Saini


## ✅ Project Status

- ✅ Gemini AI Integrated
- ✅ Responsive Design
- ✅ Typing Animation
- ✅ Agroforestry Domain Restriction
- ✅ Quick Prompt Buttons