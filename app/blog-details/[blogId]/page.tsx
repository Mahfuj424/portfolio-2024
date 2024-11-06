/* eslint-disable react/no-unescaped-entities */
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaCalendar, FaEye, FaHeart, FaComment } from "react-icons/fa";
import { useGetSingleBlogQuery } from "@/redux/api/blog";
type BlogPost = {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  imageUrl: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
};

export default function BlogPost() {
  const params = useParams();
  const blogId = params?.blogId as string;

  const { data, isError } = useGetSingleBlogQuery(blogId);
  const post = data?.data;

  if (isError || !post) {
    return <ErrorMessage />;
  }

  const createdAtInBangladeshTime = new Date(post.createdAt).toLocaleString(
    "en-GB",
    {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        {post.title}
      </h1>
      <div className="mb-6">
        <Image
          alt={post.title}
          className="rounded-lg shadow-lg"
          height={200}
          src={post.image}
          width={800}
        />
      </div>
      <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <FaCalendar className="mr-2" />
          {createdAtInBangladeshTime}
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaEye className="mr-2" />
            {post.views?.length} views
          </span>
          <span className="flex items-center">
            <FaHeart className="mr-2" />
            {post.likes?.length} likes
          </span>
          <span className="flex items-center">
            <FaComment className="mr-2" />
            {post.comments?.length} comments
          </span>
        </div>
      </div>
      <div className="bg-primary text-white px-3 py-1 rounded-md text-sm inline-block mb-6">
        {post.category}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {post.description}
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Sorry, we couldn't load the blog post. Please try again later.
      </p>
    </div>
  );
}
