import { ref } from "vue";

/** @type {{id: number, name: string, short_description: string, content: string, images: string[], rating: number, location_name: string, latitude: number, longitude: number, categories: string[]}[]} */
const _restaurants = [
  {
    id: 1,
    name: "Bouchon Les Lyonnais",
    short_description:
      "Traditional Lyonnais bouchon serving classic local dishes.",
    content:
      "A cozy and authentic bouchon that offers a range of traditional Lyonnais dishes in a charming setting.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.6,
    location_name: "Lyon",
    latitude: 45.7597,
    longitude: 4.8426,
    categories: ["Lyonnais", "Bouchon", "Traditional"],
  },
  {
    id: 2,
    name: "Le Comptoir du Relais",
    short_description:
      "Elegant restaurant with a modern twist on French cuisine.",
    content:
      "Offers a refined dining experience with contemporary French dishes and an extensive wine list.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.5,
    location_name: "Lyon",
    latitude: 45.758,
    longitude: 4.8357,
    categories: ["French", "Modern", "Elegant"],
  },
  {
    id: 3,
    name: "La Mère Brazier",
    short_description:
      "Michelin-starred restaurant known for its gourmet French cuisine.",
    content:
      "A prestigious establishment offering high-end French cuisine with a rich history and elegant ambiance.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.7,
    location_name: "Lyon",
    latitude: 45.7582,
    longitude: 4.8325,
    categories: ["Michelin-starred", "French", "Gourmet"],
  },
  {
    id: 4,
    name: "Les Fines Gueules",
    short_description:
      "Charming eatery specializing in fine wines and gourmet small plates.",
    content:
      "Perfect for wine lovers and those looking to enjoy sophisticated small plates in a relaxed setting.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.4,
    location_name: "Lyon",
    latitude: 45.7579,
    longitude: 4.8314,
    categories: ["Wine", "Gourmet", "Casual"],
  },
  {
    id: 5,
    name: "Le Gourmet de Sèze",
    short_description:
      "Upscale dining with a focus on seasonal and locally-sourced ingredients.",
    content:
      "Offers an elegant dining experience with dishes made from fresh, seasonal ingredients sourced locally.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.6,
    location_name: "Lyon",
    latitude: 45.7622,
    longitude: 4.8415,
    categories: ["Upscale", "Seasonal", "Local"],
  },
  {
    id: 6,
    name: "Brasserie Georges",
    short_description:
      "Classic brasserie with a diverse menu featuring traditional French fare.",
    content:
      "A traditional brasserie known for its hearty French dishes and lively atmosphere.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.3,
    location_name: "Lyon",
    latitude: 45.759,
    longitude: 4.8422,
    categories: ["Brasserie", "French", "Traditional"],
  },
  {
    id: 7,
    name: "Café du Soleil",
    short_description:
      "Cozy café offering a range of pastries, coffee, and light meals.",
    content:
      "A great spot for breakfast or a casual lunch, featuring freshly baked pastries and quality coffee.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.2,
    location_name: "Lyon",
    latitude: 45.764,
    longitude: 4.8357,
    categories: ["Café", "Pastries", "Light Meals"],
  },
  {
    id: 8,
    name: "L'Ourson qui Boit",
    short_description:
      "Quaint bistro serving inventive French cuisine in a warm setting.",
    content:
      "Known for its creative dishes and welcoming atmosphere, perfect for a relaxed dining experience.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.5,
    location_name: "Lyon",
    latitude: 45.7593,
    longitude: 4.8326,
    categories: ["Bistro", "French", "Inventive"],
  },
  {
    id: 9,
    name: "Le Sud",
    short_description:
      "Mediterranean-inspired restaurant with a focus on fresh ingredients.",
    content:
      "Offers a Mediterranean dining experience with a menu that highlights fresh, seasonal ingredients.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.4,
    location_name: "Lyon",
    latitude: 45.7608,
    longitude: 4.8321,
    categories: ["Mediterranean", "Fresh", "Seasonal"],
  },
  {
    id: 10,
    name: "Le Bouchon des Filles",
    short_description:
      "Authentic Lyonnais bouchon with a focus on traditional flavors.",
    content:
      "A true bouchon experience, serving classic Lyonnais dishes in a casual and friendly setting.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.6,
    location_name: "Lyon",
    latitude: 45.7567,
    longitude: 4.8387,
    categories: ["Lyonnais", "Bouchon", "Traditional"],
  },
  {
    id: 11,
    name: "Le Petit Bec",
    short_description:
      "Small bistro known for its delightful French comfort food.",
    content:
      "A quaint bistro offering comforting French dishes in a cozy, intimate setting.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.3,
    location_name: "Lyon",
    latitude: 45.7575,
    longitude: 4.8351,
    categories: ["Bistro", "Comfort Food", "French"],
  },
  {
    id: 12,
    name: "La Table d’Eugène",
    short_description:
      "Modern restaurant with innovative French cuisine and an elegant atmosphere.",
    content:
      "Provides a modern take on French cuisine with an emphasis on creativity and high-quality ingredients.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.8,
    location_name: "Lyon",
    latitude: 45.7584,
    longitude: 4.8395,
    categories: ["Modern", "French", "Innovative"],
  },
  {
    id: 13,
    name: "Bistro de la Montée",
    short_description:
      "Casual bistro with a focus on hearty and flavorful French dishes.",
    content:
      "Offers a relaxed environment with a menu featuring hearty and flavorful French classics.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.2,
    location_name: "Lyon",
    latitude: 45.7612,
    longitude: 4.8368,
    categories: ["Bistro", "French", "Hearty"],
  },
  {
    id: 14,
    name: "Le Patio",
    short_description:
      "Elegant restaurant with a beautiful outdoor patio and a diverse menu.",
    content:
      "Features a lovely outdoor patio and a diverse menu that blends classic and contemporary French cuisine.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.7,
    location_name: "Lyon",
    latitude: 45.7628,
    longitude: 4.8372,
    categories: ["Elegant", "Outdoor", "French"],
  },
  {
    id: 15,
    name: "Chez Paul",
    short_description:
      "Traditional French restaurant offering a range of classic dishes.",
    content:
      "A classic French restaurant known for its traditional dishes and welcoming atmosphere.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    rating: 4.5,
    location_name: "Lyon",
    latitude: 45.755,
    longitude: 4.8378,
    categories: ["Traditional", "French", "Classic"],
  },
];

export const restaurants = ref(_restaurants);
