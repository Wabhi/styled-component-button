import React from "react";
import { DarkButton, FancyButton, StyledButton } from "./Button.styled";

const Button = () => {
  return (
    <>
      <StyledButton>CLICK ME</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton color="red">CLICK ME</StyledButton>
      <div>
        <br />
        <br />
        <br />
      </div>
      <FancyButton as="a"> CLICK ME</FancyButton>
      <div>
        <br />
        <br />
        <br />
      </div>
      <DarkButton />
    </>
  );
};

export default Button;
