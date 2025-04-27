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
        <div className="about-card bg-[#ffffff0d] rounded-[16px] w-full px-[24px] py-[48px]">
            <span className="about-card__id font-mono font-bold text-[32px] text-transparent bg-clip-text bg-linear-to-r [background-image:linear-gradient(35deg,var(--primary),var(--cyber-text-bright))]">
                {index < 10 ? `0${index}` : `${index}`}
            </span>
            <div className="about-card__text-content mt-[24px]">
                <h3 className="about-card__title font-mono text-[22px]/[24px] font-bold mb-[20px] text-wrap">
                    {titleArray[0]}
                    <br />
                    {titleArray[1]}
                </h3>
                <p className="about-card__description font-mono font-normal text-[16px]/[1.5]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AboutCard;