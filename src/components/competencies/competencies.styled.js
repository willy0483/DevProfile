import styled from "styled-components";

export const CompetenciesStyled = styled.section`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.padding};    
  background-image: linear-gradient(to right top, #0d0d0d, #0f0f0f, #111111, #121212, #141414);
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompetenciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

export const CompetencyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  img {
    width: 70px;
    height: 70px;
  }
`;