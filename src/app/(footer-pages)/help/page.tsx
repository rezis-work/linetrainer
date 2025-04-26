"use client";

import FaqItem from "@/components/FaqItem";
import { useState } from "react";

const Help = () => {
  const faqData = [
    {
      question: "What is an AI Trainer?",
      answer:
        "An AI Trainer is a system that helps improve machine learning models by providing feedback and corrections to their outputs.",
    },
    {
      question: "How does the AI Trainer work?",
      answer:
        "The AI Trainer analyzes model outputs, identifies errors or areas for improvement, and provides targeted training data to enhance performance.",
    },
    {
      question: "Why use an AI Trainer?",
      answer:
        "AI Trainers accelerate model improvement, reduce manual review time, and help create more accurate and reliable AI systems.",
    },
    {
      question: "What types of models can benefit from an AI Trainer?",
      answer:
        "Natural language processing models, computer vision systems, recommendation engines, and other ML models can all benefit from AI training.",
    },
    {
      question: "How accurate is the AI Trainer?",
      answer:
        "Our AI Trainer achieves over 95% accuracy in identifying model errors and suggesting improvements based on extensive testing.",
    },
    {
      question: "Can I customize the AI Trainer for my specific needs?",
      answer:
        "Yes, the AI Trainer can be fine-tuned to focus on specific domains, use cases, or performance metrics important to your application.",
    },
  ];

  const [openItem, setOpenItem] = useState(0);

  const toggle = (index: number) => {
    setOpenItem(index);
  };

  return (
    <section className="faq py-[32px] flex items-center justify-center">
      <div className="faq__container px-[15px] max-w-[1200px] flex flex-col items-center justify-center min-[640px]:px-[30px] min-[961px]:max-w-[680px]">
        <header>
          <h2 className="faq__title text-[#f3f2f4] text-[32px]">FAQ</h2>
        </header>
        <div className="faq__content mt-[32px] min-[960px]:mt-[80px]">
          <ul className="p-[24px] bg-[#ffffff0d] rounded-[8px]">
            {faqData.map((data, index) => {
              return (
                <FaqItem
                  key={index}
                  question={data.question}
                  answer={data.answer}
                  index={index}
                  isOpen={index === openItem}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Help;
