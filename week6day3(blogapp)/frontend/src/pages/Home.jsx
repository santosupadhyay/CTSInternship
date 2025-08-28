import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs} from '../redux/slices/blogSlice'

export default function Homepage() {

  const dispatch = useDispatch();
  const  {blogs, loading, error}  = useSelector((state) => state.blogs)
  useEffect(()=>{
    dispatch(fetchBlogs())
  }, [dispatch])


  if(loading) return <h2>Loading</h2>
  if(error) return <h3>Error</h3>

  return (
    <main className="pt-28 bg-gray-50 text-gray-800 flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-indigo-600">MyBlog</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A place to share thoughts, ideas, and stories. Explore amazing blogs written by users and admins.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
            Start Reading
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-8">Latest Blogs</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.data?.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* <img
                src={`https://picsum.photos/seed/blog${blog}/600/400`}
                alt="Blog cover"
                className="w-full h-40 object-cover rounded-lg"
              /> */}
              <div className="mt-4 flex-1 flex flex-col">
                <h4 className="font-bold text-lg">{blog.title}</h4>
                <p className="text-gray-600 text-sm mt-2 flex-1">
                  {blog.content}
                </p>
                <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 self-start">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
