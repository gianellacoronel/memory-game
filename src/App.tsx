import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  async function startGame(
    e: React.FormEvent<HTMLInputElement>,
  ): Promise<void> {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature",
      );
      if (!response.ok) {
        throw new Error("Error fetching Emoji API");
      }

      const data = await response.json();
      console.log(data);
      setIsGameOn(true);
    } catch (e) {
      console.error(e);
    }
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
