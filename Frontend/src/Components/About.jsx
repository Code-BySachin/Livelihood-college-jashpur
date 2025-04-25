// // import './AboutUS.css';

// // function AboutUS() {
// //   return (
// //     <>
// //       {/* <div className="aboutus-bgcontainer"> */}
// //         {/* <header className="aboutus-header">
// //           <div className="aboutus-logo">
// //             <img
// //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNabkHletDXBsLWAUCPgkEsG4Lu9kpqYnl6g&s"
// //               alt="Logo"
// //               className="logo-img"
// //             />
// //             <h1>District Project Livelihood College, Jashpur (Chhattisgarh)</h1>
// //           </div>
// //         </header> */}

// //         <main className="aboutus-container">
// //           <img
// //             src="https://www.thenewsindia.in/uploads/chhattisgarh/1689421619.jpg"
// //             className="aboutus-image"
// //             alt="College Image"
// //           />
// //           <p className="aboutus-text">
// //             The District Project Livelihood College, Jashpur was established as a government
// //             initiative to provide skill-based training and employment opportunities to the youth.
// //             Recognizing the increasing demand for specialized skills, the college was founded to bridge
// //             the gap between education and employability. Over the years, it has grown into a center of
// //             excellence, offering courses in coding, software programming, graphic design, finance,
// //             business management, and education. By collaborating with industries, trade associations,
// //             and employers, the college ensures that its training programs align with the evolving job
// //             market, equipping students with practical expertise that enhances their career prospects.
// //           </p>
// //           <div className="aboutus-information">
// //             <button className="learn-more-btn">Learn More</button>
// //           </div>
// //           <div className="aboutus-content">
// //             <div>
// //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWEeMuQATYRyiwi4WAZ06wJK0rsyc7gSgNw&s"/>
// //             </div>
// //             <div className='aboutusImg'>
// //               <h3>Mr. Amarnath Dhamgaya</h3>
// //               <p>Principal</p>
// //               <p>dplc-jashpur[at]cg[dot]gov[dot]in</p>
// //               <p>7049790009</p>
// //               <p>District Project Livelihood College Jashpur (Chhattisgarh)</p>
// //             </div>
// //           </div>
// //         </main>
        
// //       {/* </div> */}
// //     </>
// //   );
// // }

// // export default AboutUS;

// import React from "react";
// import AboutPrincipal from "./AboutPrincipal";
// function About() {
//   return (
//     <div className="px-6 py-10 bg-white text-gray-800">
//       <div className="flex">
//         <div className="md:col-span-12 max-w-1/2">
//           <h1 className="text-3xl font-bold mb-6 border-b-2 border-blue-400 inline-block">
//             About Dristric Project Livelihood College, Jashpur(Chhattisgarh)
//           </h1>
//           <p className="mb-4">
//             District Project Livelihood College, Jashpur is a flagship
//             government initiative committed to transforming the futures of youth
//             through high-quality, skill-based education. Established with the
//             vision to empower young individuals from diverse backgrounds, the
//             college serves as a bridge between traditional education and modern
//             employability needs. Understanding the dynamic nature of today’s job
//             market, the institution focuses on equipping students with hands-on
//             training and real-world skills. From cutting-edge courses in coding
//             and software development to creative programs in graphic design,
//             financial literacy, business management, and educational training,
//             the college provides a wide range of opportunities tailored to the
//             interests and aspirations of learners. What truly sets the
//             Livelihood College apart is its strong industry collaboration. By
//             partnering with leading companies, trade associations, and sector
//             experts, the college ensures that its curriculum stays relevant,
//             future-ready, and in sync with current market demands. Students
//             don't just learn theory — they gain practical experience, work on
//             live projects, and engage in internships that make them job-ready
//             from day one. Over the years, the college has evolved into a center
//             of excellence, recognized for its role in promoting sustainable
//             livelihoods, fostering innovation, and nurturing talent from the
//             grassroots level. It stands as a symbol of hope, opportunity, and
//             transformation, inspiring the youth of Jashpur to dream big and
//             achieve bigger.
//           </p>
//         </div>
//         <div className="md:col-span-6 max-w-1/2">
//           <div className="w-full h-64 md:h-[400px]">
//             <iframe
//               className="w-full h-full rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/5tepB-Zk5s8"
//               title="YouTube video"
//                 frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//           {/* <AboutPrincipal/> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from "react";

function About() {
  return (
    <div className="px-4 py-6 bg-white text-gray-800 overflow-hidden">
      <div className="max-w-full mx-auto flex flex-col md:flex-col lg:flex-row items-start gap-6">
        {/* Text Section - Left Side */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 border-b-2 border-blue-400 inline-block">
            About District Project Livelihood College, Jashpur (Chhattisgarh)
          </h1>
          <p className="mb-4 leading-relaxed text-sm md:text-base">
            District Project Livelihood College, Jashpur is a flagship government initiative committed to transforming the futures of youth
            through high-quality, skill-based education. Established with the vision to empower young individuals from diverse backgrounds,
            the college serves as a bridge between traditional education and modern employability needs.
            <br /><br />
            Understanding the dynamic nature of today’s job market, the institution focuses on equipping students with hands-on training and
            real-world skills. From coding and software to graphic design, finance, business management, and education, it tailors courses
            to student aspirations.
            <br /><br />
            Strong industry collaboration ensures students gain not just theory but real experience via live projects and internships. The
            college is a symbol of opportunity, fostering sustainable livelihoods and empowering the youth of Jashpur.
          </p>
        </div>

        {/* Video Section - Right Side */}
        <div className="w-full lg:w-1/2 h-56 sm:h-64 md:h-72 lg:h-80">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/5tepB-Zk5s8"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default About;