import styled from "styled-components";
import { Icon } from "../icon/icon";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  margin: 0 2px;
`;

const StyledRatingText = styled.p`
  margin: 0 0 0 8px;
  font-weight: 600;
`;

export { StyledContainer, StyledIcon, StyledRatingText };
