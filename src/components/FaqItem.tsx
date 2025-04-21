"use client";

import { Minus, Plus } from "lucide-react";
import { Collapse } from "react-collapse";

const FaqItem = ({
  index,
  isOpen,
  question,
  answer,
  toggle,
}: {
  index: number;
  isOpen: boolean;
  question: string;
  answer: string;
  toggle: () => void;
}) => {
  return (
    <li>
      <a
        className={`cursor-pointer flex justify-between items-center text-[16px] min-[960px]:text-[22px] ${index > 0 ? "mt-[20px] pt-[20px] border-t border-solid border-[#82828240]" : ""}`}
        onClick={toggle}
      >
        {question}
        {isOpen ? (
          <Minus className="w-[26px] h-[26px]" color="#b7b4bb"/>
        ) : (
          <Plus className="w-[26px] h-[26px]" color="#b7b4bb"/>
        )}
      </a>
      <Collapse isOpened={isOpen}>
        <div className="pt-[20px] pb-[16px]">
          <p className="text-[#b7b4bb] min-[960px]:text-[20px]">{answer}</p>
        </div>
      </Collapse>
    </li>
  );
};

export default FaqItem;
