import React, { useState } from "react";

export default function Admissionform() {
  // State to show/hide the form
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Admissions Open 2025</h1>
        <p className="text-lg mt-2">Join Government Livelihood College and shape your future.</p>
      </div>

      {/* Apply Now Section */}
      <div className="bg-blue-900 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Apply Now for 2025 Admissions</h2>
        <p className="text-lg mt-2">Start your journey with us today.</p>
        <button 
          className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
          onClick={() => setShowForm(true)} // Open form on click
        >
          Apply Now
        </button>
      </div>

      {/* Admission Form (Shown when showForm is true) */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Admission Form</h2>

            <form>
              <label className="block mb-2">Full Name:</label>
              <input type="text" className="w-full border p-2 rounded mb-3" placeholder="Enter your name" />

              <label className="block mb-2">Email:</label>
              <input type="email" className="w-full border p-2 rounded mb-3" placeholder="Enter your email" />

              <label className="block mb-2">Phone Number:</label>
              <input type="text" className="w-full border p-2 rounded mb-3" placeholder="Enter your phone number" />

              <label className="block mb-2">Select Course:</label>
              <select className="w-full border p-2 rounded mb-3">
                <option>Diploma in IT</option>
                <option>Diploma in Healthcare</option>
                <option>Diploma in Mechanical</option>
              </select>

              {/* Submit & Cancel Buttons */}
              <div className="flex justify-between mt-4">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => setShowForm(false)} // Close form on click
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
