import { useDispatch } from "react-redux";
import { rateIt } from "../utils/ratingSlice";
import { useState } from "react";
const RatingComponent = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(rateIt(index));
    setClicked(!clicked);
  };
  return (
    <div className="rating-comp">
      {Array(5)
        .fill()
        .map((none, index) => {
          return (
            <button
              className={clicked ? "active" : "not-active"}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
    </div>
  );
};
export default RatingComponent;
