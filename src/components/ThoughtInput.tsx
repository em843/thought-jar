import React, { useState } from "react";
import MyButton from "./MyButton";

type Props = {
  onAddThought: (thought: string) => void;
};

const ThoughtInput: React.FC<Props> = ({ onAddThought }) => {
  const [thought, setThought] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThought(event.target.value);
  };

  const handleSubmit = () => {
    if (thought) {
      onAddThought(thought);
      setThought("");
    }
  };

  return (
    <div className="flex items-center justify-center p-4 w-1/2">
      <input
        className="px-4 py-2 mr-4 border-b-2 border-gray-200 focus:outline-none focus:border-emerald-400 w-full"
        value={thought}
        onChange={handleChange}
        maxLength={200}
        placeholder="Enter your thought..."
      ></input>
      {/* <MyTextArea/>  */}

      <MyButton onClick={handleSubmit}> Send</MyButton>
    </div>
  );
};

export default ThoughtInput;
