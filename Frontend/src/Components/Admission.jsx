// import React from "react";
// import { Link } from "react-router";

// export default function Admission() {
//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <div className="bg-blue-900 text-white text-center py-16">
//         <h1 className="text-4xl font-bold">Admissions Open 2025</h1>
//         <p className="text-lg mt-2">Join Government Livelihood College and shape your future.</p>
//       </div>

//       {/* Admission Process Section */}
//       <div className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl font-bold text-center mb-6">Admission Process</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="font-semibold text-lg">1. Register Online</h3>
//             <p className="text-gray-600">Fill out the online application form with necessary details.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="font-semibold text-lg">2. Submit Documents</h3>
//             <p className="text-gray-600">Upload required documents such as ID proof, marksheets, etc.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="font-semibold text-lg">3. Entrance Exam</h3>
//             <p className="text-gray-600">Appear for the entrance exam (if applicable).</p>
//           </div>
//         </div>
//       </div>

//       {/* Eligibility Criteria */}
//       <div className="bg-white py-10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl font-bold text-center mb-6">Eligibility Criteria</h2>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Minimum age: 17 years</li>
//             <li>Passed 10+2 or equivalent</li>
//             <li>Entrance exam score (if applicable)</li>
//             <li>Valid government ID proof</li>
//           </ul>
//         </div>
//       </div>

//       {/* Courses Offered */}
//       <div className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl font-bold text-center mb-6">Courses Offered</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="font-semibold text-lg">Diploma in IT</h3>
//             <p className="text-gray-600">Learn coding, software development, and networking.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="font-semibold text-lg">Diploma in Healthcare</h3>
//             <p className="text-gray-600">Train in medical and nursing fields.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <h3 className="font-semibold text-lg">Diploma in Mechanical</h3>
//             <p className="text-gray-600">Study machine design, manufacturing, and automation.</p>
//           </div>
//         </div>
//       </div>

//       {/* Apply Now Section */}
//       <div className="bg-blue-900 text-white text-center py-12">
//         <h2 className="text-2xl font-bold">Apply Now for 2025 Admissions</h2>
//         <p className="text-lg mt-2">Start your journey with us today.</p>
//         <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
//           <Link to="apply">Apply Now</Link>
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Correct import
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Admission() {
  const scrollRef = useRef(null);
  const scrollAmount = 272;

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const interval = setInterval(() => {
      if (scrollContainer) {
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div
        className="text-white text-center py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.thenewsindia.in/uploads/chhattisgarh/1689421619.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Admissions Open 2025</h1>
        <p className="text-lg mt-2">
          Join Government Livelihood College and shape your future.
        </p>
      </div>

      {/* Admission Process */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Admission Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "1. Register Online",
              desc: "Fill out the online application form with necessary details.",
            },
            {
              title: "2. Submit Documents",
              desc: "Upload required documents such as ID proof, marksheets, etc.",
            },
            {
              title: "3. Entrance Exam",
              desc: "Appear for the entrance exam (if applicable).",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility Criteria */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Minimum age: 17 years as of the application deadline</li>
            <li>Passed 10+2 or equivalent examination from a recognized board</li>
            <li>Valid entrance exam score (if applicable) from approved exams</li>
            <li>Possession of a valid government-issued photo ID (e.g., Aadhaar card)</li>
            <li>Resident or citizen of India (if applicable)</li>
            <li>Good physical and mental health (medical certificate may be required)</li>
          </ul>
        </div>
      </div>

      {/* Schemes Carousel */}
      <div className="bg-gray-100 py-12 relative">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Schemes</h2>

        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto px-6 scroll-smooth hide-scrollbar"
        >
          <div className="flex flex-nowrap space-x-4 w-max">
            {[...Array(10)].map((_, i) => (
              <Link to="/Course" key={i}>
                <img
                  src="https://media.licdn.com/dms/image/v2/C5622AQEYI5aY4QMhsQ/feedshare-shrink_800/feedshare-shrink_800/0/1657688489080?e=2147483647&v=beta&t=mGAyFDAwR27vTurzYojEcHmd_Dvtsjt5BgVoZf8y9dQ"
                  alt={`Scheme Poster ${i + 1}`}
                  className="w-64 h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                />
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Apply Now */}
      <div className="bg-blue-900 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Apply Now for 2025 Admissions</h2>
        <p className="text-lg mt-2">Start your journey with us today.</p>
        <Link to="/apply">
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}
