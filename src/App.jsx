import { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { useRef, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [chat]);

  const typeMessage = async (fullText) => {
  const words = fullText.split(" ");

  let currentText = "";

  for (let i = 0; i < words.length; i++) {
    currentText += words[i] + " ";

    setChat((prev) => {
      const updated = [...prev];

      updated[updated.length - 1] = {
        sender: "bot",
        text: currentText,
      };

      return [...updated];
    });

    await new Promise((resolve) =>
      setTimeout(resolve, 40)
    );
  }
};

const sendMessage = async (quickQuestion = null) => {
  const userMessage = quickQuestion || message;

  if (typeof userMessage !== "string") {
  console.error("userMessage is not a string:", userMessage);
  return;
}

if (!userMessage.trim()) return;
  setLoading(true);
  const updatedChat = [
    ...chat,
    {
      sender: "user",
      text: userMessage,
    },
  ];

  setChat(updatedChat);

  if (!quickQuestion) {
    setMessage("");
  }

  // setLoading(true);

  try {
    const prompt = `
You are an Agroforestry Advisor chatbot.

IMPORTANT INSTRUCTIONS:
1. Answer in a single paragraph.
2. Maximum 100 words.
3. No bullet points.
4. No numbered lists.
5. No markdown.
6. No headings.
7. No tables.
8. Be concise and practical.
9. Answer only agroforestry, tree species, forestry, and farming topics.
10. For unrelated questions reply exactly:
"I can only assist with agroforestry, tree species, forestry, and farming-related questions."

User Question:
${userMessage}
`;

const result = await model.generateContent(prompt);

const response = await result.response;
const text = response.text();

        // Add empty bot message first
        setChat([
          ...updatedChat,
          {
            sender: "bot",
            text: "",
          },
        ]);

        // Type message word by word
        setLoading(false);
        await typeMessage(text);
  } catch (error) {
    console.error(error);
    setLoading(false);
    setChat([
      ...updatedChat,
      {
        sender: "bot",
        text: "Sorry, I am unable to process your request at the moment.",
      },
    ]);
  }

  setLoading(false);
};

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

  return (
    <div className="container">
      {/* <div className="header">
        <h1>🌳 Agroforestry Advisor</h1>
        <p>AI Assistant for Trees, Agroforestry & Farming</p>
      </div> */}

                  <div className="quick-prompts">
            <button onClick={() => sendMessage("Best shade trees in India")}>
              🌳 Shade Trees
            </button>

            <button onClick={() => sendMessage("How to grow Moringa?")}>
              🌱 Moringa Care
            </button>

            <button onClick={() => sendMessage("Best fruit trees for agroforestry")}>
              🍎 Fruit Trees
            </button>
          </div>

              <div className="chat-box">

              {chat.length === 0 ? (
    <div className="welcome-screen">
      <div className="welcome-icon">🌳</div>

      <h2>Welcome to Agroforestry Advisor</h2>

      <p>
        Ask questions about tree species,
        agroforestry systems and farming.
      </p>
    </div>
  ) : (
    <>
      {chat.map((msg, index) => (
        <div
          key={index}
          className={
            msg.sender === "user"
              ? "message user-message"
              : "message bot-message"
          }
        >
          {msg.text}
        </div>
      ))}
    </>
  )}

                {loading && (
          <div className="message bot-message typing">
            🌳 Thinking...
          </div>
        )}
       
      </div>

      <div ref={chatEndRef}></div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask about agroforestry..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={() => sendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;