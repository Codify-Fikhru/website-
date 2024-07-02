"use client";
import React from "react";
import TiktokIcon from "../../../public/tiktok-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
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
    </section>
  );
};

export default ContactSection;
