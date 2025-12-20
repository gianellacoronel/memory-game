export function EmojiButton({
  content,
  selectedCardEntry,
  matchedCardEntry,
  handleClick,
}: {
  content: string;
  selectedCardEntry: { name: string; index: number } | undefined;
  matchedCardEntry: { name: string; index: number } | undefined;
  handleClick: () => void;
}) {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";

  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
      ? "btn--emoji__back--selected"
      : "btn--emoji__front";

  return (
    <button className={`btn btn--emoji ${btnStyle}`} onClick={handleClick}>
      {btnContent}
    </button>
  );
}
