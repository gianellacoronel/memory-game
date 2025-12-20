import type { Emoji } from "../interfaces/Emoji";
import { EmojiButton } from "./EmojiButton";

export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}: {
  handleClick: (name: string, index: number) => void;
  data: Emoji[];
  selectedCards: { name: string; index: number }[];
  matchedCards: { name: string; index: number }[];
}) {
  const cardEl = data.map((emoji: Emoji, index: number) => {
    const selectedCardEntry = selectedCards.find(
      (card) => card.index === index,
    );
    const matchedCardEntry = matchedCards.find((card) => card.index === index);

    return (
      <li key={index} className="card-item">
        <EmojiButton
          content={emoji}
          style="btn btn--emoji"
          handleClick={() => handleClick(emoji.name, index)}
        />
      </li>
    );
  });
  return <ul className="card-container">{cardEl}</ul>;
}
