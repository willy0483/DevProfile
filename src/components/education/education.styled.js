import styled from "styled-components";

export const EducationStyled = styled.section`
grid-area: education;
height: 300px;
background-image: linear-gradient(to left, #0d0d0d, #0f0f0f, #111111, #121212, #141414);
border-radius: ${(props) => props.theme.borderRadius};
padding: ${(props) => props.theme.padding};
`

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EducationItem = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.white};
  }
  p:first-of-type{
    color: ${(props) => props.theme.color.white};
  }
  p {
    margin: 0.5rem 0 0;
    color: #666;
  }
`;