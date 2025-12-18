import RegularButton from "./RegularButton";

export default function Form({ handleSubmit }: { handleSubmit: () => void }) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
  );
}
