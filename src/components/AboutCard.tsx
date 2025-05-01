import "../app/globals.css";

const AboutCard = ({ 
    index, 
    title, 
    description,
}: { 
    index: number; 
    title: string; 
    description: string; 
}) => {

    const titleArray = title.split(" ");

    return (
        <div className={`about-card shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[16px] w-full px-5 py-[24px] min-[640px]:w-[47%] min-[960px]:max-w-[276px] min-[960px]:w-[100%] ${index % 2 === 0 ? "min-[960px]:mt-[48px]" : ""}`}>
            <span className="about-card__id font-mono font-bold text-[32px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(35deg,var(--primary),var(--cyber-text-bright))] min-[961px]:text-[56px]/[1.175]">
                {index < 10 ? `0${index}.` : `${index}.`}
            </span>
            <div className="about-card__text-content mt-[24px]">
                <h3 className="about-card__title font-mono text-[22px]/[24px] font-bold mb-[20px] text-wrap min-[961px]:text-[28px]/[1.125]">
                    {titleArray[0]}
                    <br />
                    {titleArray[1]}
                </h3>
                <p className="about-card__description font-mono font-normal text-[#b7b4bb] text-[16px]/[1.5]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AboutCard;