import { decodeEntity } from "html-entities";
import type { Emoji } from "../interfaces/Emoji";

export function EmojiButton({
  emoji,
  selectedCardEntry,
  matchedCardEntry,
  handleClick,
  index,
}: {
  emoji: Emoji;
  selectedCardEntry: { name: string; index: number } | undefined;
  matchedCardEntry: { name: string; index: number } | undefined;
  handleClick: () => void;
  index: number;
}) {
  const btnContent =
    selectedCardEntry || matchedCardEntry
      ? decodeEntity(emoji.htmlCode[0])
      : "?";

  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
      ? "btn--emoji__back--selected"
      : "btn--emoji__front";

  const btnAria = matchedCardEntry
    ? `${decodeEntity(emoji.name)}. Matched.`
    : selectedCardEntry
      ? `${decodeEntity(emoji.name)}. Not matched yet.`
      : "Card upside down";

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : handleClick}
      disabled={matchedCardEntry}
      aria-label={`Position ${index + 1}: ${btnAria}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
}
