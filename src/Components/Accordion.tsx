import React, { useState } from "react";

const Accordion = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full flex flex-col gap-6">
      <div
        className="w-full flex justify-between items-center pb-3 border-b"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-gray-900 font-medium text-md">{title}</h4>
        {isOpen ? (
          <img
            src="/icons/chevron-up.svg"
            alt="chevron up"
            className="cursor-pointer"
          />
        ) : (
          <img
            src="/icons/chevron-down.svg"
            alt="chevron down"
            className="cursor-pointer"
          />
        )}
      </div>
      {isOpen && content}
    </div>
  );
};

export default Accordion;
