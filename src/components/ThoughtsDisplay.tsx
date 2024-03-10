import React from "react";

type Props = {
  thoughts: { id: number; content: string }[];
};

const ThoughtsDisplay: React.FC<Props> = ({ thoughts }) => {
  return (
    <div className="flex flex-col items-center w-full py-4">
      {thoughts.map((thought) => (
        <div
          key={thought.id}
          className="w-full p-4 mb-2 bg-gray-100 rounded shadow"
        >
          {thought.content}
        </div>
      ))}
    </div>
  );
};

export default ThoughtsDisplay;
