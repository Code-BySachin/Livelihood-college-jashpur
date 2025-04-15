import { useState } from "react";

const UpdateCarousel = () => {
  const [posters, setPosters] = useState([""]);
  
  const handleChange = (index, value) => {
    const updated = [...posters];
    updated[index] = value;
    setPosters(updated);
  };

  const handleAddPoster = () => {
    setPosters([...posters, ""]);
  };

  const handleRemovePoster = (index) => {
    const updated = posters.filter((_, i) => i !== index);
    setPosters(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Posters:", posters); // Replace with API call
    alert("Carousel updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Update Carousel Posters</h2>

      {posters.map((url, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={url}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Enter image URL"
            className="flex-1 px-3 py-2 border rounded-md"
          />
          {posters.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemovePoster(index)}
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
          onClick={handleAddPoster}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          + Add Poster
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Carousel
        </button>
      </div>
    </form>
  );
};

export default UpdateCarousel;
