"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Your message has been sent!"); // Using alert instead of toast
    reset();
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://i.ibb.co.com/vm93mk1/contactus-hero.webp"
              alt="Contact Us"
              width={500}
              height={700}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  <FaUser className="inline mr-2" />
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 dark:bg-darkModal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  <FaPhone className="inline mr-2" />
                  Phone
                </label>
                <input
                  id="phone"
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="Your phone number"
                  className="w-full px-3 py-2 border border-gray-300 dark:bg-darkModal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  <FaEnvelope className="inline mr-2" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:bg-darkModal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  <FaComments className="inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your message"
                  className="w-full px-3 py-2 border border-gray-300 dark:bg-darkModal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-h-[100px]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
