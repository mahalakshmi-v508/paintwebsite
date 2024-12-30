import React, { useState } from "react";
import "./trendingcolor.css";

import bannerImage from "../../../components/Images/trendingcolor/banner/banner1.jpg";
import LivingroomImage1 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_1.webp"
import LivingroomImage2 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_2.webp"
import LivingroomImage3 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_3.webp"
import LivingroomImage4 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_4.webp"
import LivingroomImage5 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_5.webp"
import LivingroomImage6 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_6.webp"
import LivingroomImage7 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_7.webp"
import LivingroomImage8 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_8.webp"
import LivingroomImage9 from "../../../components/Images/trendingcolor/inderior/livingroom/living-room-tresnding-colours_9.webp"

import KidsroomdImage1 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_1.webp"
import KidsroomdImage2 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_2-1.webp"
import KidsroomdImage3 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_3.webp"
import KidsroomdImage4 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_4.webp"
import KidsroomdImage5 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_5.webp"
import KidsroomdImage6 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_6.webp"
import KidsroomdImage7 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_7.webp"
import KidsroomdImage8 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_8.webp"
import KidsroomdImage9 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_9.webp"
import KidsroomdImage10 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_10.webp"
import KidsroomdImage11 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_11-1.webp"
import KidsroomdImage12 from "../../../components/Images/trendingcolor/inderior/kidsroom/kids-room-tresnding-colours_12.webp"

import KitchenImage1 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_1-1.webp"
import KitchenImage2 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_2.webp"
import KitchenImage3 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_3.webp"
import KitchenImage4 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_5.webp"
import KitchenImage5 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_7.webp"
import KitchenImage6 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_8-1.webp"
import KitchenImage7 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_9.webp"
import KitchenImage8 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_10.webp"
import KitchenImage9 from "../../../components/Images/trendingcolor/inderior/kitchen/kitchen-tresnding-colours_11-1.webp"

import BedroomImage1 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_1.webp"
import BedroomImage2 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_2.webp"
import BedroomImage3 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_3.webp"
import BedroomImage4 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_4.webp"
import BedroomImage5 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_5.webp"
import BedroomImage6 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_6.webp"
import BedroomImage7 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_7.webp"
import BedroomImage8 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_8.webp"
import BedroomImage9 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_9.webp"
import BedroomImage10 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_10.webp"
import BedroomImage11 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_11.webp"
import BedroomImage12 from "../../../components/Images/trendingcolor/inderior/bedroom/bedroom_12.webp"

import BungalowImage1 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_1.webp"
import BungalowImage2 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_2.webp"
import BungalowImage3 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_3.webp"
import BungalowImage4 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_4.webp"
import BungalowImage5 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_5.webp"
import BungalowImage6 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_6-1.webp"
import BungalowImage7 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_7.webp"
import BungalowImage8 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_8.webp"
import BungalowImage9 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_9.webp"
import BungalowImage10 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_10-1.webp"
import BungalowImage11 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_11.webp"
import BungalowImage12 from "../../../components/Images/trendingcolor/exterior/bungalow/Bungalow-tresnding-colours_12.webp"

import FloorImage1 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_1-1.webp"
import FloorImage2 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_2.webp"
import FloorImage3 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_3.webp"
import FloorImage4 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_4.webp"
import FloorImage5 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_5.webp"
import FloorImage6 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_6.webp"
import FloorImage7 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_7-1.webp"
import FloorImage8 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_8.webp"
import FloorImage9 from "../../../components/Images/trendingcolor/exterior/floor/floor-tresnding-colours_9.webp"

import BuildingImage1 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_1.webp"
import BuildingImage2 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_2.webp"
import BuildingImage3 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_3.webp"
import BuildingImage4 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_4.webp"
import BuildingImage5 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_5-1.webp"
import BuildingImage6 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_6.webp"
import BuildingImage7 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_7.webp"
import BuildingImage8 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_8.webp"
import BuildingImage9 from "../../../components/Images/trendingcolor/exterior/building/Building-tresnding-colours_9.webp"


function Trendingcolor() {
  const [selectedCategory, setSelectedCategory] = useState("Interior");
  const [selectedRoom, setSelectedRoom] = useState("Living Room");
  // const [selectedRoom, setSelectedRoom] = useState("Bedroom"); // Just as an example


  const categories = ["Interior", "Exterior"];
  const Interiorrooms = ["Living Room", "Kids Room", "Kitchen", "Bed Room"];
  const Exteriorrooms = ["Bungalow", "Floor", "Building"];

  const Livingroomdetails = [
    { id: 1, image: LivingroomImage1, name: "Modern Living Room", description: "A modern design with sleek colors and minimal furniture.", paintColorName: "Sky Blue" },
    { id: 2, image: LivingroomImage2, name: "Cozy Living Room", description: "A warm, inviting living room with earthy tones.", paintColorName: "Warm Beige" },
    { id: 3, image: LivingroomImage3, name: "Elegant Living Room", description: "A blend of classic and modern with luxurious touches.", paintColorName: "Ivory White" },
    { id: 4, image: LivingroomImage4, name: "Spacious Living Room", description: "An open, airy space with neutral colors and large windows.", paintColorName: "Light Grey" },
    { id: 5, image: LivingroomImage5, name: "Rustic Living Room", description: "A charming rustic design with natural wood accents.", paintColorName: "Earthy Brown" },
    { id: 6, image: LivingroomImage6, name: "Contemporary Living Room", description: "A contemporary design with pops of color.", paintColorName: "Charcoal Black" },
    { id: 7, image: LivingroomImage7, name: "Chic Living Room", description: "A stylish design with modern patterns and textures.", paintColorName: "Soft Lavender" },
    { id: 8, image: LivingroomImage8, name: "Vintage Living Room", description: "A vintage-inspired space with retro furniture and warm tones.", paintColorName: "Golden Yellow" },
    { id: 9, image: LivingroomImage9, name: "Coastal Living Room", description: "A bright and breezy coastal-themed living room.", paintColorName: "Ocean Blue" }
  ];

  const Kidsroomdetails = [
    { id: 10, image: KidsroomdImage1, name: "Fun Kids Room", description: "A playful room with colorful walls and furniture.", paintColorName: "Candy Red" },
    { id: 11, image: KidsroomdImage2, name: "Creative Kids Room", description: "A creative room with an art wall and fun design.", paintColorName: "Sky Blue" },
    { id: 12, image: KidsroomdImage3, name: "Adventure Kids Room", description: "An adventure-themed room with lots of open space.", paintColorName: "Sunshine Yellow" },
    { id: 13, image: KidsroomdImage4, name: "Cozy Kids Room", description: "A cozy, inviting room with soft pastel colors.", paintColorName: "Pastel Pink" },
    { id: 14, image: KidsroomdImage5, name: "Space Kids Room", description: "A space-themed room with stars and galaxy designs.", paintColorName: "Midnight Blue" },
    { id: 15, image: KidsroomdImage6, name: "Jungle Kids Room", description: "A jungle-inspired room with vibrant greens.", paintColorName: "Jungle Green" },
    { id: 16, image: KidsroomdImage7, name: "Ocean Kids Room", description: "An ocean-themed room with blue and white colors.", paintColorName: "Ocean Blue" },
    { id: 17, image: KidsroomdImage8, name: "Forest Kids Room", description: "A nature-inspired room with wooden elements.", paintColorName: "Forest Green" },
    { id: 18, image: KidsroomdImage9, name: "Superhero Kids Room", description: "A superhero-themed room with bold colors.", paintColorName: "Crimson Red" },
    { id: 19, image: KidsroomdImage10, name: "Princess Kids Room", description: "A fairy-tale room with soft colors and a touch of sparkle.", paintColorName: "Princess Pink" },
    { id: 20, image: KidsroomdImage11, name: "Robot Kids Room", description: "A futuristic room with robot-themed decor.", paintColorName: "Metallic Silver" },
    { id: 21, image: KidsroomdImage12, name: "Artistic Kids Room", description: "An artistic room with mural walls and creative designs.", paintColorName: "Artistic Purple" }
  ];
  

  const Kitchendetails = [
    { id: 22, image: KitchenImage1, name: "Modern Kitchen", description: "A sleek kitchen with contemporary design and high-end appliances.", paintColorName: "Steel Gray" },
    { id: 23, image: KitchenImage2, name: "Rustic Kitchen", description: "A rustic kitchen with wooden accents and warm tones.", paintColorName: "Walnut Brown" },
    { id: 24, image: KitchenImage3, name: "Minimalist Kitchen", description: "A minimalist kitchen with clean lines and neutral colors.", paintColorName: "Pure White" },
    { id: 25, image: KitchenImage4, name: "Industrial Kitchen", description: "An industrial-style kitchen with exposed elements and modern finishes.", paintColorName: "Charcoal Black" },
    { id: 26, image: KitchenImage5, name: "Farmhouse Kitchen", description: "A cozy farmhouse kitchen with vintage appliances and a welcoming vibe.", paintColorName: "Creamy Beige" },
    { id: 27, image: KitchenImage6, name: "Contemporary Kitchen", description: "A contemporary kitchen with elegant design and top-of-the-line features.", paintColorName: "Ocean Blue" },
    { id: 28, image: KitchenImage7, name: "Classic Kitchen", description: "A timeless kitchen with traditional styling and high-end cabinetry.", paintColorName: "Ivory White" },
    { id: 29, image: KitchenImage8, name: "Gourmet Kitchen", description: "A gourmet kitchen designed for professional chefs with advanced tools and appliances.", paintColorName: "Midnight Black" },
    { id: 30, image: KitchenImage9, name: "Bright Kitchen", description: "A bright, airy kitchen with plenty of natural light and cheerful decor.", paintColorName: "Sunny Yellow" }
  ];
  

  const Bedroomdetails = [
    { id: 31, image: BedroomImage1, name: "Modern Bedroom", description: "A contemporary bedroom with minimalist decor and clean lines.", paintColorName: "Soft White" },
    { id: 32, image: BedroomImage2, name: "Rustic Bedroom", description: "A cozy rustic bedroom with wooden furniture and earthy tones.", paintColorName: "Pine Wood" },
    { id: 33, image: BedroomImage3, name: "Industrial Bedroom", description: "An industrial-style bedroom featuring raw materials and a bold design.", paintColorName: "Concrete Gray" },
    { id: 34, image: BedroomImage4, name: "Bohemian Bedroom", description: "A boho-inspired bedroom with vibrant colors and eclectic furniture.", paintColorName: "Tangerine Dream" },
    { id: 35, image: BedroomImage5, name: "Contemporary Bedroom", description: "A sleek bedroom with neutral tones and modern furniture.", paintColorName: "Urban Gray" },
    { id: 36, image: BedroomImage6, name: "Classic Bedroom", description: "A timeless bedroom design featuring elegant furniture and soft, neutral colors.", paintColorName: "Ivory White" },
    { id: 37, image: BedroomImage7, name: "Coastal Bedroom", description: "A light and airy bedroom with beach-inspired decor and ocean hues.", paintColorName: "Seashell Beige" },
    { id: 38, image: BedroomImage8, name: "Glamorous Bedroom", description: "A luxurious bedroom with sophisticated accents and plush decor.", paintColorName: "Crystal Silver" },
    { id: 39, image: BedroomImage9, name: "Minimalist Bedroom", description: "A simple and serene bedroom with a focus on clean lines and functionality.", paintColorName: "Cool White" },
    { id: 40, image: BedroomImage10, name: "Luxury Bedroom", description: "An opulent bedroom with rich textures, deep hues, and high-end furnishings.", paintColorName: "Royal Blue" },
    { id: 41, image: BedroomImage11, name: "Traditional Bedroom", description: "A classic bedroom design with vintage furniture and warm, earthy tones.", paintColorName: "Warm Taupe" },
    { id: 42, image: BedroomImage12, name: "Zen Bedroom", description: "A tranquil bedroom with a Zen-inspired design and calming colors.", paintColorName: "Soft Green" }
  ];
  

  const Bungalowdetails = [
    { id: 43, image: BungalowImage1, name: "Tropical Bungalow", description: "A tropical-inspired bungalow with bright colors and open-air spaces.", paintColorName: "Ocean Blue" },
    { id: 44, image: BungalowImage2, name: "Modern Bungalow", description: "A sleek and minimalist bungalow with clean lines and contemporary finishes.", paintColorName: "Stone Gray" },
    { id: 45, image: BungalowImage3, name: "Beachfront Bungalow", description: "A bungalow with stunning views of the beach and a breezy atmosphere.", paintColorName: "Sandy Beige" },
    { id: 46, image: BungalowImage4, name: "Rustic Bungalow", description: "A cozy, rustic bungalow with wood accents and a warm, inviting feel.", paintColorName: "Timber Brown" },
    { id: 47, image: BungalowImage5, name: "Luxury Bungalow", description: "A luxurious bungalow with upscale amenities and an elegant design.", paintColorName: "Gold Champagne" },
    { id: 48, image: BungalowImage6, name: "Country Bungalow", description: "A country-style bungalow with a homey vibe and vintage furniture.", paintColorName: "Farmhouse White" },
    { id: 49, image: BungalowImage7, name: "Contemporary Bungalow", description: "A modern bungalow with sleek decor and open floor plans.", paintColorName: "Slate Gray" },
    { id: 50, image: BungalowImage8, name: "Coastal Bungalow", description: "A beach-inspired bungalow with soft colors and natural materials.", paintColorName: "Seafoam Green" },
    { id: 51, image: BungalowImage9, name: "Eco Bungalow", description: "An eco-friendly bungalow with sustainable design and green energy solutions.", paintColorName: "Earthy Green" },
    { id: 52, image: BungalowImage10, name: "Victorian Bungalow", description: "A charming Victorian-style bungalow with ornate detailing and classic design.", paintColorName: "Lavender Gray" },
    { id: 53, image: BungalowImage11, name: "Zen Bungalow", description: "A peaceful, Zen-inspired bungalow with minimalist decor and tranquil surroundings.", paintColorName: "Soft White" },
    { id: 54, image: BungalowImage12, name: "Alpine Bungalow", description: "A mountain-style bungalow with a warm, wood-centric design perfect for snowy settings.", paintColorName: "Mountain Pine" }
  ];
  
  const Floordetails = [
    { id: 55, image: FloorImage1, name: "Wooden Floor", description: "A classic wooden floor with rich texture and warm tones.", material: "Wood" },
    { id: 56, image: FloorImage2, name: "Marble Floor", description: "A luxurious marble floor with smooth, polished finish and elegant veins.", material: "Marble" },
    { id: 57, image: FloorImage3, name: "Ceramic Floor", description: "A durable ceramic floor with patterned designs for a modern look.", material: "Ceramic" },
    { id: 58, image: FloorImage4, name: "Vinyl Floor", description: "A soft and affordable vinyl floor ideal for high-traffic areas.", material: "Vinyl" },
    { id: 59, image: FloorImage5, name: "Laminate Floor", description: "A stylish laminate floor with a wood-like finish and easy maintenance.", material: "Laminate" },
    { id: 60, image: FloorImage6, name: "Concrete Floor", description: "A raw and industrial concrete floor with a sleek, modern feel.", material: "Concrete" },
    { id: 61, image: FloorImage7, name: "Bamboo Floor", description: "A sustainable and eco-friendly bamboo floor with a light, natural finish.", material: "Bamboo" },
    { id: 62, image: FloorImage8, name: "Terrazzo Floor", description: "A unique terrazzo floor made of marble chips set in concrete, offering a distinctive pattern.", material: "Terrazzo" },
    { id: 63, image: FloorImage9, name: "Tile Floor", description: "A highly durable and easy-to-clean tile floor perfect for any room.", material: "Tile" }
  ];
  
  const Buildingdetails = [
    { id: 64, image: BuildingImage1, name: "Modern Skyscraper", description: "A tall and sleek building with glass facades and advanced architectural design.", material: "Glass, Steel" },
    { id: 65, image: BuildingImage2, name: "Urban Apartment Complex", description: "A multi-story apartment building with spacious residential units and amenities.", material: "Concrete, Glass" },
    { id: 66, image: BuildingImage3, name: "Traditional Mansion", description: "A luxurious mansion with classic architectural features and elegant interiors.", material: "Stone, Wood" },
    { id: 67, image: BuildingImage4, name: "Eco-Friendly Building", description: "A sustainable building featuring green materials and energy-efficient systems.", material: "Recycled Materials, Solar Panels" },
    { id: 68, image: BuildingImage5, name: "Business Tower", description: "A commercial office building with cutting-edge facilities and a prime location.", material: "Glass, Steel" },
    { id: 69, image: BuildingImage6, name: "Luxury Hotel", description: "A high-end hotel with a rooftop pool, fitness center, and elegant suites.", material: "Concrete, Glass, Wood" },
    { id: 70, image: BuildingImage7, name: "Shopping Mall", description: "A large shopping complex featuring retail stores, food courts, and entertainment zones.", material: "Steel, Concrete" },
    { id: 71, image: BuildingImage8, name: "Museum", description: "A cultural building designed for exhibitions, galleries, and historical collections.", material: "Concrete, Glass, Marble" },
    { id: 72, image: BuildingImage9, name: "Public Library", description: "A modern library building with vast collections of books, study areas, and digital resources.", material: "Brick, Glass" }
  ];
  


  return (
    <div className="app">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="Get Inspired" className="banner-image" />
        <div className="trendingcolor-banner-content">
          <h1 className="trendingcolor-banner-heading">Trending Color Combination</h1>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Room Buttons */}
      {selectedCategory === "Interior" && (
        <div className="room-buttons">
          {Interiorrooms.map((room) => (
            <button
              key={room}
              className={selectedRoom === room ? "active" : ""}
              onClick={() => setSelectedRoom(room)}
            >
              {room}
            </button>
          ))}
        </div>
      )}

      {selectedCategory === "Exterior" && (
        <div className="room-buttons">
          {Exteriorrooms.map((room) => (
            <button
              key={room}
              className={selectedRoom === room ? "active" : ""}
              onClick={() => setSelectedRoom(room)}
            >
              {room}
            </button>
          ))}
        </div>
      )}

<div className="room-details">
  {selectedRoom === "Living Room" &&
    Livingroomdetails.map((detail) => (
      <div key={detail.name} className="image-card">
        <img src={detail.image} alt={detail.name} />
        <div className="card-details">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Paint Color:</strong> {detail.paintColorName}</p>
        </div>
        
      </div>
      
    ))}
    </div>
  <div className="room-details">
  {selectedRoom === "Kids Room" &&
    Kidsroomdetails.map((detail) => (
      <div key={detail.id} className="image-card">
        <img src={detail.image} alt={detail.name} />
        <div className="card-details">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Paint Color:</strong> {detail.paintColorName}</p>
        </div>
      </div>
    ))}
</div>

  <div className="room-details">
  {selectedRoom === "Kitchen" &&
    Kitchendetails.map((detail) => (
      <div key={detail.id} className="image-card">
        <img src={detail.image} alt={detail.name} />
        <div className="card-details">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Paint Color:</strong> {detail.paintColorName}</p>
        </div>
      </div>
    ))}
</div>

<div className="room-details">
  {selectedRoom === "Bed Room" && 
  Bedroomdetails.map((detail) => (
    <div key={detail.id} className="image-card">
      <img src={detail.image} alt={detail.name} />
      <div className="card-details">
        <h3>{detail.name}</h3>
        <p>{detail.description}</p>
        <p><strong>Paint Color:</strong> {detail.paintColorName}</p>
      </div>
    </div>
  ))}
</div>


    <div className="room-details">
  {selectedRoom === "Bungalow" &&
    Bungalowdetails.map((detail) => (
      <div key={detail.id} className="image-card">
        <img src={detail.image} alt={detail.name} />
        <div className="card-details">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Paint Color:</strong> {detail.paintColorName}</p>
        </div>
      </div>
    ))}
</div>

    <div className="room-details">
  {selectedRoom === "Floor" &&
    Floordetails.map((detail) => (
      <div key={detail.id} className="image-card">
        <img src={detail.image} alt={detail.name} />
        <div className="card-details">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Material:</strong> {detail.material}</p>
        </div>
      </div>
    ))}
</div>

   <div className="room-details">
  {selectedRoom === "Building" &&
    Buildingdetails.map((detail) => (
      <div key={detail.id} className="image-card">
        <img src={detail.image} alt={detail.name} />
        <div className="card-details">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Material:</strong> {detail.material}</p>
        </div>
      </div>
    ))}
</div>



      
    </div>
  );
}

export default Trendingcolor;
