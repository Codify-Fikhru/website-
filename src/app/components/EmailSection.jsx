"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import TiktokIcon from "../../../public/tiktok-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, name, message } = e.target.elements;

      // Kirim email menggunakan EmailJS
      const templateParams = {
        from_name: name.value,
        message_html: message.value,
        reply_to: email.value,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Ganti dengan service ID Anda
        "YOUR_TEMPLATE_ID", // Ganti dengan template ID Anda
        templateParams,
        "YOUR_USER_ID" // Ganti dengan user ID Anda
      );

      console.log("Email sent successfully!");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error sending email
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Ayo Terhubung</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Saya saat ini sedang mencari peluang baru, dan kotak masuk saya selalu
          terbuka. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya
          akan berusaha sebaik mungkin untuk membalas Anda!
        </p>
        <div className="socials text-white flex flex-row gap-2">
          <Link href="https://www.tiktok.com/@fikhru05?is_from_webapp=1&sender_device=pc">
            <Image
              width={48}
              height={48}
              src="/tiktok-icon.svg"
              className="w-8 h-8"
              alt="Tiktok Icon"
            />
          </Link>
          <Link href="https://wa.me/+6287755860381">
            <Image
              width={48}
              height={48}
              src="/whatsapp-icon.svg"
              className="w-8 h-8"
              alt="Whatsapp Icon"
            />
          </Link>
          <Link href="https://www.instagram.com/fikru_05/?igsh=YzU1NGVlODEzOA%3D%3D">
            <Image
              width={48}
              height={48}
              src="/instagram-icon.svg"
              className="w-8 h-8"
              alt="Instagram Icon"
            />
          </Link>
          <Link href="https://github.com/Codify-Fikhru">
            <Image
              width={48}
              height={48}
              src="/github-icon.svg"
              className="w-8 h-8"
              alt="Github Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block text-sm mb-2 font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
