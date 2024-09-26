// New Releases
import img1984 from "./assets/images/books/1984.jpg";
import imgAllTheDarkColors from "./assets/images/books/all_the_dark_colors.jpg";
import imgGreatGatsby from "./assets/images/books/great-gratsby.jpg";
import imgTheHousemaid from "./assets/images/books/the_housemaid.jpg";
import imgDaydream from "./assets/images/books/daydream.jpg";
import rmrCreatures from "./assets/images/books/remarkably.jpg";

// For You
import sapiens from "./assets/images/books//sapiens.jpg";
import animalFarm from "./assets/images/books/Animal Farm.jpg";
import whyNationFail from "./assets/images/books/daron acemoglu.jpg";
import originOfSecies from "./assets/images/books/Darvin Origins.jpg";
import bananasBeaches from "./assets/images/books//cyntia Enloe.jpg";
import imaginedCommunities from "./assets/images/books/imagined communities.jpg";

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  picture: string;
  pictureDescription: string;
  isPublic: boolean;
}

export interface Category {
  id: number;
  category: string;
  books: Book[];
}

const mockData: Category[] = [
  {
    id: 1001,
    category: "New Releases",
    books: [
      {
        id: 1,
        title: "1984",
        author: "George Orwell",
        price: 17.45,
        picture: img1984,
        pictureDescription: "1984 book cover",
        isPublic: true,
      },
      {
        id: 2,
        title: "All The Colors of the Dark",
        author: "Chris Walker",
        price: 13.59,
        picture: imgAllTheDarkColors,
        pictureDescription: "All The Colors of the Dark book cover",
        isPublic: true,
      },
      {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 15.99,
        picture: imgGreatGatsby,
        pictureDescription: "The Great Gatsby book cover",
        isPublic: false,
      },
      {
        id: 4,
        title: "The Housemaid",
        author: "Freida McFadden",
        price: 8.99,
        picture: imgTheHousemaid,
        pictureDescription: "The Housemaid book cover",
        isPublic: true,
      },
      {
        id: 5,
        title: "Daydream",
        author: "Hannah Grace",
        price: 12.5,
        picture: imgDaydream,
        pictureDescription: "Daydream book cover",
        isPublic: false,
      },
      {
        id: 6,
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        price: 18.99,
        picture: rmrCreatures,
        pictureDescription: "Remarkably Bright Creatures book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1002,
    category: "For You",
    books: [
      {
        id: 6,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 24.99,
        picture: sapiens,
        pictureDescription: "Sapiens book cover",
        isPublic: true,
      },
      {
        id: 7,
        title: "Animal Farm",
        author: "George Orwell",
        price: 5.5,
        picture: animalFarm,
        pictureDescription: "Animal Farm book cover",
        isPublic: true,
      },
      {
        id: 8,
        title: "Why Nations Fail",
        author: "Daron Acemoglu and James A. Robinson",
        price: 13.5,
        picture: whyNationFail,
        pictureDescription: "Why Nations Fail book cover",
        isPublic: false,
      },
      {
        id: 9,
        title: "Origin of Species",
        author: "Charles Darwin",
        price: 29.5,
        picture: originOfSecies,
        pictureDescription: "Origin of Species book cover",
        isPublic: true,
      },
      {
        id: 10,
        title: "Bananas, Beaches, and Bases",
        author: "Cynthia Enloe",
        price: 15.8,
        picture: bananasBeaches,
        pictureDescription: "Bananas, Beaches, and Bases book cover",
        isPublic: false,
      },
      {
        id: 11,
        title: "Imagined Communities",
        author: "Benedict Anderson",
        price: 18.4,
        picture: imaginedCommunities,
        pictureDescription: "Imagined Communities book cover",
        isPublic: true,
      },
    ],
  },
];

export default mockData;
