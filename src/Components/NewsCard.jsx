import React from "react";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view, tags } = news;

  // Format date
  const formattedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  const fullWeekday = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Link to={`/NewsDetails/${news.id}`}>
      <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 p-4 space-y-4">
        {/* Author */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {author?.name}
              </p>
              <p className="text-xs text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex gap-3 text-gray-500">
            <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
            <FaShareAlt className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 leading-snug">
          {title}
        </h2>

        {/* Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-52 object-cover rounded-md"
        />

        {/* Tags & Details */}
        <div className="text-sm text-gray-600">
          <p className="text-xs font-medium mb-1">
            {fullWeekday} |<span className="text-gray-400"> Tag Cloud:</span>{" "}
            {tags?.join(", ")}
          </p>
          <p>
            {details.length > 200 ? details.slice(0, 200) + "..." : details}
            <span className="text-orange-500 font-medium cursor-pointer">
              {" "}
              Read More
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-orange-400 gap-1">
            {Array.from({ length: rating?.number }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-800 text-sm ml-1">
              {rating?.number}.0
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaEye />
            {total_view}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
