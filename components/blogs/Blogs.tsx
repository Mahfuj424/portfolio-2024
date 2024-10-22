import React from "react";
import BlogCard from "../BlogCard";

const BlogsSection = () => {
  return (
    <div className="container max-w-7xl w-full mx-auto px-6 my-20">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Features <span className="text-primary">Blogs</span>
        <p className="w-16 h-[4px] bg-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((blog, index) => (
          <BlogCard
            key={index}
            category="Technology"
            createdAt="2024-10-22"
            description="This is the description for the first blog."
            imageUrl="https://i.ibb.co.com/3MFZrdc/ts-logo-Bst-CNr-TU-1-Dbxpr.webp"
            likeCount={20}
            slug="first-blog"
            title={"First Blog"}
            viewCount={100}
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
