import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Rating = ({...options}) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <div>
      <p>Your Rating: {rating} stars</p>
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleStarClick(index)}
            style={{ cursor: 'pointer' }}
          >
            {index < rating ? <IoIosStar /> : <IoIosStarOutline />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
