import React from "react";

const CardContainer = ({ cards }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full m-10">
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.card_name} content={card.content} />
        ))}
      </div>
  </div>
  );
};

const Card = ({ title, content }) => {
  return (
    <div className="flex relative w-48 lg:w-48 h-40 md:h-60  bg-blue-500 rounded-lg p-4 m-2 transition-all duration-500 hover:w-80 hover:opacity-100 opacity-30">
      <h2 className="text-white absolute bottom-6 left-6 transition-all duration-500">
        {title}
      </h2>
      <p className="text-white mt-16">
        {content}
      </p>
    </div>
  );
};

export default CardContainer;
