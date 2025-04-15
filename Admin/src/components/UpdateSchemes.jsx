import { useState } from "react";

const UpdateSchemes = () => {
  const [schemes, setSchemes] = useState([
    { sector: "Hospitality & Tourism", courses: ["Cooking", "Housekeeping"] },
  ]);

  const handleSectorChange = (index, value) => {
    const updated = [...schemes];
    updated[index].sector = value;
    setSchemes(updated);
  };

  const handleCourseChange = (sIndex, cIndex, value) => {
    const updated = [...schemes];
    updated[sIndex].courses[cIndex] = value;
    setSchemes(updated);
  };

  const handleAddSector = () => {
    setSchemes([...schemes, { sector: "", courses: [""] }]);
  };

  const handleRemoveSector = (index) => {
    const updated = schemes.filter((_, i) => i !== index);
    setSchemes(updated);
  };

  const handleAddCourse = (sIndex) => {
    const updated = [...schemes];
    updated[sIndex].courses.push("");
    setSchemes(updated);
  };

  const handleRemoveCourse = (sIndex, cIndex) => {
    const updated = [...schemes];
    updated[sIndex].courses.splice(cIndex, 1);
    setSchemes(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Schemes:", schemes); // Replace with API
    alert("Schemes saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Update Schemes</h2>

      {schemes.map((scheme, sIndex) => (
        <div key={sIndex} className="mb-6 border p-4 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={scheme.sector}
              onChange={(e) => handleSectorChange(sIndex, e.target.value)}
              placeholder="Enter sector name"
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <button
              type="button"
              onClick={() => handleRemoveSector(sIndex)}
              className="text-red-600 hover:underline"
            >
              Remove Sector
            </button>
          </div>

          <h4 className="font-medium mb-2">Courses:</h4>
          {scheme.courses.map((course, cIndex) => (
            <div key={cIndex} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={course}
                onChange={(e) => handleCourseChange(sIndex, cIndex, e.target.value)}
                placeholder="Course name"
                className="flex-1 px-3 py-2 border rounded-md"
              />
              {scheme.courses.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveCourse(sIndex, cIndex)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => handleAddCourse(sIndex)}
            className="text-sm text-blue-600 hover:underline mt-1"
          >
            + Add Course
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={handleAddSector}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          + Add Sector
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Schemes
        </button>
      </div>
    </form>
  );
};

export default UpdateSchemes;
