import {
  EducationStyled,
  EducationList,
  EducationItem,
} from "./education.styled";

let data = [
  {
    name: "Techcollege Aalborg",
    title: "Web Developer",
  },
  {
    name: "Campus 10 Thisted",
    title: "10th Grade",
  },
];

export const Education = () => {
  return (
    <EducationStyled>
      <h1>Education</h1>
      <EducationList>
        {data.map((item, index) => (
          <EducationItem key={index}>
            <p>{item.name}</p>
            <p>{item.title}</p>
          </EducationItem>
        ))}
      </EducationList>
    </EducationStyled>
  );
};
