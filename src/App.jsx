import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logoFinal.png";


const languages = ["C", "C#", "C++", "Go", "Java", "JavaScript", "Kotlin", "Python", "Rust", "Swift", "TypeScript"]
const patterns = [
  "Abstract Factory",
  "Adapter (Wrapper)",
  "Bridge",
  "Builder",
  "Chain of Responsibility",
  "Command",
  "Composite",
  "Decorator",
  "Facade",
  "Factory Method",
  "Flyweight",
  "Interpreter",
  "Iterator",
  "Mediator",
  "Memento",
  "Observer (Publish-Subscribe)",
  "Prototype",
  "Proxy",
  "Singleton",
  "State",
  "Strategy",
  "Template Method",
  "Visitor",
]


function App() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("Java");
  const [style, setStyle] = useState("Object Oriented Programming");
  const [topic, setTopic] = useState("Abstract Factory");

  const handleGenerate = () => {
    const originalPrompt = "You are an expert coding instructor who teaches best practices and essential concepts every developer should know. I will ask you to demonstrate a specific design pattern in a programming language of my choice. You will provide a clear example, explaining why and how it is used. Afterward, you will give me a coding challenge that requires applying the same pattern. When I share my solution, you will review it, pointing out what is correct and what could be improved. However, you will not provide the exact solution; instead, you will offer guidance on aspects to focus on or areas that may need more attention based on your initial example."
    const choice = `${topic} in ${language}` + (style ? ` in ${style}` : "");

    setPrompt(`${originalPrompt} ${choice}`);
  };

  useEffect(() => {
    if (["Java", "C#"].includes(language)) {
      setStyle("Object Oriented Programming");
    } else if (["Go", "C"].includes(language)) {
      setStyle("");
    }
  }, [language, style]);

  const handleCopy = () => navigator.clipboard.writeText(prompt);

  return (
    <div className="container">
      <div className="logo-box">
        <img src={logo} alt="Logo" />
      </div>
      <div className="output-box">
        <span>{prompt || "Your prompt will appear here..."}</span>
        {prompt && (
          <button className="copy-btn" onClick={handleCopy}>
            Copy Prompt
          </button>
        )}
      </div>

      <select className="dropdown" onChange={(e) => setLanguage(e.target.value)} value={language}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      <select
        className="dropdown"
        onChange={((e) => setStyle(e.target.value))}
        value={style}
        disabled={["Go", "C"].includes(language)}
      >
        {["Object Oriented Programming", "Functional Programming"].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select className="dropdown" onChange={(e) => setTopic(e.target.value)} value={topic}>
        {patterns.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <button className="generate-btn" onClick={handleGenerate}>
        Generate Prompt
      </button>
      <div className="instruction-box">
        <span>{"Copy and paste the generated prompt into ChatGPT and follow the process. Hope you enjoy the learning!"}</span>

      </div>
    </div>
  );
}

export default App;
