import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import BlogCard from "../components/ui/BlogCard";

export default function Home() {
  const url = "https://shrimo.com/fake-api/blog";

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllBlogPosts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      const blogs = response.data.blogs;
      setBlogs(blogs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogPosts();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <Loader />
        ) : (
          blogs &&
          blogs.map((blog ) => {
            return (
              <div key={blog._id} className="max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <BlogCard blog={blog} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
