/* eslint-disable react/jsx-sort-props */
"use client";
import React from "react";
import BlogCard from "../BlogCard";
import { useGetAllBlogQuery } from "@/redux/api/blog";

const BlogsSection = () => {
  const { data } = useGetAllBlogQuery({});
  const blogData = data?.data;

  return (
    <div className="container max-w-7xl w-full mx-auto px-6 my-20">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Features <span className="text-primary">Blogs</span>
        <p className="w-16 h-[4px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogData?.map((blog: any) => (
          <BlogCard
            key={blog?._id}
            category={blog?.category}
            createdAt={blog?.createdAt}
            description={blog?.description}
            imageUrl={blog?.image}
            likeCount={blog?.likes?.length}
            slug={blog?._id}
            title={blog?.title}
            comments={blog?.comments?.length}
            viewCount={blog?.views?.length}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-10">
        <button className="px-4 py-2 hover:duration-300 text-white transition-all bg-primary hover:bg-gray-700 rounded-md text-center">
          See More..
        </button>
      </div>
    </div>
  );
};

export default BlogsSection;
