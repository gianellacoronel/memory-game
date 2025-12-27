import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import type { Emoji } from "./interfaces/Emoji";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import GameOver from "./components/GameOver";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<Emoji[]>([]);
  const [selectedCards, setSelectedCards] = useState<
    {
      name: string;
      index: number;
    }[]
  >([]);
  const [matchedCards, setMatchedCards] = useState<
    { name: string; index: number }[]
  >([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState<boolean>(false);

  console.log(selectedCards);

  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        ...selectedCards,
      ]);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (emojisData.length && matchedCards.length === emojisData.length) {
      setAreAllCardsMatched(true);
    }
  }, [matchedCards]);

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
      const dataSlice: Emoji[] = getDataSlice(data);
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (e) {
      console.error(e);
    }
  }

  function getDataSlice(data: Emoji[]) {
    const randomIndices = getRandomIndices(data);

    const dataSlice: Emoji[] = randomIndices.map(
      (randomIndice) => data[randomIndice],
    );

    return dataSlice;
  }

  function getEmojisArray(data: Emoji[]): Emoji[] {
    const pairedEmojisArray: Emoji[] = [...data, ...data];

    //Fisher–Yates shuffle Algorithm based on the video
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }

    return pairedEmojisArray;
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

  function turnCard(name: string, index: number): void {
    if (selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index },
      ]);
    } else if (selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && !areAllCardsMatched && (
        <AssistiveTechInfo
          emojisData={emojisData}
          matchedCards={matchedCards}
        />
      )}
      {areAllCardsMatched && <GameOver />}
      {isGameOn && (
        <MemoryCard
          handleClick={turnCard}
          data={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
    </main>
  );
}

export default App;
