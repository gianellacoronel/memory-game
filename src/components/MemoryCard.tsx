import type { Emoji } from "../interfaces/Emoji";
import { EmojiButton } from "./EmojiButton";

export default function MemoryCard({
  handleClick,
  data,
}: {
  handleClick: (name: string, index: number) => void;
  data: Emoji[];
}) {
  const cardEl = data.map((emoji: Emoji, index) => (
    <li key={index} className="card-item">
      <EmojiButton
        content={emoji}
        style="btn btn--emoji"
        handleClick={() => handleClick(emoji.name, index)}
      />
    </li>
  ));

  return <ul className="card-container">{cardEl}</ul>;
}
