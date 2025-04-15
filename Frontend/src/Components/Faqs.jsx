import { useState } from "react";

const sampleFaqs = [
    {
      question: "What is the admission process?",
      answer:
        "You can apply online through our Admission Portal. Once submitted, our team will contact you for document verification and counseling.",
    },
    {
      question: "Are the courses free?",
      answer:
        "Yes, all courses provided under the government livelihood college are free of cost for eligible candidates.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "You will need your Aadhar Card, educational certificates, and passport-size photographs.",
    },
    {
      question: "Who can apply for the courses?",
      answer:
        "Any Indian citizen meeting the basic eligibility criteria such as minimum education qualification and age can apply.",
    },
    {
      question: "Is there any age limit for applying?",
      answer:
        "Most courses are open to individuals aged 18 to 35 years. However, this may vary based on course guidelines.",
    },
    {
      question: "How long are the courses?",
      answer:
        "Courses typically range from 3 to 6 months depending on the sector and module.",
    },
    {
      question: "Will I get a certificate after course completion?",
      answer:
        "Yes, you will receive a government-recognized certificate upon successful completion of the course and assessments.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, placement assistance is provided through our training partners and industry collaborations.",
    },
    {
      question: "Is hostel or accommodation available?",
      answer:
        "Hostel facilities are available in selected centers. Please check with the respective college before applying.",
    },
    {
      question: "Can I apply for multiple courses?",
      answer:
        "You can apply for one course at a time. After completion, you may reapply for another course if eligible.",
    },
    {
      question: "Where can I find the list of available courses?",
      answer:
        "You can visit the 'Schemes' or 'Courses' section on our website to view the latest offerings.",
    },
  ];
  

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {sampleFaqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 font-medium flex justify-between items-center"
            >
              <span className="font-bold">{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
