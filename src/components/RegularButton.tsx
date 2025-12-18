import React from "react";

export default function RegularButton({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <button onClick={handleClick} className="btn btn--text">
      {children}
    </button>
  );
}
