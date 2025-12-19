import type { Emoji } from "../interfaces/Emoji";
import { decodeEntity } from "html-entities";

export default function MemoryCard({
  handleClick,
  data,
}: {
  handleClick: () => void;
  data: Emoji[];
}) {
  const emojiEl = data.map((emoji: Emoji, index) => (
    <li key={index} className="card-item">
      <button className="btn btn--emoji" onClick={handleClick}>
        {decodeEntity(emoji.htmlCode[0])}
      </button>
    </li>
  ));

  return <ul className="card-container">{emojiEl}</ul>;
}
