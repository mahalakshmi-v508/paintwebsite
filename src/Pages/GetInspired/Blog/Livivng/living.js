import React from "react";
import "./living.css"; // CSS for the living page
import fes1 from "../../../../components/Images/Blog/living/blog15.jpg";
import fes3 from "../../../../components/Images/Blog/living/blog16.jpg";
import fes4 from "../../../../components/Images/Blog/living/blog18.jpg";
import fes5 from "../../../../components/Images/Blog/living/liv5.jpg";
import fes6 from "../../../../components/Images/Blog/living/liv6.jpg";
import fes7 from "../../../../components/Images/Blog/living/liv7.jpg";
import fes8 from "../../../../components/Images/Blog/living/livi8.jpg";
import fes9 from "../../../../components/Images/Blog/living/liv9.jpg";
import fes10 from "../../../../components/Images/Blog/living/liv10.jpg";
import fes2 from "../../../../components/Images/Blog/living/liv11.jpg";

function Living() {
  // Each card has a unique image and updated descriptions
  const livings = [
    {
      id: 1,
      name: "Modern Living Room",
      description: "Transform your home with a sleek and minimalistic living room design.",
      image: fes1,
    },
    {
      id: 2,
      name: "Cozy Living Space",
      description: "Create a warm and inviting space with plush sofas and soft lighting.",
      image: fes2,
    },
    {
      id: 3,
      name: "Classic Living Room",
      description: "Bring timeless elegance to your home with vintage furniture and decor.",
      image: fes3,
    },
    {
      id: 4,
      name: "Nature-Inspired Living Room",
      description: "Enhance your space with indoor plants and earthy tones for a natural vibe.",
      image: fes4,
    },
    {
      id: 5,
      name: "Luxury Living Room",
      description: "Add sophistication with premium furniture and metallic accents.",
      image: fes5,
    },
    {
      id: 6,
      name: "Minimalist Living Room",
      description: "Simplify your space with clean lines and clutter-free designs.",
      image: fes6,
    },
    {
      id: 7,
      name: "Rustic Living Room",
      description: "Combine wood textures and warm tones for a cozy, rustic feel.",
      image: fes7,
    },
    {
      id: 8,
      name: "Scandinavian Living Room",
      description: "Achieve a modern yet cozy aesthetic with neutral colors and simple decor.",
      image: fes8,
    },
    {
      id: 9,
      name: "Industrial Living Room",
      description: "Incorporate metal and raw textures for an edgy, industrial look.",
      image: fes9,
    },
    {
      id: 10,
      name: "Elegant Living Room",
      description: "Elevate your space with luxurious fabrics and statement lighting.",
      image: fes10,
    },
  ];

  return (
    <div className="living-container">
      <h1>Living Room Ideas</h1>
      <div className="living-grid">
        {livings.map((living) => (
          <div key={living.id} className="living-card">
            <img src={living.image} alt={living.name} className="living-image" />
            <div className="living-details">
              <h2>{living.name}</h2>
              <p>{living.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Living;
