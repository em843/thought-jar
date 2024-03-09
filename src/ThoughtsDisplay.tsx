import React from "react";
import "./ThoughtsDisplay.css";

type Props = {
  thoughts: { id: number; content: string }[];
};

const ThoughtsDisplay: React.FC<Props> = ({ thoughts }) => {
  return (
    <div className="thoughts-display">
      {thoughts.map((thought) => (
        <div key={thought.id} className="thought-card">
          {thought.content}
        </div>
      ))}
    </div>
  );
};

export default ThoughtsDisplay;
