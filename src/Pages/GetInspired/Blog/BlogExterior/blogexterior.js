import React from "react";
import "./blogexterior.css"; // CSS for the exterior page
import fes1 from "../../../../components/Images/Blog/exterior/ex1.jpg";
import fes3 from "../../../../components/Images/Blog/exterior/ex2.jpg";
import fes2 from "../../../../components/Images/Blog/exterior/ex10.jpg";
import fes4 from "../../../../components/Images/Blog/exterior/ex4.jpg";
import fes5 from "../../../../components/Images/Blog/exterior/ex5.jpg";
import fes6 from "../../../../components/Images/Blog/exterior/ex6.jpg";
import fes7 from "../../../../components/Images/Blog/exterior/ex8.jpg";
import fes8 from "../../../../components/Images/Blog/exterior/ex9.jpg";
import fes9 from "../../../../components/Images/Blog/exterior/ex11.jpg";
import fes10 from "../../../../components/Images/Blog/exterior/ex12.jpg";

function Blogexterior() {
  // Each card has a unique image
  const exteriors = [
    {
      id: 1,
      name: "Diwali exterior",
      description: "Celebrate the exterior of lights with grandeur and joy.",
      image: fes1,
    },
    {
      id: 3,
      name: "Navratri exterior",
      description: "Enjoy traditional Garba and Dandiya nights during Navratri.",
      image: fes3,
    },
    {
      id: 4,
      name: "Christmas exterior",
      description: "Spread love and joy during the Christmas season.",
      image: fes4,
    },
    {
      id: 5,
      name: "Eid exterior",
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
      name: "Baisakhi exterior",
      description: "Celebrate the harvest exterior with dance and music.",
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
      name: "Pongal exterior",
      description: "Celebrate the harvest and give thanks to nature.",
      image: fes10,
    },
    {
      id: 2,
      name: "Holi exterior",
      description: "Experience the vibrant colors of Holi with friends and family.",
      image: fes2,
    },
  ];

  return (

    <div className="exterior-container">
      <h1>exterior Decorations</h1>
      <div className="exterior-grid">
        {exteriors.map((exterior) => (
          <div key={exterior.id} className="exterior-card">
            <img src={exterior.image} alt={exterior.name} className="exterior-image" />
            <div className="exterior-details">
              <h2>{exterior.name}</h2>
              <p>{exterior.description}</p>
              {/* Removed Add to Cart button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogexterior;
