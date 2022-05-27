import Styled from "styled-components";

export const StyledButton = Styled.button`
cursor:pointer;
border-radius:15px;
font-size:16px;
background-color:${(props) => (props.color === "red" ? "blue" : "red")};
text-align:center;
font-weight:700;
padding:30px 60px;
border:none;
transition: 0.5s all ease-out
color:${(props) => (props.color === "red" ? "red" : "#fff")};
&:hover{
  color:white;
  background-color:green;
}

`;

export const FancyButton = Styled(StyledButton)`
background-image:linear-gradient(to right,#fd6365 0%,#fda085 100%);
border:none
`;

export const DarkButton = Styled(StyledButton)`
border: 2px solid ${(props) => props.theme.dark.primary};
background-color:${(props) => props.theme.dark.primary}
color:${(props) => props.theme.dark.text}
`;
