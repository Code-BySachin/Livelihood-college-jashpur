import staffData from "./StaffData";

const Staff = () => {
  return (
    <div className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {staffData.map((staff) => (
        <div
          key={staff.id}
          className="bg-gray-100 p-4 rounded-xl shadow-md text-center"
        >
          <img
            src={staff.image}
            alt={staff.name}
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">{staff.name}</h3>
          <p className="text-sm text-gray-600 font-medium">{staff.role}</p>
          <p className="text-sm mt-2 text-gray-700">{staff.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Staff;