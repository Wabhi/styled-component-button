import Button from "./Button/Button";
import "./styles.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "blue",
    text: "white"
  },
  light: {
    primary: "yellow",
    text: "red"
  }
};

const GloablStyle = createGlobalStyle`
button{
  background-color:"yello"
}
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GloablStyle> */}
      <div className="App">
        <Button />
      </div>
      {/* </GloablStyle> */}
    </ThemeProvider>
  );
}
