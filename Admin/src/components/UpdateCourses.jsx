import { useState } from "react";

const sectors = [
  "Hospitality & Tourism",
  "Apparel",
  "Security",
  "IT & Electronics",
  "Beauty & Wellness",
  "Construction",
  "Automobile",
];

const UpdateCourses = () => {
  const [courses, setCourses] = useState([
    {
      name: "",
      sector: "",
      duration: "",
      description: "",
      image: null,       // Image file
      preview: null,     // For image preview
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = [...courses];
      updated[index].image = file;
      updated[index].preview = reader.result;
      setCourses(updated);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddCourse = () => {
    setCourses([
      ...courses,
      { name: "", sector: "", duration: "", description: "", image: null, preview: null },
    ]);
  };

  const handleRemoveCourse = (index) => {
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Courses with images:", courses);
    alert("Courses saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Update Courses (with Image)</h2>

      {courses.map((course, index) => (
        <div key={index} className="mb-6 border p-4 rounded-lg bg-gray-50 space-y-3">
          <div className="flex flex-col">
            <label className="font-medium">Course Name</label>
            <input
              type="text"
              value={course.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              placeholder="e.g., Cooking, Stitching"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Sector</label>
            <select
              value={course.sector}
              onChange={(e) => handleChange(index, "sector", e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="">Select Sector</option>
              {sectors.map((sec, i) => (
                <option key={i} value={sec}>{sec}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Duration</label>
            <input
              type="text"
              value={course.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              placeholder="e.g., 3 Months"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Description</label>
            <textarea
              value={course.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              placeholder="Enter course details"
              className="px-3 py-2 border rounded-md resize-none"
              rows={3}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Upload Course Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(index, e.target.files[0])}
              className="py-1"
            />
            {course.preview && (
              <img
                src={course.preview}
                alt="Course Preview"
                className="mt-2 h-32 w-32 object-cover rounded shadow"
              />
            )}
          </div>

          <button
            type="button"
            onClick={() => handleRemoveCourse(index)}
            className="text-red-600 hover:underline"
          >
            Remove Course
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={handleAddCourse}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          + Add Course
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Courses
        </button>
      </div>
    </form>
  );
};

export default UpdateCourses;
