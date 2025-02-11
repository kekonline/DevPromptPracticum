import { useState, useEffect } from "react";
import "./App.css";

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

  const handleGenerate = () => setPrompt("Hello World");

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
    </div>
  );
}

export default App;
