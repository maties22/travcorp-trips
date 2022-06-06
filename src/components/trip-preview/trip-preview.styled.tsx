import styled from "styled-components";

const StyledContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
`;

const StyledTextWrapper = styled.div`
  padding: 8px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  margin: 0 0 16px 0;
`;
const StyledDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: gray;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 300px;
  margin-bottom: 8px;
`;

const StyledPriceText = styled.p`
  margin: 0;
  font-weight: 600;

  s {
    color: gray;
  }
`;

const StyledLastPriceText = styled.span`
  color: gray;
`;

export {
  StyledContainer,
  StyledTextWrapper,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledPriceText,
  StyledLastPriceText,
};
