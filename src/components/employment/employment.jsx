import {
  EmploymentStyled,
  EmploymentList,
  EmploymentItem,
} from "./employment.styled";

let data = [
  {
    year: "2021-2023",
    name: "Dolle, Frøstrup",
    title: "Teen worker",
  },
  {
    year: "2023-2024",
    name: "Thisted kommune",
    title: "Teen worker",
  },
];

export const Employment = () => {
  return (
    <EmploymentStyled>
      <h1>Employment</h1>
      <EmploymentList>
        {data.map((item, index) => (
          <EmploymentItem key={index}>
            <p>{item.year}</p>
            <p>{item.name}</p>
            <p>{item.title}</p>
          </EmploymentItem>
        ))}
      </EmploymentList>
    </EmploymentStyled>
  );
};
