import {
  ProfileStyled,
  ProfileImage,
  WorkTogether,
  MoreAboutMe,
  WorkTogetherImage,
} from "./profile.styled";
import { AboutMe } from "../aboutMe/aboutMe";
import { Employment } from "../employment/employment";
import { Education } from "../education/education";
import { Competencies } from "../competencies/competencies";
import pfp from "../../assets/jpg/rango.jpg";

import github from "../../assets/svg/github.svg";
import discord from "../../assets/svg/discord.svg";
import mail from "../../assets/svg/mail.svg";

export const Profile = () => {
  const data = [
    { name: "github", icon: github, link: "https://github.com/willy0483" },
    {
      name: "discord",
      icon: discord,
      link: "https://discord.com/users/____4641",
    },
    { name: "mail", icon: mail, link: "mailto:willyjensen251@gmail.com" },
  ];

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
        <div>
          {data.map((item, index) => (
            <WorkTogetherImage key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} alt={`${item.name} icon`} />
              </a>
            </WorkTogetherImage>
          ))}
        </div>
        <h1>Lets work together</h1>
      </WorkTogether>
      <MoreAboutMe>
        <h1>MoreAboutMe</h1>
      </MoreAboutMe>
    </ProfileStyled>
  );
};
