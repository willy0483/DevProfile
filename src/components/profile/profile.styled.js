import styled from "styled-components";

export const ProfileStyled = styled.section`
  display: grid;
  grid-template-areas: 
    "profileImage aboutMe aboutMe aboutMe"
    "employment employment education education"
    "competencies workTogether workTogether moreAboutMe";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  grid-gap: 16px;
  height: calc(100vh - 50px);
  max-width: 1000px;
  margin: auto;
  padding: ${(props) => props.theme.padding};
  color: ${(props) => props.theme.color.white};
`;

export const ProfileImage = styled.div`
  grid-area: profileImage;
  aspect-ratio: 1;
  background-image: linear-gradient(to right bottom,  #0d0d0d, #0f0f0f, #111111, #121212, #141414);
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.padding};
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

export const WorkTogether = styled.div`
  grid-area: workTogether;
  height: 200px;
`;

export const MoreAboutMe = styled.div`
  grid-area: moreAboutMe;
  height: 200px;
`;