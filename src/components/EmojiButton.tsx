import { decodeEntity } from "html-entities";
import type { Emoji } from "../interfaces/Emoji";

export function EmojiButton({
  content,
  style,
  handleClick,
}: {
  content: Emoji;
  style: string;
  handleClick: () => void;
}) {
  return (
    <button className={style} onClick={handleClick}>
      {decodeEntity(content.htmlCode[0])}
    </button>
  );
}
