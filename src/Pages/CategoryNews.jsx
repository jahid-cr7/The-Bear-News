import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const [category, setCategory] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    if (id == "0") {
      setCategory(data);
    } else if (id == "1") {
      const filteredCategory = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategory(filteredCategory);
    } else {
      const filteredCategory = data.filter((news) => news.category_id == id);
      setCategory(filteredCategory);
    }
  }, [data, id]);

  return (
    <div>
      Total <span className="font-bold">{category.length}</span> news found
      <div className="grid grid-cols-1 gap-4 mt-4 px-4">
        {category.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
