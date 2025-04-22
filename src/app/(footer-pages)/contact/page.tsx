import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
    
    return (
        <>
            <section className="contact flex flex-col items-center justify-center">
                <header className="min-h-[270px] w-full flex items-center justify-center bg-blue-700 min-[768px]:min-h-[370px] min-[992px]:min-h-[440px] min-[1200px]:min-h-[570px]">
                    <h2 className="text-[30px] font-bold min-[768px]:text-[48px]">Contact Us</h2>
                </header>
                <div className="contact__info pt-[60px] w-full min-[576px]:max-w-[540px] min-[576px]:px-[0px] min-[576px]:flex min-[576px]:flex-row min-[576px]:flex-wrap min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
                    <ContactCard type="telephone" title="Telephone" info="+458 123 657 2324"/>
                    <ContactCard type="email" title="Mail Address" info="info@techmax.nl"/>
                    <ContactCard type="location" title="Location" info="En ontvang vrijblijvend 1217"/>
                </div>
            </section>
            <section className="form-section">
                <ContactForm />
            </section>
            <section className="map-section">
                <iframe
                    className="w-full h-[550px]"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5956.842811206599!2d44.7502216!3d41.7114247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473df8086657d%3A0x942ee261fd87b3!2sVake%20Plaza!5e0!3m2!1sen!2sge!4v1745344817961!5m2!1sen!2sge"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    );
}

export default Contact