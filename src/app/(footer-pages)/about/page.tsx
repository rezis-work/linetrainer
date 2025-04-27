"use client";

import AboutCard from "@/components/AboutCard";

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
        <section className="about flex flex-col items-center py-[32px] px-[15px]">
            <h2 className="about__title text-[32px] font-bold">Why choose us?</h2>
            <div className="about__cards-container mt-[32px] flex flex-col gap-[32px]">
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
            <div className="about__platform py-[32px] w-full">
                <h2 className="text-[32px]/[1.15] font-mono font-bold tracking-normal text-center">
                    About the plaform
                </h2>
                <div className="about__platform-img mt-[32px] w-full h-[275px] bg-[var(--primary)] flex items-center justify-center text-[80px]">img</div>
                <div className="about__platform-panel mt-[32px] w-full">
                    <span className="uppercase font-mono font-medium text-[14px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(10deg,var(--primary),var(--cyber-text-bright))]">Create and Invest</span>
                    <h3 className="my-[20px] font-mono font-bold text-[32px]/[1.15]">Create your own NFT</h3>
                    <p className="mb-[20px] font-normal font-mono text-[16px]">
                        Multiple Chains, One Home. Stack up all your NFTs from across blockchains.
                    </p>
                    <div className="flex gap-[32px]">
                        <div className="first-container flex-1">
                            <h5 className="font-mono font-bold text-[28px]">
                                4,500+
                            </h5>
                            <span className="font-mono text-[16px]">
                                Collections Indexed 
                                <br />
                                every 5mins.
                            </span>
                        </div>
                        <div className="second-container flex-1">
                            <h5 className="font-mono font-bold text-[28px]">
                                2.5x
                            </h5>
                            <span className="font-mono text-[16px]">
                                Difference in Floor & Estimated Value
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;