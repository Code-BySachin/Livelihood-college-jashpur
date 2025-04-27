import { Link } from 'react-router-dom';

const adminSections = [
  { name: "Latest Updates", path: "/admin/updatelatest" },
  { name: "Carousel Posters", path: "/admin/updatecarousel" },
  { name: "Admission Page", path: "/admin/updateadmission" },
  { name: "Schemes", path: "/admin/updateschemes" },
  { name: "Courses", path: "/admin/updatecourses" },
  { name: "Faculties", path: "/admin/updatefaculties" },
  { name: "FAQs", path: "/admin/updatefaqs" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Livelihood college Jashpur</h1>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Admin Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {adminSections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border hover:border-blue-500 transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-700 text-center">{section.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
