import type { Emoji } from "../interfaces/Emoji";

export default function AssistiveTechInfo({
  emojisData,
  matchedCards,
}: {
  emojisData: Emoji[];
  matchedCards: { name: string; index: number }[];
}) {
  return (
    <section className="sr-only" aria-live="polite" aria-atomic="true">
      <h2>Game Status</h2>
      <p>Number of matched pairs: {matchedCards.length / 2}</p>
      <p>
        Number of cards left to match: {emojisData.length - matchedCards.length}
      </p>
    </section>
  );
}
