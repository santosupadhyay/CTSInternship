import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/slices/blogSlice";
import { MessageCircle, Heart } from "lucide-react";
import { useBlog } from "../hooks/useBlog";
import axios from "axios";
import { refreshAccessToken } from "../redux/slices/authSlice";

export default function Homepage() {
  const API_URL = `http://localhost:3000/api/blogs`;


  const token = localStorage.getItem('token')

  const reduxDispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  const { state, dispatch } = useBlog();

  const handleToggleLike = async (blogId) => {
    try {
      await axios.put(
        `${API_URL}/like/${blogId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      dispatch({ type: "TOGGLE_LIKE", payload: { blogId } });
    } catch (error) {
      if (error.response?.data?.message === "jwt expired") {
      const newToken = await reduxDispatch(refreshAccessToken()).unwrap();
      await axios.put(
        `${API_URL}/blogs/like/${blogId}`,
        {},
        { headers: { Authorization: `Bearer ${newToken}` } }
      );
      dispatch({ type: "TOGGLE_LIKE", payload: { blogId } });
    } else {
      console.error(error);
    }
    }
  };

  useEffect(() => {
    reduxDispatch(fetchBlogs());
  }, [reduxDispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h3>Error loading blogs</h3>;

  return (
    <main className="pt-28 bg-gray-50 text-gray-800 flex-1">
      <section className="bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-indigo-600">MyBlog</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A place to share thoughts, ideas, and stories. Explore amazing blogs
            written by users and admins.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
            Start Reading
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-8">Latest Blogs</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.data?.map((blog) => {
            const isLiked = state.likes.includes(blog._id);
            const commentCount = blog.comments ? blog.comments.length : 0;
            return (
              <div
                key={blog._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
              >
                {/* Blog Image (optional) */}
                {/* <img
                src={`https://picsum.photos/seed/blog${blog._id}/600/400`}
                alt="Blog cover"
                className="w-full h-40 object-cover rounded-lg"
              /> */}

                <div className="mt-4 flex-1 flex flex-col">
                  <h4 className="font-bold text-lg">{blog.title}</h4>
                  <p className="text-gray-600 text-sm mt-2 flex-1">
                    {blog.content}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span
                        className="flex items-center gap-1 hover:text-indigo-600 cursor-pointer"
                        onClick={() => handleToggleLike(blog._id)}
                      >
                        <Heart
                          size={18}
                          className={
                            isLiked
                              ? "text-red-500 fill-current"
                              : "text-gray-500"
                          }
                        />
                        {isLiked ? blog.likes.length + 1 : blog.likes.length}
                      </span>
                      <span className="flex items-center gap-1 hover:text-indigo-600 cursor-pointer">
                        <MessageCircle size={18} /> {commentCount}
                      </span>
                    </div>
                  </div>

                  <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 self-start">
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
