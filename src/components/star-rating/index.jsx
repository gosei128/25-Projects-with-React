import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStar }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentId) => {
    setRating(getCurrentId);
  };
  const handleMouseEnter = (getCurrentId) => {
    setHover(getCurrentId);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
