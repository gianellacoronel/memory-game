import RegularButton from "./RegularButton";

export default function GameOver({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="wrapper wrapper--accent">
      <p className="p--large">You've matched all the memory cards!</p>
      <RegularButton handleClick={handleClick}>Play Again</RegularButton>
    </div>
  );
}
