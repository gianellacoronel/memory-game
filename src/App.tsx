import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  function startGame(): void {
    setIsGameOn(true);
  }

  function turnCard(): void {
    console.log("Memory card clicked");
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} />}
    </main>
  );
}

export default App;
