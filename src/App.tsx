import React, { useState } from 'react';
import ThoughtInput from './ThoughtInput';
import ThoughtsDisplay from './ThoughtsDisplay';
import './App.css';

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
    <div className="App">
      <ThoughtInput onAddThought={addThought} />
      {showThoughts && <ThoughtsDisplay thoughts={thoughts} />}
      <button className="chevron-button" onClick={() => setShowThoughts(!showThoughts)}>
        {showThoughts ? 'Hide Thoughts' : 'Show Thoughts'}
      </button>
    </div>
  );
};

export default App;
