export default function About() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold">MyBlog</span>, a space
            where ideas, stories, and knowledge come together. Our mission is to
            empower voices and share experiences that matter.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To create a platform where everyone can express themselves freely
              and connect with readers around the world through meaningful
              stories.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To build a global blogging community that inspires, educates, and
              entertains, making knowledge accessible to all.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Alice", "John", "Sophia"].map((name, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 5}`}
                  alt={name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">Content Creator</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
