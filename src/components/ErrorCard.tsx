import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

export default function ErrorCard({
  handleClick,
}: {
  handleClick: () => void;
}) {
  const errorCardRef = useRef(null);

  useEffect(() => {
    errorCardRef.current.focus();
  }, []);
  return (
    <div className="wrapper wrapper--accent" ref={errorCardRef} tabIndex={-1}>
      <p
        className="p--large"
        aria-live="polite"
        aria-label="Sorry, there was an error"
      >
        Sorry, there was an error
      </p>
      <p
        className="p--regular"
        aria-live="polite"
        aria-label="Please come back later or click the button below to try restarting the game."
      >
        Please come back later or click the button below to try restarting the
        game.
      </p>
      <RegularButton handleClick={handleClick}>Restart game</RegularButton>
    </div>
  );
}
