import React, { useState } from "react";
import ThoughtInput from "./components/ThoughtInput";
import ThoughtsDisplay from "./components/ThoughtsDisplay";
import MyButton from "./components/MyButton";

type Thought = {
  id: number;
  content: string;
};

const App: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [showThoughts, setShowThoughts] = useState(false);

  const addThought = (thought: string) => {
    setThoughts((prevThoughts) => [
      ...prevThoughts,
      { id: prevThoughts.length, content: thought },
    ]);
  };

  return (
    <>
      <div className="absolute top-0 left-0 m-4 hover:cursor-pointer">
        <h1 className="text-2xl text-emerald-500 lowercase hover:text-emerald-600">
          thoughtjar
        </h1>
        <div className="underline-animation"></div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <ThoughtInput onAddThought={addThought} />
        <MyButton onClick={() => setShowThoughts(!showThoughts)}>
          {showThoughts ? "Hide Thoughts" : "Show Thoughts"}
        </MyButton>
        {showThoughts && <ThoughtsDisplay thoughts={thoughts} />}
      </div>
    </>
  );
};

export default App;
