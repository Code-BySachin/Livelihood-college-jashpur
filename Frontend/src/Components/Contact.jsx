function Contact() {
  return (
    <div className="w-screen min-h-screen mt-0 bg-gray-50">
      <main className="max-w-6xl mx-auto flex flex-col gap-8 p-6 bg-white rounded-lg shadow-md">
        {/* Query Form and Map Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Query Form */}
          <div className="w-full md:w-1/2 flex-shrink-0 bg-white p-6 shadow-md border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Query Form</h2>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name..."
              className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email..."
              className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Enter subject..."
              className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Enter your message..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition duration-300">
              Submit
            </button>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2 flex-shrink-0 bg-white p-6 shadow-md border border-gray-200 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14703.384456818227!2d84.14247401669854!3d22.882142368356945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398a6735356b815d%3A0x26f267846411c51b!2sLivlihood%20college%20jashpur%20nagar!5e0!3m2!1sen!2sin!4v1743156160909!5m2!1sen!2sin"
              className="w-full h-[450px] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact us</h2>
          <p className="text-gray-700 text-base mb-2">
            This is the Official Portal of the Government of India designed,
            developed, and hosted by
            <a href="https://www.nic.in/" className="text-blue-700 hover:underline ml-1">
              National Informatics Centre (NIC)
            </a>
            ,
            <a href="https://www.meity.gov.in/" className="text-blue-700 hover:underline ml-1">
              Ministry of Electronics & Information Technology
            </a>
            .
          </p>
          <p className="text-gray-700 text-base mb-4">
            The objective behind the Portal is to provide a single window access
            to information and services.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-1">Address:</h3>
          <p className="text-gray-700 text-base">
            Web Information Manager <br />
            National Informatics Centre <br />
            A4B4, 3rd Floor, A Block <br />
            CGO Complex, Lodhi Road <br />
            New Delhi-110003 <br />
            Email: indiaportal[at]gov[dot]in
          </p>
        </div>
      </main>
    </div>
  );
}

export default Contact;