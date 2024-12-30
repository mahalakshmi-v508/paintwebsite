import React from "react";
import "./kids.css"; // CSS for the kid page
import fes1 from "../../../../components/Images/Blog/kits/kit1.jpg";
import fes2 from "../../../../components/Images/Blog/kits/kids7.jpg";
import fes3 from "../../../../components/Images/Blog/kits/kids2.jpg";
import fes4 from "../../../../components/Images/Blog/kits/kids3.jpg";
import fes5 from "../../../../components/Images/Blog/kits/kids4.jpg";
import fes6 from "../../../../components/Images/Blog/kits/kids5.jpg";
import fes7 from "../../../../components/Images/Blog/kits/kids6.jpg";
import fes8 from "../../../../components/Images/Blog/kits/kids8.jpg";
// import fes10 from "../../components/Images/Blog/kids/kids5.jpg";
// import fes2 from "../../components/Images/Blog/kids/kids8.jpg";

function Kids() {
  // Each card has a unique image and updated descriptions
  const kids = [
    {
      id: 1,
      name: "Modern kid Room",
      description: "Transform your home with a sleek and minimalistic kid room design.",
      image: fes1,
    },
    {
      id: 2,
      name: "Cozy kid Space",
      description: "Create a warm and inviting space with plush sofas and soft lighting.",
      image: fes2,
    },
    {
      id: 3,
      name: "Classic kid Room",
      description: "Bring timeless elegance to your home with vintage furniture and decor.",
      image: fes3,
    },
    {
      id: 4,
      name: "Nature-Inspired kid Room",
      description: "Enhance your space with indoor plants and earthy tones for a natural vibe.",
      image: fes4,
    },
    {
      id: 5,
      name: "Luxury kid Room",
      description: "Add sophistication with premium furniture and metallic accents.",
      image: fes5,
    },
    {
      id: 6,
      name: "Minimalist kid Room",
      description: "Simplify your space with clean lines and clutter-free designs.",
      image: fes6,
    },
    {
      id: 7,
      name: "Rustic kid Room",
      description: "Combine wood textures and warm tones for a cozy, rustic feel.",
      image: fes7,
    },
    {
      id: 8,
      name: "Scandinavian kid Room",
      description: "Achieve a modern yet cozy aesthetic with neutral colors and simple decor.",
      image: fes8,
    },
    // {
    //   id: 9,
    //   name: "Industrial kid Room",
    //   description: "Incorporate metal and raw textures for an edgy, industrial look.",
    //   image: fes9,
    // },
    // {
    //   id: 10,
    //   name: "Elegant kid Room",
    //   description: "Elevate your space with luxurious fabrics and statement lighting.",
    //   image: fes10,
    // },
  ];

  return (
    <div className="kid-container">
      <h1>kid Room Ideas</h1>
      <div className="kid-grid">
        {kids.map((kid) => (
          <div key={kid.id} className="kid-card">
            <img src={kid.image} alt={kid.name} className="kid-image" />
            <div className="kid-details">
              <h2>{kid.name}</h2>
              <p>{kid.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
