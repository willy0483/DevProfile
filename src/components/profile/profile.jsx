import {
  ProfileStyled,
  ProfileImage,
  WorkTogether,
  MoreAboutMe,
} from "./profile.styled";
import { AboutMe } from "../aboutMe/aboutMe";
import { Employment } from "../employment/employment";
import { Education } from "../education/education";
import { Competencies } from "../competencies/competencies";
import pfp from "../../assets/jpg/rango.jpg";

export const Profile = () => {
  return (
    <ProfileStyled>
      <ProfileImage>
        <img src={pfp} alt="ProfileImage" />
      </ProfileImage>
      <AboutMe />
      <Employment />
      <Education />
      <Competencies />
      <WorkTogether>
        <h1>WorkTogether</h1>
      </WorkTogether>
      <MoreAboutMe>
        <h1>MoreAboutMe</h1>
      </MoreAboutMe>
    </ProfileStyled>
  );
};
