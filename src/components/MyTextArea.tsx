import React, { useState, useEffect, useRef } from "react";

const MyTextArea: React.FC = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; 
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className="resize-none overflow-hidden px-4 py-2 mr-4 border-b-2 border-gray-200 focus:outline-none focus:border-emerald-400 w-full"
      value={value}
      onChange={handleChange}
      placeholder="Enter your thought..."
    />
  );
};

export default MyTextArea;
