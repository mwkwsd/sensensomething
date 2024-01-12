import React from "react";
import styled from "@mui/system/styled";
import { FirstName } from "../../atoms/mainHeading/MainHeading";
import { LastName } from "../../atoms/subHeading/SubHeading";

const HeaderContainer = styled("div")({
  margin: "20px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
});

const TitleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <FirstName firstName="KURT" />
        <LastName lastName="SENSENBRENNER" />
      </TitleContainer>
    </HeaderContainer>
  );
}

