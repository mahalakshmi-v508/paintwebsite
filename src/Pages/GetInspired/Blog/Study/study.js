import React from "react";
import "./study.css"; // CSS for the study page
import fes1 from"../../../../components/Images/Blog/study/blog21.jpg";
import fes2 from "../../../../components/Images/Blog/study/blog22.webp";
import fes3 from "../../../../components/Images/Blog/study/blog24.jpg";
import fes4 from "../../../../components/Images/Blog/study/stu5.jpg";
import fes5 from "../../../../components/Images/Blog/study/stu6.jpg";
import fes6 from "../../../../components/Images/Blog/study/stu7.jpg";
import fes7 from "../../../../components/Images/Blog/study/stu8.jpg";
import fes8 from "../../../../components/Images/Blog/study/stu9.jpg";
// import fes10 from "../../components/Images/Blog/studys/studys5.jpg";
// import fes2 from "../../components/Images/Blog/studys/studys8.jpg";

function Studys() {
  // Each card has a unique image and updated descriptions
  const studys = [
    {
      id: 1,
      name: "Modern study Room",
      description: "Transform your home with a sleek and minimalistic study room design.",
      image: fes1,
    },
    {
      id: 2,
      name: "Cozy study Space",
      description: "Create a warm and inviting space with plush sofas and soft lighting.",
      image: fes2,
    },
    {
      id: 3,
      name: "Classic study Room",
      description: "Bring timeless elegance to your home with vintage furniture and decor.",
      image: fes3,
    },
    {
      id: 4,
      name: "Nature-Inspired study Room",
      description: "Enhance your space with indoor plants and earthy tones for a natural vibe.",
      image: fes4,
    },
    {
      id: 5,
      name: "Luxury study Room",
      description: "Add sophistication with premium furniture and metallic accents.",
      image: fes5,
    },
    {
      id: 6,
      name: "Minimalist study Room",
      description: "Simplify your space with clean lines and clutter-free designs.",
      image: fes6,
    },
    {
      id: 7,
      name: "Rustic study Room",
      description: "Combine wood textures and warm tones for a cozy, rustic feel.",
      image: fes7,
    },
    {
      id: 8,
      name: "Scandinavian study Room",
      description: "Achieve a modern yet cozy aesthetic with neutral colors and simple decor.",
      image: fes8,
    },
    // {
    //   id: 9,
    //   name: "Industrial study Room",
    //   description: "Incorporate metal and raw textures for an edgy, industrial look.",
    //   image: fes9,
    // },
    // {
    //   id: 10,
    //   name: "Elegant study Room",
    //   description: "Elevate your space with luxurious fabrics and statement lighting.",
    //   image: fes10,
    // },
  ];

  return (
    <div className="study-container">
      <h1>study Room Ideas</h1>
      <div className="study-grid">
        {studys.map((study) => (
          <div key={study.id} className="study-card">
            <img src={study.image} alt={study.name} className="study-image" />
            <div className="study-details">
              <h2>{study.name}</h2>
              <p>{study.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Studys;
