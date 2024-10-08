import React, { ReactNode } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
  children: ReactNode; // Define the children prop here
};

const StyledButton: React.FC<Props> = ({
  className = "",
  onClick,
  children,
}) => {
  const tailwindStyles =
    " px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-emerald-400 border border-transparent rounded-lg active:bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:shadow-outline-emerald";

  return (
    <button
      className={className + tailwindStyles}
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default StyledButton;
