import React from "react";
import "./kitchen.css"; // CSS for the kitchen page
import fes1 from "../../../../components/Images/Blog/kitchen/kitchan1.jpg";
import fes2 from "../../../../components/Images/Blog/kitchen/kitchan2.jpg";
import fes3 from "../../../../components/Images/Blog/kitchen/kitchen3.jpg";
import fes4 from "../../../../components/Images/Blog/kitchen/kitchen9.jpg";
import fes5 from "../../../../components/Images/Blog/kitchen/kitchen5.jpg";
import fes6 from "../../../../components/Images/Blog/kitchen/kitchen6.jpg";
import fes7 from "../../../../components/Images/Blog/kitchen/kitchen7.jpg";
import fes8 from "../../../../components/Images/Blog/kitchen/kitchen8.jpg";
import fes9 from "../../../../components/Images/Blog/kitchen/kitchen9.jpg";
// import fes2 from "../../components/Images/Blog/kitchen/";

function Kitchen() {
  // Each card has a unique image and updated descriptions
  const kitchens = [
    {
      id: 1,
      name: "Modern kitchen Room",
      description: "Transform your home with a sleek and minimalistic kitchen room design.",
      image: fes1,
    },
    {
      id: 2,
      name: "Cozy kitchen Space",
      description: "Create a warm and inviting space with plush sofas and soft lighting.",
      image: fes2,
    },
    {
      id: 3,
      name: "Classic kitchen Room",
      description: "Bring timeless elegance to your home with vintage furniture and decor.",
      image: fes3,
    },
    {
      id: 4,
      name: "Nature-Inspired kitchen Room",
      description: "Enhance your space with indoor plants and earthy tones for a natural vibe.",
      image: fes4,
    },
    {
      id: 5,
      name: "Luxury kitchen Room",
      description: "Add sophistication with premium furniture and metallic accents.",
      image: fes5,
    },
    {
      id: 6,
      name: "Minimalist kitchen Room",
      description: "Simplify your space with clean lines and clutter-free designs.",
      image: fes6,
    },
    {
      id: 7,
      name: "Rustic kitchen Room",
      description: "Combine wood textures and warm tones for a cozy, rustic feel.",
      image: fes7,
    },
    {
      id: 8,
      name: "Scandinavian kitchen Room",
      description: "Achieve a modern yet cozy aesthetic with neutral colors and simple decor.",
      image: fes8,
    },
    {
      id: 9,
      name: "Industrial kitchen Room",
      description: "Incorporate metal and raw textures for an edgy, industrial look.",
      image: fes9,
    },
    // {
    //   id: 10,
    //   name: "Elegant kitchen Room",
    //   description: "Elevate your space with luxurious fabrics and statement lighting.",
    //   image: fes10,
    // },
  ];

  return (
    <div className="kitchen-container">
      <h1>kitchen Room Ideas</h1>
      <div className="kitchen-grid">
        {kitchens.map((kitchen) => (
          <div key={kitchen.id} className="kitchen-card">
            <img src={kitchen.image} alt={kitchen.name} className="kitchen-image" />
            <div className="kitchen-details">
              <h2>{kitchen.name}</h2>
              <p>{kitchen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kitchen;
