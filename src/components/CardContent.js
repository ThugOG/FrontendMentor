import Submit from "./Submit";
import RatingComponent from "./RatingComponent";
const CardContent = () => {
  return (
    <div className="card-content">
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
        <RatingComponent />
      <Submit />
    </div>
  );
};
export default CardContent;
