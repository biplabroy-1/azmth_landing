import React from "react";

const Future = () => {
  const topRow = [
    {
      title: "Dec 2024",
      description: "Beta Launch - MVP Development",
    },
    {
      title: "Jan 2025",
      description: "Pilot testing and MVP launch at Product Hunt with early adopters.",
    },
    {
      title: "Feb 2025",
      description: "Feedback Collection - Maintenance and final product development.",
    },
    {
      title: "Mar 2025",
      description: "Android and iOS Launch - Debugging & Maintenance Testing.",
    },
  ];

  const bottomRow = [
    {
      title: "Q2 2025",
      description: "Development of ‘Expert’ feature - Expansion in southern India.",
    },
    {
      title: "Q3 2025",
      description:
        "Fine-Tune for Indian Regional Languages - Scaling for 1 Million Users.",
    },
    {
      title: "Q4 2025",
      description:
        "Development of ‘Persona’ feature - Integration with third-party productivity platforms.",
    },
    {
      title: "Q1 2026",
      description:
        "Global Launch of Azmth - Scaling for 5 Million Users & R&D for hardware piece.",
    },
  ];

  return (
    <div className=" p-8 flex flex-col space-y-8">
      {/* Top Row */}
      <div className="grid grid-cols-4 gap-6">
        {topRow.map((event, index) => (
          <div
            key={index}
            className="relative p-6 backdrop-blur-md bg-[#052127]/90 hover:bg-[#052127] 
              transition-all duration-500 border-transparent rounded-lg shadow-lg h-52"
          >
            <div className="space-y-2">
              <h3 className="text-xl text-white font-semibold">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-white text-center text-lg"> ------------------------------ <span>Quarters</span> ------------------------------</h1>

      {/* Bottom Row */}
      <div className="grid grid-cols-4 gap-6">
        {bottomRow.map((event, index) => (
          <div
            key={index}
            className="relative p-6 backdrop-blur-md bg-[#052127]/90 hover:bg-[#052127] 
              transition-all duration-500 border-transparent rounded-lg shadow-lg h-52"
          >
            <div className="space-y-2">
              <h3 className="text-xl text-white font-semibold">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Future;
