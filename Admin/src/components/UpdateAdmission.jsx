import { useState } from "react";

const UpdateAdmission = () => {
  const [sections, setSections] = useState([
    { title: "", content: "", image: null, preview: null },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = [...sections];
      updated[index].image = file;
      updated[index].preview = reader.result;
      setSections(updated);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAddSection = () => {
    setSections([...sections, { title: "", content: "", image: null, preview: null }]);
  };

  const handleRemoveSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admission Page Updated:", sections);
    alert("Admission details saved!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">
        Update Admission Page
      </h2>

      {sections.map((sec, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg mb-6 bg-white shadow space-y-4"
        >
          <div>
            <label className="block font-semibold mb-1">Section Title</label>
            <input
              type="text"
              value={sec.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder="e.g., Eligibility, Admission Process"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              rows="4"
              value={sec.content}
              onChange={(e) => handleChange(index, "content", e.target.value)}
              placeholder="Enter details for this section"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Upload Poster/Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(index, e.target.files[0])}
              className="py-1"
            />
            {sec.preview && (
              <img
                src={sec.preview}
                alt="Admission Poster"
                className="mt-2 h-40 rounded shadow object-contain"
              />
            )}
          </div>

          <button
            type="button"
            onClick={() => handleRemoveSection(index)}
            className="text-red-600 hover:underline"
          >
            Remove Section
          </button>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleAddSection}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          + Add Section
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Admission Page
        </button>
      </div>
    </form>
  );
};

export default UpdateAdmission;
