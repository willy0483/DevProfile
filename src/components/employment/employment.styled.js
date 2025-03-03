import styled from "styled-components";

export const EmploymentStyled = styled.section`
grid-area: employment;
height: 300px;
background-image: linear-gradient(to right, #0d0d0d, #0f0f0f, #111111, #121212, #141414);
border-radius: ${(props) => props.theme.borderRadius};
padding: ${(props) => props.theme.padding};
`
export const EmploymentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmploymentItem = styled.div`
  border-radius: 10px;
  h2 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.white};
  }
  p:nth-child(2){
    color: ${(props) => props.theme.color.white};
  }
  p {
    margin: 0.5rem 0 0;
    color: #666;
  }
`;