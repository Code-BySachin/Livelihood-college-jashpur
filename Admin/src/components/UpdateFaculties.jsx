import { useState } from "react";

const departments = [
  "Hospitality & Tourism",
  "Apparel",
  "Security",
  "IT & Electronics",
  "Beauty & Wellness",
  "Construction",
  "Automobile",
];

const UpdateFaculties = () => {
  const [faculties, setFaculties] = useState([
    { name: "", designation: "", department: "", image: null, preview: null },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...faculties];
    updated[index][field] = value;
    setFaculties(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = [...faculties];
      updated[index].image = file;
      updated[index].preview = reader.result;
      setFaculties(updated);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAddFaculty = () => {
    setFaculties([
      ...faculties,
      { name: "", designation: "", department: "", image: null, preview: null },
    ]);
  };

  const handleRemoveFaculty = (index) => {
    const updated = faculties.filter((_, i) => i !== index);
    setFaculties(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Faculties:", faculties);
    alert("Faculty list saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Update Faculties</h2>

      {faculties.map((faculty, index) => (
        <div key={index} className="mb-6 border p-4 rounded-lg bg-gray-50 space-y-3">
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <input
              type="text"
              value={faculty.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              placeholder="Enter name"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Designation</label>
            <input
              type="text"
              value={faculty.designation}
              onChange={(e) => handleChange(index, "designation", e.target.value)}
              placeholder="e.g., Instructor"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Department / Sector</label>
            <select
              value={faculty.department}
              onChange={(e) => handleChange(index, "department", e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="">Select Department</option>
              {departments.map((dep, i) => (
                <option key={i} value={dep}>{dep}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(index, e.target.files[0])}
              className="py-1"
            />
            {faculty.preview && (
              <img
                src={faculty.preview}
                alt="Faculty"
                className="mt-2 h-32 w-32 object-cover rounded shadow"
              />
            )}
          </div>

          <button
            type="button"
            onClick={() => handleRemoveFaculty(index)}
            className="text-red-600 hover:underline"
          >
            Remove Faculty
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={handleAddFaculty}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          + Add Faculty
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Faculties
        </button>
      </div>
    </form>
  );
};

export default UpdateFaculties;
