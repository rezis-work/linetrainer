'use client'

const ContactForm = () => {

    return (
        <div className="form-container my-[60px] px-[12px] flex flex-col items-center justify-center">
            <h2 className="form-container__title text-[28px]/[40px] font-semibold text-center min-[576px]:text-[30px]/[40px] min-[992px]:text-[36px]/[48px]">Get Support from our Team</h2>
            <form className="pt-[50px] w-full max-w-[516px] flex flex-col items-center justify-center gap-[20px] min-[768px]:max-w-[696px] min-[768px]:flex-row min-[768px]:flex-wrap min-[768px]:justify-between min-[992px]:max-w-[615px] min-[1200px]:max-w-[736px] min-[1400px]:max-w[856px]">
                <input className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94] min-[768px]:w-[48%]" type="text" placeholder="Your Name" required/>
                <input className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94] min-[768px]:w-[48%]" type="email" placeholder="Your Email" required/>
                <input className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94] min-[768px]:w-[48%]" type="text" placeholder="Your Number" required/>
                <input className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94] min-[768px]:w-[48%]" type="text" placeholder="subject" required/>
                <textarea className="px-[25px] pt-[15px] pb-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[133px] font-semibold text-white placeholder:text-[#898c94]" placeholder="Write A Message" required></textarea>
                <button className="mx-auto mt-[15px] px-[30px] h-[45px] text-[16px]/[40px] text-[var(--primary)] bg-background font-bold shadow-sm backdrop-blur-sm border border-ring rounded-md" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm