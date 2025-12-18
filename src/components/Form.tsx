import RegularButton from "./RegularButton";

export default function Form({ handleSubmit }: { handleSubmit: any }) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
  );
}
