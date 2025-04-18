import React from "react";
import { Link } from "react-router";

export default function Admission() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Admissions Open 2025</h1>
        <p className="text-lg mt-2">Join Government Livelihood College and shape your future.</p>
      </div>

      {/* Admission Process Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Admission Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">1. Register Online</h3>
            <p className="text-gray-600">Fill out the online application form with necessary details.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">2. Submit Documents</h3>
            <p className="text-gray-600">Upload required documents such as ID proof, marksheets, etc.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">3. Entrance Exam</h3>
            <p className="text-gray-600">Appear for the entrance exam (if applicable).</p>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Minimum age: 17 years</li>
            <li>Passed 10+2 or equivalent</li>
            <li>Entrance exam score (if applicable)</li>
            <li>Valid government ID proof</li>
          </ul>
        </div>
      </div>

      {/* Courses Offered */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Courses Offered</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">Diploma in IT</h3>
            <p className="text-gray-600">Learn coding, software development, and networking.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">Diploma in Healthcare</h3>
            <p className="text-gray-600">Train in medical and nursing fields.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">Diploma in Mechanical</h3>
            <p className="text-gray-600">Study machine design, manufacturing, and automation.</p>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div className="bg-blue-900 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Apply Now for 2025 Admissions</h2>
        <p className="text-lg mt-2">Start your journey with us today.</p>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
          <Link to="apply">Apply Now</Link>
        </button>
      </div>
    </div>
  );
}
