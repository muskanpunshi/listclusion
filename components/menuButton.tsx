import React from "react";

type component = {
  isOpen?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function MenuButton({ isOpen, onClick }: component) {
  return (
    <div
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center bg-primary rounded cursor-pointer z-[52]"
    >
      {/* Line container */}
      <div className="relative w-6 h-4">
        {/* Top bar */}
        <span
          className={`absolute left-0 top-0 w-full h-[2px] bg-white rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>

        {/* Middle bar */}
        <span
          className={`absolute left-0 top-1/2 w-full h-[2px] bg-white rounded transition-all duration-300 transform -translate-y-1/2 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Bottom bar */}
        <span
          className={`absolute left-0 bottom-0 w-full h-[2px] bg-white rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        ></span>
      </div>
    </div>
  );
}

export default MenuButton;
    