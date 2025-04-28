"use client";

import AboutCard from "@/components/AboutCard";
import CrewCard from "@/components/CrewCard";
import { Brain, ChartCandlestick } from "lucide-react";

const About = () => {

    const aboutCards = [
        {
            title: "Huge collection",
            description: "A collection of 5,000 unique Nerkos built to go beyond the digital space that will unlock numerous benefits for our community.",
        },
        {
            title: "High quality",
            description: "The nerko’s collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care.",
        },
        {
            title: "Top ressource",
            description: "Tasty design resources made with care for each pixel. Tokens, NFTs, metaverse and game resources. Access additional drops.",
        },
        {
            title: "Big community",
            description: "Be part of a community of nerko owners and create user generated items. Rent, advertise, lounprops.titlech stores, create items. We make it easy to discover.",
        },
    ]

    return (
        <section className="about flex flex-col items-center px-[15px] min-[960px]:px-[40px]">
            <div className="py-[32px] flex flex-col items-center min-[961px]:py-[40px]">
                <h2 className="about__title text-[32px]/[1.15] font-mono font-bold min-[960px]:text-[64px]/[1] tracking-normal">Why choose us?</h2>
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
                    About the plaform
                </h2>
                <div className="min-[960px]:flex min-[960px]:gap-[128px] min-[960px]:items-center min-[960px]:mt-[80px] min-[960px]:max-w-[1200px] min-[960px]:mx-auto">
                    <div className="about__platform-img mt-[32px] w-full h-[275px] bg-[var(--primary)] flex items-center justify-center text-[80px] min-[960px]:mt-[0px]">img</div>
                    <div className="about__platform-panel mt-[32px] w-full min-[960px]:mt-[0px]">
                        <span className="uppercase font-mono font-medium text-[14px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">Create and Invest</span>
                        <h3 className="my-[20px] font-mono font-bold text-[32px]/[1.15] min-[961px]:text-[64px]/[1]">Create your own NFT</h3>
                        <p className="mb-[20px] font-normal font-mono text-[16px] min-[961px]:text-[20px]/[1.5]">
                            Multiple Chains, One Home. Stack up all your NFTs from across blockchains.
                        </p>
                        <div className="flex gap-[32px]">
                            <div className="first-container flex-1">
                                <h5 className="font-mono font-bold text-[28px] min-[961px]:text-[56px]/[1.175]">
                                    4,500+
                                </h5>
                                <span className="font-mono text-[16px]">
                                    Collections Indexed 
                                    <br />
                                    every 5mins.
                                </span>
                            </div>
                            <div className="second-container flex-1">
                                <h5 className="font-mono font-bold text-[28px] min-[961px]:text-[56px]/[1.175]">
                                    2.5x
                                </h5>
                                <span className="font-mono text-[16px]">
                                    Difference in Floor & Estimated Value
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[32px] w-full min-[961px]:py-[40px] min-[960px]:flex min-[960px]:flex-row-reverse min-[960px]:gap-[128px] min-[960px]:items-center min-[960px]:max-w-[1200px]">
                <div className="about__img w-full h-[265px] bg-[var(--primary)] flex items-center justify-center text-[80px]">img</div>
                <div className="about__platform-panel mt-[32px] w-full">
                    <span className="uppercase font-mono font-medium text-[14px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">Sync and Track</span>
                    <h3 className="my-[20px] font-mono font-bold text-[32px]/[1.15] min-[961px]:text-[64px]/[1]">
                        Multiple Chains, One Home
                    </h3>
                    <p className="mb-[32px] font-normal font-mono text-[16px] min-[961px]:text-[20px]/[1.5] min-[960px]-mb-[48px]">
                        We make it easy to Discover, Invest and manage all your NFTs at one place, looked up one of the more obscure.Find the right NFT collections to buy within the platform.
                    </p>
                    <div className="flex flex-col gap-[20px] min-[960px]:flex-row min-[960px]:gap-[24px]">
                        <div className="flex items-center gap-[16px] min-[960px]:gap-[24px] min-[960px]:items-start">
                            <div className="icon-box p-[16px] rounded-[16px] [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">
                                <Brain color="var(--muted)" size={32} />
                            </div>
                            <span className="font-mono text-[16px]/[1.5]">
                                Collections Indexed
                                <br />
                                every 5mins.
                            </span>
                        </div>
                        <div className="flex items-center gap-[16px] min-[960px]:gap-[24px] min-[960px]:items-start">
                            <div className="icon-box p-[16px] rounded-[16px] [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">
                                <ChartCandlestick color="var(--muted)" size={32} />
                            </div>
                            <span className="font-mono text-[16px]/[1.5]">
                                Difference in Floor & 
                                <br />
                                Estimated Value
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
                    <CrewCard image="/Dala-logo.jpg" name="Dala" position="Junior" github="https://github.com/DalaScript" linkedin="https://www.linkedin.com/in/nikadalalishvili/" />
                    <CrewCard image="/hero-ai2.png" name="Rezi" position="Senior" github="https://github.com/rezis-work" linkedin="https://www.linkedin.com/in/rezi-karanadze/" />
                </div>
            </div>
        </section>
    );
}

export default About;