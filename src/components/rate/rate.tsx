import { useEffect, useState } from "react";
import { StyledContainer, StyledIcon, StyledRatingText } from "./rate.styled";

type RateProps = {
  rating: number;
};

const Rate = ({ rating }: RateProps) => {
  const [isHalfStar, setHalfStar] = useState(false);
  const flooredRating = Math.floor(rating);
  const ratingDiff = rating - flooredRating;

  useEffect(() => {
    ratingDiff <= 0.5 ? setHalfStar(true) : setHalfStar(false);
  }, [flooredRating, rating, ratingDiff]);

  const fullStars = [...Array(flooredRating)].map((_, index) => (
    <StyledIcon key={`star-${index}`} type="StarFill" color="gold"></StyledIcon>
  ));

  const lastStar = isHalfStar ? (
    <StyledIcon type="StarHalf" color="gold" />
  ) : (
    <StyledIcon type="StarFill" color="gold" />
  );

  return (
    <StyledContainer>
      {fullStars}
      {ratingDiff !== 0 && lastStar}
      <StyledRatingText>{rating.toFixed(1)}</StyledRatingText>
    </StyledContainer>
  );
};

export { Rate };
