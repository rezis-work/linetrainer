/* eslint-disable @next/next/no-img-element */

import { Github, Linkedin } from "lucide-react";


const CrewCard = ({ 
    image,
    name, 
    position,
    github,
    linkedin
}: { 
    image: string,
    name: string, 
    position: string,
    github: string,
    linkedin: string
}) => {
    
    return (
        <div className="card w-[100%] flex flex-col items-center justify-center min-[640px]:w-[30%] min-[960px]:w-[160px]">
            <div className="card__img-box p-[8px] w-full h-auto rounded-[50%] shadow-sm bg-card/90 backdrop-blur-sm border border-border">
                <img 
                    className="rounded-[50%] w-full h-auto border border-border"
                    src={image}
                    alt="member of LineTrainer's Crew"
                />
            </div>
            <div className="card__text-content p-[8px] flex flex-col items-center min-[960px]:p-[16px]">
                <h3 className="card__name mb-[4px] font-mono font-bold text-[16px]/[1.4] text-center min-[960px]:text-[22px]/[1]">{name}</h3>
                <span className="card__position font-mono text-[#b7b4bb] text-[14px]/[1.4] text-center min-[960px]:text-[16px]/[1.4]">{position}</span>
                <ul className="mt-[8px] py-[4px] flex gap-[22px] justify-center min-[960px]:mt-[16px]">
                    <li><a href={github} target="_blank"><Github className="w-4 h-auto min-[960px]:w-5" color="#ffffff" /></a></li>
                    <li><a href={linkedin} target="_blank"><Linkedin className="w-4 h-auto min-[960px]:w-5" color="#ffffff" /></a></li>
                </ul>
            </div>
        </div>

    );
}

export default CrewCard;