// function Footer(){
//     return(
//         <footer>

//         </footer>
//     )
// }

// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import logo from "../assets/logo.png"; // Add your logo path

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Name */}
        <div>
          <img src={"#"} alt="Government Logo" className="w-20 mx-auto md:mx-0" />
          <h2 className="text-xl font-bold mt-2">Government Livelihood College</h2>
          <p className="text-gray-300 text-sm mt-1">Empowering youth with skills.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">123, Government Road, India</p>
          <p className="text-gray-300 text-sm">Email: info@govcollege.edu</p>
          <p className="text-gray-300 text-sm">Phone: +91 9876543210</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Facebook</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 Government Livelihood College. All Rights Reserved.
      </div>
    </footer>
  );
}
