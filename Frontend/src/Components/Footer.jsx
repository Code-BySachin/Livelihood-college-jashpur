import nicLogo from '../assets/nicLogo.png';
import digitalIndiaLogo from '../assets/digitalIndia.png';
import navgurukulLogo from '../assets/navgurukulLogo.png';
import JashpurLogo from '../assets/Jashpur-livelihood-logo.png';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8 text-center md:text-left">
        {/* Logo & Name */}
        <div className="flex-1 text-center">
          <img src={JashpurLogo} alt="Government Logo" className="w-20 mx-auto" />
          <h2 className="text-xl font-bold mt-2">Government Livelihood College</h2>
          <p className="text-gray-300 text-sm mt-1">Empowering youth with skills.</p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="https://jashpur.nic.in/en/" className="hover:underline">Jashpur District</a></li>
            <li><a href="https://edistrict.cgstate.gov.in/PACE/login.do#" className="hover:underline">e district</a></li>
            <li><a href="https://jashpurpolice.cg.gov.in/" className="hover:underline">Jashpur police</a></li>
            <li><a href="https://revenue.cg.nic.in/revcase/" className="hover:underline">Revenue court</a></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">Livelihood college, Jashpur, India</p>
          <p className="text-gray-300 text-sm">Email: info@govcollege.edu</p>
          <p className="text-gray-300 text-sm">Phone: +91 9876543210</p>

          {/* Social Icons */}
          <div className="flex justify-center  space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">Linkedin</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 Government Livelihood College. All Rights Reserved.
        <p>Last updated: <strong className="text-white">Apr 22, 2025</strong></p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <img src={navgurukulLogo} alt="Navgurukul" className="h-10" />
          <img src={nicLogo} alt="NIC" className="h-10" />
          <img src={digitalIndiaLogo} alt="Digital India" className="h-10" />
        </div>
      </div>
    </footer>
  );
}