import React, { ReactNode } from "react";

type Props = {
  className?: string;
  onClick: () => void;
  children: ReactNode; // Define the children prop here
};

const MyButton: React.FC<Props> = ({ className = "", onClick, children }) => {
  return (
    <button
      className={
        className +
        " px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-emerald-400 border border-transparent rounded-lg active:bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:shadow-outline-emerald"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
