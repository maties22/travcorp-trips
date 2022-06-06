import styled from "styled-components";
import { TripPreview } from "../trip-preview/trip-preview";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTripsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTripPreview = styled(TripPreview)`
  margin: 8px;
`;

export { StyledContainer, StyledTripsWrapper, StyledTripPreview };
