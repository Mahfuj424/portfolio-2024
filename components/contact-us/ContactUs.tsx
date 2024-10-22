import React from "react";
import ContactForm from "../Form";

const ContactUsSection = () => {
  return (
    <div className="max-w-7xl w-full mx-auto mt-20 px-6">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Contact <span className="text-primary">Us</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsSection;
