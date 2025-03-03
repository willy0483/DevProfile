import {
  CompetenciesStyled,
  CompetenciesGrid,
  CompetencyItem,
} from "./competencies.styled";

import css from "../../assets/svg/css.svg";
import html from "../../assets/svg/html.svg";
import js from "../../assets/svg/js.svg";
import react from "../../assets/svg/react.svg";

const data = [
  { name: "CSS", icon: css },
  { name: "HTML", icon: html },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
];

export const Competencies = () => {
  return (
    <CompetenciesStyled>
      <CompetenciesGrid>
        {data.map((item, index) => (
          <CompetencyItem key={index}>
            <img src={item.icon} alt={`${item.name} icon`} />
          </CompetencyItem>
        ))}
      </CompetenciesGrid>
    </CompetenciesStyled>
  );
};
