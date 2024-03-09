import React, { useState } from "react";
import "./ThoughtInput.css";

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
    <div className="thought-input-container">
      <input
        type="text"
        className="thought-input"
        value={thought}
        onChange={handleChange}
        maxLength={200}
        placeholder="Enter your thought..."
      />
      <button className="send-button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default ThoughtInput;
