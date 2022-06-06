import {
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledLastPriceText,
  StyledPriceText,
  StyledTextWrapper,
  StyledTitle,
} from "./trip-preview.styled";
import { Rate } from "../rate/rate";
import { formatPrice } from "../../utils";

type TripPreviewProps = {
  title: string;
  countries: number;
  days: number;
  imageSrc: string;
  imageAlt: string;
  rating: number;
  currentPrice: number;
  lastPrice?: number;
};

const TripPreview = ({
  title,
  countries,
  days,
  imageSrc,
  imageAlt,
  rating,
  currentPrice,
  lastPrice,
  ...rest
}: TripPreviewProps) => {
  const isRatingVisible = rating > 0;

  return (
    <StyledContainer {...rest}>
      <StyledImage src={imageSrc} alt={imageAlt} />
      <StyledTextWrapper>
        <StyledDescription>
          {countries} Countries, {days} Days
        </StyledDescription>
        <StyledTitle>{title}</StyledTitle>
        {isRatingVisible && <Rate rating={rating} />}
        <StyledPriceText>
          From {formatPrice(currentPrice)}{" "}
          {lastPrice && (
            <StyledLastPriceText>
              {" "}
              &bull; <s>Price {formatPrice(lastPrice)}</s>
            </StyledLastPriceText>
          )}
        </StyledPriceText>
      </StyledTextWrapper>
    </StyledContainer>
  );
};

export { TripPreview };
