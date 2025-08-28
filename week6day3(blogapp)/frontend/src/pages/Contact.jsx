export default function Contact() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Got questions or feedback? We’d love to hear from you.
          </p>
        </section>

        {/* Contact Form + Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                Our Office
              </h2>
              <p className="text-gray-600">
                Shivnagar-05, Dhangadhi, Kailali, Nepal
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                Email
              </h2>
              <p className="text-gray-600">support@myblog.com</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                Phone
              </h2>
              <p className="text-gray-600">+977-9842899375</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            📍 Map Location
          </div>
        </div>
      </div>
    </div>
  );
}
