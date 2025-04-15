import { useState } from "react";

const UpdateLatest = () => {
  const [updates, setUpdates] = useState([""]);

  const handleChange = (index, value) => {
    const updated = [...updates];
    updated[index] = value;
    setUpdates(updated);
  };

  const handleAddUpdate = () => {
    setUpdates([...updates, ""]);
  };

  const handleRemoveUpdate = (index) => {
    const updated = updates.filter((_, i) => i !== index);
    setUpdates(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Latest Updates:", updates); // Replace with API call
    alert("Latest updates saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Update Latest News & Notices</h2>

      {updates.map((text, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={text}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Enter update (e.g., 'Admissions open till April 30')"
            className="flex-1 px-3 py-2 border rounded-md"
          />
          {updates.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveUpdate(index)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={handleAddUpdate}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          + Add Update
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Updates
        </button>
      </div>
    </form>
  );
};

export default UpdateLatest;
