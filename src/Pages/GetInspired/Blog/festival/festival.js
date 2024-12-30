import React from "react";
import "./festivals.css"; // CSS for the festival page
import fes1 from "../../../../components/Images/Blog/festivals/fes3.jpg";
import fes3 from "../../../../components/Images/Blog/festivals/feson.jpg";
import fes4 from "../../../../components/Images/Blog/festivals/fes11.jpg";
import fes5 from "../../../../components/Images/Blog/festivals/fes14.jpg";
import fes6 from "../../../../components/Images/Blog/festivals/fes13.jpg";
import fes7 from "../../../../components/Images/Blog/festivals/fes7.png";
import fes8 from "../../../../components/Images/Blog/festivals/fes8.jpg";
import fes9 from "../../../../components/Images/Blog/festivals/fes9.jpg";
import fes10 from "../../../../components/Images/Blog/festivals/fes5.jpg";
import fes2 from "../../../../components/Images/Blog/festivals/holi2.jpg";

function Festival() {
  // Each card has a unique image
  const festivals = [
    {
      id: 1,
      name: "Diwali Festival",
      description: "Celebrate the festival of lights with grandeur and joy.",
      image: fes1,
    },
    {
      id: 3,
      name: "Navratri Festival",
      description: "Enjoy traditional Garba and Dandiya nights during Navratri.",
      image: fes3,
    },
    {
      id: 4,
      name: "Christmas Festival",
      description: "Spread love and joy during the Christmas season.",
      image: fes4,
    },
    {
      id: 5,
      name: "Eid Festival",
      description: "Celebrate the spirit of togetherness and gratitude.",
      image: fes5,
    },
    {
      id: 6,
      name: "Ganesh Chaturthi",
      description: "Worship Lord Ganesha with devotion and joy.",
      image: fes6,
    },
    {
      id: 7,
      name: "Durga Puja",
      description: "Celebrate the victory of good over evil with Durga Puja.",
      image: fes7,
    },
    {
      id: 8,
      name: "Baisakhi Festival",
      description: "Celebrate the harvest festival with dance and music.",
      image: fes8,
    },
    {
      id: 9,
      name: "Raksha Bandhan",
      description: "Celebrate the bond of love between siblings.",
      image: fes9,
    },
    {
      id: 10,
      name: "Pongal Festival",
      description: "Celebrate the harvest and give thanks to nature.",
      image: fes10,
    },
    {
      id: 2,
      name: "Holi Festival",
      description: "Experience the vibrant colors of Holi with friends and family.",
      image: fes2,
    },
  ];

  return (
    <div className="festival-container">
      <h1>Festival Decorations</h1>
      <div className="festival-grid">
        {festivals.map((festival) => (
          <div key={festival.id} className="festival-card">
            <img src={festival.image} alt={festival.name} className="festival-image" />
            <div className="festival-details">
              <h2>{festival.name}</h2>
              <p>{festival.description}</p>
              {/* Removed Add to Cart button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Festival;
