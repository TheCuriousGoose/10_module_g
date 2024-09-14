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
      "https://uniiti.com/images/shops/slides/c185a529d367c6159401f2a3559b5d2fad9e4101.jpeg",
      "https://uniiti.com/images/shops/slides/7640bb8753fa4692f7f85398f50bb69ef4b6b797.jpeg"
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
      "https://media.timeout.com/images/105420341/image.jpg",
      "https://th.bing.com/th/id/OIP.ZzYZYEUvA7njlSHOvc2m7wAAAA?rs=1&pid=ImgDetMain"
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
      "https://th.bing.com/th/id/R.00fb4ed2413633369e5b1da753cf1e24?rik=9iLKCmt5%2b9Y6Ag&pid=ImgRaw&r=0",
      "https://diningwithfrankie.com/wp-content/uploads/2019/01/img_9429.jpeg"
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
      "https://media.lovefood.com/images/83363/original/les-fines-gueules-restaurant.jpg",
      "https://media.lovefood.com/images/83362/original/les-fines-gueules-restaurant-interior.jpg"
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
      "https://media.lovefood.com/images/83364/original/le-gourmet-de-seze-restaurant.jpg",
      "https://media.lovefood.com/images/83365/original/le-gourmet-de-seze-dishes.jpg"
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
      "https://media.lovefood.com/images/83366/original/brasserie-georges-restaurant.jpg",
      "https://media.lovefood.com/images/83367/original/brasserie-georges-interior.jpg"
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
      "https://media.lovefood.com/images/83368/original/cafe-du-soleil-restaurant.jpg",
      "https://media.lovefood.com/images/83369/original/cafe-du-soleil-coffee.jpg"
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
      "https://media.lovefood.com/images/83370/original/l-ourson-qui-boit-restaurant.jpg",
      "https://media.lovefood.com/images/83371/original/l-ourson-qui-boit-dishes.jpg"
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
      "https://media.lovefood.com/images/83372/original/le-sud-restaurant.jpg",
      "https://media.lovefood.com/images/83373/original/le-sud-dishes.jpg"
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
      "https://media.lovefood.com/images/83374/original/le-bouchon-des-filles-restaurant.jpg",
      "https://media.lovefood.com/images/83375/original/le-bouchon-des-filles-interior.jpg"
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
      "https://media.lovefood.com/images/83376/original/le-petit-bec-restaurant.jpg",
      "https://media.lovefood.com/images/83377/original/le-petit-bec-dishes.jpg"
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
      "https://media.lovefood.com/images/83378/original/la-table-d-eugene-restaurant.jpg",
      "https://media.lovefood.com/images/83379/original/la-table-d-eugene-dishes.jpg"
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
      "https://media.lovefood.com/images/83380/original/bistro-de-la-montee-restaurant.jpg",
      "https://media.lovefood.com/images/83381/original/bistro-de-la-montee-dishes.jpg"
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
      "https://media.lovefood.com/images/83382/original/le-patio-restaurant.jpg",
      "https://media.lovefood.com/images/83383/original/le-patio-outdoor.jpg"
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
      "https://media.lovefood.com/images/83384/original/chez-paul-restaurant.jpg",
      "https://media.lovefood.com/images/83385/original/chez-paul-dishes.jpg"
    ],
    rating: 4.5,
    location_name: "Lyon",
    latitude: 45.755,
    longitude: 4.8378,
    categories: ["Traditional", "French", "Classic"],
  },
];

export const restaurants = ref(_restaurants);
