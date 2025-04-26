const Staff = () => {
  const staffData = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      role: "Principal",
      description: "Experienced leader with a vision to enhance the institution.",
      image: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png",
    },
    {
      id: 2,
      name: "Ms. Neha Verma",
      role: "Head of Department - Science",
      description: "Dedicated to promoting scientific curiosity and excellence.",
      image: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png",
    },
    {
      id: 3,
      name: "Mr. Arjun Kumar",
      role: "Physical Education Teacher",
      description: "Passionate about fitness and discipline among students.",
      image: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png",
    },
    {
        id: 4,
        name: "Dr. Rajesh Sharma",
        role: "Principal",
        description: "Experienced leader with a vision to enhance the institution.",
        image: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png",
      },
      {
        id: 5,
        name: "Ms. Neha Verma",
        role: "Head of Department - Science",
        description: "Dedicated to promoting scientific curiosity and excellence.",
        image: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png",
      },
      {
        id: 6,
        name: "Mr. Arjun Kumar",
        role: "Physical Education Teacher",
        description: "Passionate about fitness and discipline among students.",
        image: "https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-single-asian-girl-in-formal-office-dress-business-professional-women-style-png-image_12502627.png",
      }
  ];
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