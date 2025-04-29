'use client'

import { Mail, MapPin, PhoneCall } from "lucide-react";


const ContactCard = ({type, title, info} : {type: string, title: string, info: string}) => {

    return (
        <div className="contact__card-wrapper w-full px-[12px] min-[576px]:w-[50%] min-[992px]:w-[33.3%]">
            <div className="contact__card max-h-[167px] mt-[70px] p-[40px] relative flex flex-col items-center justify-center shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[16px]">
                <div className="contact__card-icon shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[50%] w-[80px] h-[80px] absolute top-[-40px] flex items-center justify-center">
                    
                    {type === "telephone" ? <PhoneCall size={40} color="#ffffff" /> 
                    : type === "email" ? <Mail size={40} color="#ffffff" /> 
                    : type === "location" ? <MapPin size={40} color="#ffffff"/> : null}
                </div>
                <h5 className="contact__car-title mt-[15px] text-[18px] text-white leading-[36px] font-bold">{title}</h5>
                <p className="contact__card-info text-[18px] leading-[36px] text-[var(--primary)] font-bold decoration-[#7faeef] underline">{info}</p>
            </div>
        </div>
    );
}

export default ContactCard