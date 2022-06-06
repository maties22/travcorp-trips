import { useRecentlyViewedTripsHook } from "./use-recently-viewed-trips.hook";
import {
  StyledContainer,
  StyledTripPreview,
  StyledTripsWrapper,
} from "./recently-viewed-trips.styled";

const STATIC_FILES_URL = "http://localhost:3002/images/";

const RecentlyViewedTrips = () => {
  const { trips } = useRecentlyViewedTripsHook();

  const tripsToRender = trips.map((trip) => (
    <StyledTripPreview
      key={trip.title}
      title={trip.title}
      countries={trip.countries}
      days={trip.days}
      imageSrc={`${STATIC_FILES_URL}${trip.imageSrc}`}
      imageAlt={trip.imageAlt}
      rating={trip.rating}
      currentPrice={trip.currentPrice}
      lastPrice={trip.lastPrice}
    />
  ));

  return (
    <StyledContainer>
      <h1>Recently viewed trips</h1>
      <StyledTripsWrapper>{tripsToRender}</StyledTripsWrapper>
    </StyledContainer>
  );
};

export { RecentlyViewedTrips };
