"use client";

import { motion } from "framer-motion";
import { FaCalendar, FaFolder, FaEye, FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { VscArrowSmallRight } from "react-icons/vsc";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  createdAt: string;
  imageUrl: string;
  slug: string;
  viewCount: number;
  likeCount: number;
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
}: BlogCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 m-2 rounded-md text-sm">
            {category}
          </div>
        </div>
        <div className="p-6 border-t-2 bg-white dark:bg-darkModal">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:hover:text-primary dark:text-gray-200 hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-200 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-200 mb-4">
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              {createdAt}
            </div>
            <div className="flex items-center text-lg dark:text-gray-200">
              Details <VscArrowSmallRight />
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
      </Link>
    </motion.div>
  );
}
