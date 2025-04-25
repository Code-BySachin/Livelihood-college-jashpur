const Course = () => {
  return (
    <div className="w-full px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Master the Art of Cooking
      </h1>

      <section className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-xl shadow-md">
        <img
          src="https://www.morrisons.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-to-order-products.c9b04881.jpg&w=1920&q=75"
          alt="Cooking Course"
          className="w-full max-w-lg mx-auto rounded-lg object-cover"
        />
        <div className="flex-1 text-left">
          <h2 className="text-2xl text-orange-500 font-semibold mb-3">Course Description</h2>
          <div className="max-h-52 overflow-y-auto text-gray-600 leading-relaxed pr-2">
            <p>
              Learn to cook delicious and mouth-watering dishes from different
              cuisines around the world. This course covers a variety of cooking
              techniques, food safety, and presentation tips. Lorem ipsum dolor sit amet consectetur...
              {/* You can keep or truncate this further as needed */}
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Course Details */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl text-blue-600 font-semibold mb-4">Course Details</h2>
          <p className="mb-2"><strong>Time Duration:</strong> 3 Months</p>
          <p className="mb-2"><strong>Skills Required:</strong> Basic knowledge of kitchen tools</p>
          <p className="mb-2"><strong>Mode of Training:</strong> Online and Offline</p>
          <p className="mb-2"><strong>Class Timings:</strong> 10:00 AM - 12:00 PM</p>
          <p className="mb-2"><strong>Certification:</strong> Yes, after successful completion</p>
          <p className="mb-2"><strong>Learning Outcomes:</strong> Master different cooking styles, learn plating and presentation techniques, and develop creativity in the kitchen.</p>
          <p className="mb-2"><strong>Career Opportunities:</strong> Chef, Food Blogger, Catering Expert, Restaurant Owner</p>
          <p className="mb-2"><strong>Course Fee:</strong> ₹10,000</p>
          <p className="mb-2"><strong>Batch Size:</strong> 20 Students</p>
          <p className="mb-2"><strong>Resources:</strong> Course Materials, Recipe Books, and Access to Video Tutorials</p>
        </div>

        {/* Video Tutorial */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl text-blue-600 font-semibold mb-4">Video Tutorial</h2>
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.youtube.com/embed/5VIbPrrNb6M"
            title="Cooking Masterclass"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Course;