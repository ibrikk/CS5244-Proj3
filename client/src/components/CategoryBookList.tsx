import React from "react";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";
import Card from "./Card";
import CategoryNavBar from "./CategoryNavBar";
import { useParams } from "react-router-dom";
import { Book, Category } from "../types";

interface CategoryPageProps {
  mockData: Category[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ mockData }) => {
  const { categoryName } = useParams<{ categoryName: string }>();

  console.log("categoryName", categoryName);

  const getDisplayName = (categoryPath: string) => {
    const categoryMap: { [key: string]: string } = {
      NewReleases: "New Releases",
      BestSellers: "Best Sellers",
      Trending: "Trending",
      OnSale: "On Sale",
      Fiction: "Fiction",
      Business: "Business",
      Romance: "Romance",
      Travel: "Travel",
      Cooking: "Cooking",
      ActionAndAdventure: "Action & Adventure",
      DIY: "DIY",
    };
    return categoryMap[categoryPath] || categoryPath;
  };

  console.log("mockData", mockData);

  const displayName = getDisplayName(categoryName || "");
  console.log("displayName", displayName);
  const category = mockData.filter(
    (item: Category) => item.category === displayName
  );
  console.log("category", category);

  return (
    <>
      <CategoryNavBar />
      <div className="not-found">
        {category.length === 0 ? (
          <p>No books found for the selected category.</p>
        ) : (
          <div className="cards-container grid grid-full">
            {category[0].books.map((book: Book) => (
              <Card key={book.id} book={book} isHomePage={false} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
