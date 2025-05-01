"use client";

import AboutCard from "@/components/AboutCard";
import CrewCard from "@/components/CrewCard";
import Image from "next/image";
import { Brain, ChartCandlestick } from "lucide-react";

const About = () => {
  const aboutCards = [
    {
      title: "Personalized Plans",
      description:
        "Get customized workout and diet plans tailored to your fitness goals, body type, and preferences through our AI trainer.",
    },
    {
      title: "Expert Guidance",
      description:
        "Our AI trainer provides professional-level fitness advice and corrections, just like having a personal trainer available 24/7.",
    },
    {
      title: "Data-Driven Results",
      description:
        "We analyze your progress and adapt your plans using advanced algorithms to ensure continuous improvement and optimal results.",
    },
    {
      title: "Supportive Community",
      description:
        "Join a community of fitness enthusiasts, share progress, get motivation, and participate in challenges to stay accountable.",
    },
  ];

  return (
    <section className="about flex flex-col items-center px-[15px] min-[960px]:px-[40px]">
      <div className="py-[32px] flex flex-col items-center min-[961px]:py-[40px]">
        <h2 className="about__title text-[32px]/[1.15] font-mono font-bold min-[960px]:text-[64px]/[1] tracking-normal">
          Why choose us?
        </h2>
        <div className="about__cards-container mt-[32px] flex flex-col gap-[32px] min-[640px]:flex-row min-[640px]:flex-wrap min-[640px]:justify-center min-[960px]:flex-nowrap min-[960px]:items-start min-[960px]:mt-[80px]">
          {aboutCards.map((card, index) => {
            return (
              <AboutCard
                key={index}
                index={index + 1}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
      <div className="about__platform py-[32px] w-full min-[961px]:py-[40px]">
        <h2 className="text-[32px]/[1.15] font-mono font-bold min-[960px]:text-[64px]/[1] tracking-normal text-center">
          About Our AI Trainer
        </h2>
        <div className="min-[960px]:flex min-[960px]:gap-[128px] min-[960px]:items-center min-[960px]:mt-[80px] min-[960px]:max-w-[1200px] min-[960px]:mx-auto">
          <Image
            src="/hero-ai.png"
            alt="AI Trainer"
            width={400}
            height={400}
            className="w-full object-cover object-center rounded-[16px]"
          />
          <div className="about__platform-panel mt-[32px] w-full min-[960px]:mt-[0px]">
            <span className="uppercase font-mono font-medium text-[14px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">
              Personalized Fitness
            </span>
            <h3 className="my-[20px] font-mono font-bold text-[32px]/[1.15] min-[961px]:text-[64px]/[1]">
              Your AI Fitness Coach
            </h3>
            <p className="mb-[20px] font-normal font-mono text-[16px] min-[961px]:text-[20px]/[1.5]">
              Our AI trainer engages in natural conversations to understand your
              goals, fitness level, and preferences to create the perfect
              workout and diet plan.
            </p>
            <div className="flex gap-[32px]">
              <div className="first-container flex-1">
                <h5 className="font-mono font-bold text-[28px] min-[961px]:text-[56px]/[1.175]">
                  24/7
                </h5>
                <span className="font-mono text-[16px]">
                  Availability
                  <br />
                  Always ready to help
                </span>
              </div>
              <div className="second-container flex-1">
                <h5 className="font-mono font-bold text-[28px] min-[961px]:text-[56px]/[1.175]">
                  100%
                </h5>
                <span className="font-mono text-[16px]">
                  Personalized
                  <br />
                  Plans tailored just for you
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[32px] w-full min-[961px]:py-[40px] min-[960px]:flex min-[960px]:flex-row-reverse min-[960px]:gap-[128px] min-[960px]:items-center min-[960px]:max-w-[1200px]">
        <Image
          src="/hero-ai2.png"
          alt="AI Trainer"
          width={500}
          height={500}
          className="w-full object-cover object-center rounded-[16px]"
        />
        <div className="about__platform-panel mt-[32px] w-full">
          <span className="uppercase font-mono font-medium text-[14px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">
            Smart Adaptation
          </span>
          <h3 className="my-[20px] font-mono font-bold text-[32px]/[1.15] min-[961px]:text-[64px]/[1]">
            Professional-Level Guidance
          </h3>
          <p className="mb-[32px] font-normal font-mono text-[16px] min-[961px]:text-[20px]/[1.5] min-[960px]-mb-[48px]">
            Our AI trainer analyzes your progress, adjusts your plans in
            real-time, and provides expert-level feedback to ensure you achieve
            optimal results, just like having a personal trainer.
          </p>
          <div className="flex flex-col gap-[20px] min-[960px]:flex-row min-[960px]:gap-[24px]">
            <div className="flex items-center gap-[16px] min-[960px]:gap-[24px] min-[960px]:items-start">
              <div className="icon-box p-[16px] rounded-[16px] [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">
                <Brain color="var(--muted)" size={32} />
              </div>
              <span className="font-mono text-[16px]/[1.5]">
                Intelligent analysis
                <br />
                of your fitness data
              </span>
            </div>
            <div className="flex items-center gap-[16px] min-[960px]:gap-[24px] min-[960px]:items-start">
              <div className="icon-box p-[16px] rounded-[16px] [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">
                <ChartCandlestick color="var(--muted)" size={32} />
              </div>
              <span className="font-mono text-[16px]/[1.5]">
                Real-time progress
                <br />
                tracking & adjustments
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[32px] about__crew min-[961px]:py-[40px]">
        <h2 className="mb-[32px] font-mono font-bold text-[32px]/[1.15] text-center min-[960px]:text-[64px]/[1] tracking-normal">
          LineTrainer&apos;s Crew
        </h2>
        <div className="about__cards-container flex justify-center gap-[24px] min-[960px]:gap-[130px]">
          <CrewCard
            image="/Dala-logo.jpg"
            name="Dala"
            position="Junior"
            github="https://github.com/DalaScript"
            linkedin="https://www.linkedin.com/in/nikadalalishvili/"
          />
          <CrewCard
            image="/hero-ai2.png"
            name="Rezi"
            position="Senior"
            github="https://github.com/rezis-work"
            linkedin="https://www.linkedin.com/in/rezi-karanadze/"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
