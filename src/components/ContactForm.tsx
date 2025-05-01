"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    let isValid = true;

    if (!name || name.trim().length < 2 || name.trim().length > 10) {
      setNameError("Name must be between 2 and 10 characters.");
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!email || !/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!message || message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
      isValid = false;
    } else {
      setMessageError(null);
    }

    if (!isValid) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_VITE_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_VITE_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.reset();
          setLoading(false);
        },
        (error: any) => {
          toast.error(`Failed to send message: ${error.text}`);
          setLoading(false);
        }
      );
  };

  return (
    <div className="form-container my-[60px] px-[12px] flex flex-col items-center justify-center">
      <h2 className="text-[28px]/[40px] font-semibold text-center sm:text-[30px]/[40px] lg:text-[36px]/[48px]">
        Get Support from our Team
      </h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="pt-[50px] w-full max-w-[856px] flex flex-col items-center gap-[20px] sm:flex-row sm:flex-wrap sm:justify-between"
      >
        <div className="w-full sm:w-[48%]">
          <input
            name="name"
            className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94]"
            type="text"
            placeholder="Your Name"
            required
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-2">{nameError}</p>
          )}
        </div>

        <div className="w-full sm:w-[48%]">
          <input
            name="email"
            className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94]"
            type="email"
            placeholder="Your Email"
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-2">{emailError}</p>
          )}
        </div>

        <div className="w-full sm:w-[48%]">
          <input
            name="number"
            className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94]"
            type="text"
            placeholder="Your Number"
            required
          />
        </div>

        <div className="w-full sm:w-[48%]">
          <input
            name="subject"
            className="px-[25px] py-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[50px] font-semibold text-white placeholder:text-[#898c94]"
            type="text"
            placeholder="Subject"
            required
          />
        </div>

        <div className="w-full">
          <textarea
            name="message"
            className="px-[25px] pt-[15px] pb-[10px] w-full shadow-sm bg-card/90 backdrop-blur-sm border border-border rounded-[10px] h-[133px] font-semibold text-white placeholder:text-[#898c94]"
            placeholder="Write A Message"
            required
          ></textarea>
          {messageError && (
            <p className="text-red-500 text-sm mt-2">{messageError}</p>
          )}
        </div>

        <button
          className="mx-auto mt-[15px] px-[30px] h-[45px] text-[16px]/[40px] text-[var(--primary)] bg-background font-bold shadow-sm backdrop-blur-sm border border-ring rounded-md"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
