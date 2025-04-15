import { useState } from "react";

const UpdateFaqs = () => {
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index) => {
    const updated = faqs.filter((_, i) => i !== index);
    setFaqs(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FAQs Submitted:", faqs);
    alert("FAQs saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Update FAQs</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border p-4 mb-4 rounded-lg bg-white shadow space-y-3"
        >
          <div>
            <label className="block font-semibold mb-1">Question</label>
            <input
              type="text"
              value={faq.question}
              onChange={(e) => handleChange(index, "question", e.target.value)}
              placeholder="Enter question"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Answer</label>
            <textarea
              rows="3"
              value={faq.answer}
              onChange={(e) => handleChange(index, "answer", e.target.value)}
              placeholder="Enter answer"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="button"
            onClick={() => handleRemoveFaq(index)}
            className="text-red-600 hover:underline"
          >
            Remove FAQ
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={handleAddFaq}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          + Add FAQ
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save FAQs
        </button>
      </div>
    </form>
  );
};

export default UpdateFaqs;
