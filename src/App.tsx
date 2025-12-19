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
      const random = Math.random() * emojisData.length;

      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature",
      );
      if (!response.ok) {
        throw new Error("Error fetching Emoji API");
      }

      const data: Emoji[] = await response.json();
      const dataSample: Emoji[] = data.slice(random, random + 5);

      console.log(getRandomIndices(data));
      setEmojisData(dataSample);
      setIsGameOn(true);
    } catch (e) {
      console.error(e);
    }
  }

  function getRandomIndices(data: Emoji[]): number[] {
    const randomIndicesArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      //The Math.random() function returns a pseudo-random floating-point number, ranging from 0 to less than 1 (i.e., including 0 but not 1).
      //Math.floor(Math.random()) to get always 0, and Math.random() * data.length to get random numbers equivalent to the data's length.
      const randomNum = Math.floor(Math.random() * data.length);
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        i--; //We do this because if randomNum is already inside array, we have to do an extra loop
      }
    }

    return randomIndicesArray;
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
