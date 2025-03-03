import styled from "styled-components";

export const AboutMeStyled = styled.article`
grid-area: aboutMe;
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 250px;
background-image: linear-gradient(to left bottom, #0d0d0d, #0f0f0f, #111111, #121212, #141414);
border-radius: ${(props) => props.theme.borderRadius};
padding: ${(props) => props.theme.padding};
color: ${(props) => props.theme.color.greytext};
`

export const AboutMeTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.white};
`;