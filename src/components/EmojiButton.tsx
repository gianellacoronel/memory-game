export function EmojiButton({
  content,
  selectedCardEntry,
  matchedCardEntry,
  style,
  handleClick,
}: {
  content: string;
  selectedCardEntry: { name: string; index: number } | undefined;
  matchedCardEntry: { name: string; index: number } | undefined;
  style: string;
  handleClick: () => void;
}) {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";
  return (
    <button className={style} onClick={handleClick}>
      {btnContent}
    </button>
  );
}
