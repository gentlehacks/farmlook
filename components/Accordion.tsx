"use client"
import {motion} from "framer-motion"
import { useState } from "react";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

interface AccordionProps {
  id: number;
  question: string;
  answer: string;
}
const Accordion = ({ id, question, answer }: AccordionProps) => {

const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div
      key={id}
      className="w-full md:w-[85%] lg:w-[60%] border-1 border-green-300 hover:border-green-400 transition-all duration-100 bg-green-50 p-4 rounded-xl"
    >
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="w-full flex items-center justify-between cursor-pointer"
      >
        <h2 className="font-medium text-lg text-gray-800"> {question}</h2>
        <RxCaretRight className={`text-2xl transition-all duration-200
          ${showAnswer ? 'rotate-90' : ''}  
        `} />
      </div>
      {/* Answer */}
      <div className={`mt-2 transition-all duration-200
        ${showAnswer ? 'block' : 'hidden'}
      `}>
        <p className="text-md text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
