import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Admission() {
  const scrollRef = useRef(null);
  const scrollAmount = 272;
  const admissionData ={
      header: {
        title: "Admissions Open 2025",
        description: "Join Government Livelihood College and shape your future.",
        image: "https://www.thenewsindia.in/uploads/chhattisgarh/1689421619.jpg",
      },
      AdmissionProcess: [
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
        {
          title: "4. Inquiry",
          desc: "Attend the inquiry session for course details and guidance.",
        },
        {
          title: "5. Admission Confirmation",
          desc: "Receive confirmation and start your journey with us.",
        },

      ],
      EligibilityCriteria: [
        "Minimum age: 17 years as of the application deadline",
        "Passed 10+2 or equivalent examination from a recognized board",
        "Valid entrance exam score (if applicable) from approved exams",
        "Possession of a valid government-issued photo ID (e.g., Aadhaar card)",
        "Resident or citizen of India (if applicable)",
        "Good physical and mental health (medical certificate may be required)",
      ],
      Schemes: [
        {
          image: "https://media.licdn.com/dms/image/v2/C5622AQEYI5aY4QMhsQ/feedshare-shrink_800/feedshare-shrink_800/0/1657688489080?e=2147483647&v=beta&t=mGAyFDAwR27vTurzYojEcHmd_Dvtsjt5BgVoZf8y9dQ",
          link: "/Course",
        },
        {
          image: "https://media.licdn.com/dms/image/v2/C5622AQEYI5aY4QMhsQ/feedshare-shrink_800/feedshare-shrink_800/0/1657688489080?e=2147483647&v=beta&t=mGAyFDAwR27vTurzYojEcHmd_Dvtsjt5BgVoZf8y9dQ",
          link: "/Course",
        },
        {
          image: "https://media.licdn.com/dms/image/v2/C5622AQEYI5aY4QMhsQ/feedshare-shrink_800/feedshare-shrink_800/0/1657688489080?e=2147483647&v=beta&t=mGAyFDAwR27vTurzYojEcHmd_Dvtsjt5BgVoZf8y9dQ",
          link: "/Course",
        },
        // Add more scheme images and links as needed
      ],
    };

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
        <h1 className="text-4xl font-bold">{admissionData.header.title}</h1>
        <p className="text-lg mt-2">
          {admissionData.header.description}
        </p>
      </div>

      {/* Admission Process */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Admission Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {admissionData.AdmissionProcess.map((item, idx) => (
            <div key={idx} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
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
            {admissionData.EligibilityCriteria.map((ele,index)=><li key={index}>{ele}</li>)}
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
            {admissionData.Schemes.map((_, i) => (
              <Link to={_.link} key={i}>
                <img
                  src={_.image}
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
        <Link to="/admission/apply">
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}