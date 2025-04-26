// 
import React from "react";

function AboutPrincipal() {
  const principalData = {
    name: "Mr. Amarnath Dhamgaya",
    position: "Principal",
    email: "dplc-jashpurlivelihoodcg.gov.in",
    phone: "7049790009",
    institution: "District Project Livelihood College, Jashpur (Chhattisgarh)",
  }
  return (
    <div className="w-full px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-gray-100 shadow p-6 rounded-lg">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWEeMuQATYRyiwi4WAZ06wJK0rsyc7gSgNw&s"
            alt="Principal"
            className="rounded shadow-sm max-h-[400px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-6 text-center md:text-left">
          <h3 className="text-2xl font-bold">{principalData.name}</h3>
          <p className="text-gray-600 mb-2">{principalData.position}</p>
          <p className="mb-1"><span className="font-semibold">Email:{principalData.email}</span></p>
          <p className="mb-1"><span className="font-semibold">Phone:</span>{principalData.phone}</p>
          <p><span className="font-semibold">Institution:</span>{principalData.institution}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPrincipal;
