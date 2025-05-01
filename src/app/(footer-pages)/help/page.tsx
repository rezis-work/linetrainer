"use client";

import FaqItem from "@/components/FaqItem";
import { useState } from "react";

const Help = () => {
  const faqData = [
    {
      question: "What is your AI fitness trainer?",
      answer:
        "Our AI fitness trainer is a smart assistant that creates personalized workout and diet plans based on your conversation with it.",
    },
    {
      question: "How does the AI create my fitness plan?",
      answer:
        "The AI analyzes your goals, fitness level, preferences, and other factors through conversation to generate a customized plan.",
    },
    {
      question: "What information do I need to provide?",
      answer:
        "You'll discuss your fitness goals, current activity level, dietary preferences, available equipment, and any health considerations.",
    },
    {
      question: "How often should I update my plan?",
      answer:
        "We recommend checking in with the AI trainer weekly to adjust your plan based on your progress and feedback.",
    },
    {
      question: "Can the AI adjust my plan if I have injuries?",
      answer:
        "Yes, simply inform the AI about any injuries or limitations, and it will modify exercises accordingly.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, you can access your AI fitness trainer through our mobile app for convenience on the go.",
    },
  ];

  const [openItem, setOpenItem] = useState(0);

  const toggle = (index: number) => {
    setOpenItem(index);
  };

  return (
    <section className="faq py-[32px] flex items-center justify-center min-[960px]:pt-[64px] min-[960px]:pb-[80px]">
      <div className="faq__container px-[15px] max-w-[1200px] flex flex-col items-center justify-center min-[640px]:px-[30px] ">
        <header>
          <h2 className="faq__title font-bold text-[#f3f2f4] text-[32px] min-[961px]:text-[64px]/[1]">
            FAQ
          </h2>
        </header>
        <div className="faq__content mt-[32px] min-[960px]:mt-[40px]">
          <ul className="p-[24px] shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[16px] min-[960px]:p-[48px] min-[961px]:max-w-[680px]">
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
