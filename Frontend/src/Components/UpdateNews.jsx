import React, { useEffect, useRef, useState } from 'react';

function UpdateNews() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollArea = scrollRef.current;
    let scrollSpeed = 1;
    let animationId;

    const scrollStep = () => {
      if (scrollArea && !isHovered) {
        scrollArea.scrollTop += scrollSpeed;
        if (scrollArea.scrollTop >= scrollArea.scrollHeight - scrollArea.clientHeight) {
          scrollArea.scrollTop = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const notices = [
    {
      date: '20',
      month: 'Nov',
      title: 'Exam form and fee for M.Ed. 2nd SEM(Reg.) and M.Ed. 1st SEM (ATKT)',
      source: 'Examination Department Of University',
    },
    {
      date: '31',
      month: 'Jul',
      title: 'Time - Table for B.Ed Special Education I Semester Exam Dec-Jan 2023',
      source: 'Examination Department Of University',
    },
    {
      date: '10',
      month: 'Mar',
      title: 'Final Round of MBA Admission Counseling 2025',
      source: 'Academic Department',
    },
    {
      date: '04',
      month: 'Apr',
      title: 'UGC NET Application Form Released',
      source: 'UGC Committee',
    },
    {
      date: '13',
      month: 'Apr',
      title: 'Annual Cultural Fest Schedule',
      source: 'Student Affairs',
    },
  ];

  const handleKnowMore = (notice) => {
    alert(`You clicked: "${notice.title}"\nSource: ${notice.source}`);
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto border border-gray-200 rounded-md shadow-md font-sans bg-white">
      {/* Header */}
      <div className="bg-blue-800 text-white px-6 py-3 flex justify-between items-center text-sm font-semibold">
        <span>News & Updates</span>
        <span className="text-white text-xs cursor-pointer hover:underline">(View More)</span>
      </div>

      {/* Scrollable Notice List */}
      <div
        ref={scrollRef}
        className="h-80 overflow-y-auto px-6 py-4 space-y-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {notices.map((notice, index) => (
          <div
            key={index}
            className="flex justify-between items-start border-b border-gray-100 pb-4 gap-4"
          >
            {/* Date and Content */}
            <div className="flex flex-1">
              <div className="bg-blue-600 text-white text-center px-3 py-2 rounded-md w-14 font-bold mr-4 leading-tight">
                <div className="text-base">{notice.date}</div>
                <div className="text-xs">{notice.month}</div>
              </div>

              <div>
                <div className="text-sm font-semibold mb-1">{notice.title}</div>
                <div className="text-xs text-blue-600">{notice.source}</div>
              </div>
            </div>

            <button
              onClick={() => handleKnowMore(notice)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-md"
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpdateNews;
