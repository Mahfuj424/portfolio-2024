"use client";

import { motion } from "framer-motion";
import { FaCalendar, FaEye, FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  createdAt: string;
  imageUrl: string;
  slug: string;
  viewCount: number;
  likeCount: number;
  comments: number;
}

export default function BlogCard({
  title,
  description,
  category,
  createdAt,
  imageUrl,
  slug,
  viewCount,
  likeCount,
  comments,
}: BlogCardProps) {
  // Convert createdAt to Bangladesh time
  const createdAtInBangladeshTime = new Date(createdAt).toLocaleString(
    "en-GB",
    {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      year: "numeric",
      month: "long",
      minute: "2-digit",
    }
  );

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog-details/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            alt={title}
            className="transition-transform duration-300 hover:scale-105"
            layout="fill"
            objectFit="cover"
            src={imageUrl}
          />
          <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 m-2 rounded-md text-sm">
            {category}
          </div>
        </div>
        <div className="p-6 border-t-2 bg-white relative dark:bg-darkModal h-[270px]">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:hover:text-primary dark:text-gray-200 hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-200 mb-4 line-clamp-1">
            {description}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-200">
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                {createdAtInBangladeshTime}
              </div>
              <div className="flex items-center text-lg dark:text-gray-200">
                {comments} comments
              </div>
            </div>
            <div className="flex items-center justify-between text-sm dark:text-gray-200 text-gray-500">
              <div className="flex items-center">
                <FaEye className="mr-2" />
                {viewCount} views
              </div>
              <div className="flex items-center">
                <FaHeart className="mr-2" />
                {likeCount} likes
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
