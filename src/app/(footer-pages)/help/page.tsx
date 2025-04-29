'use client'

import FaqItem from "@/components/FaqItem";
import { useState } from "react";

const Help = () => {

    const faqData = [
        {
            question: "What is Nerko's NFT Collection?",
            answer: "Duis aute irure dolor in reprehenderit in",
        },
        {
            question: "How we can buy and invest NFT?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
        },
        {
            question: "Why we should choose Nerko's NFT?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
        },
        {
            question: "Where we can buy and sell NFts?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
        },
        {
            question: "Where we can buy and sell NFts?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
        },
        {
            question: "What is your contract address?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
        },
    ];

    const [openItem, setOpenItem] = useState(0);

    const toggle = (index: number) => {
        setOpenItem(index);
    }

    return (
        <section className="faq py-[32px] flex items-center justify-center min-[960px]:pt-[64px] min-[960px]:pb-[80px]">
            <div className="faq__container px-[15px] max-w-[1200px] flex flex-col items-center justify-center min-[640px]:px-[30px] ">
                <header>
                    <h2 className="faq__title font-bold text-[#f3f2f4] text-[32px] min-[961px]:text-[64px]/[1]">FAQ</h2>
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
}

export default Help