import React from "react";
import BlogCard from "../BlogCard";

const BlogsSection = () => {
  return (
    <div className="container max-w-7xl w-full mx-auto px-6 my-20">
      <div className=" md:text-4xl uppercase text-xl font-bold mb-5">
        Features <span className="text-primary">Blogs</span>
        <p className="w-16 h-[4px] bg-primary"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((blog, index) => (
          <BlogCard
            key={index}
            title={"First Blog"}
            description="This is the description for the first blog."
            category="Technology"
            createdAt="2024-10-22"
            imageUrl="https://i.ibb.co.com/3MFZrdc/ts-logo-Bst-CNr-TU-1-Dbxpr.webp"
            slug="first-blog"
            viewCount={100}
            likeCount={20}
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
