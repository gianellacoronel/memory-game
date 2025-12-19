import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import type { Emoji } from "./interfaces/Emoji";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<Emoji[]>([]);

  console.log(emojisData);
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

      const data: Emoji[] = await response.json();
      const dataSample: Emoji[] = data.slice(0, 5);

      setEmojisData(dataSample);
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
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}

export default App;
