import React from 'react';
import styled from '@mui/system/styled';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// TODO 
// Figure out how to get the size of the icon to increase
// Figured out everything but the size
const CustomPlayButton = styled("div")({
  position: "absolute",
  top: "45%", 
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  paddingBottom: "50px"
});

// Discovered StyledComponent stylings can also be  
// written in a more classic CSS style syntax:
// const CustomPlayButton = styled.button`
//   background: transparent;
//   position: absolute;
//   top: 45%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   font-size: 100px;
//   border: none;
//   padding-bottom: 100px;
// `

export function PlayButton() {
  return (
    <CustomPlayButton >
      <PlayArrowIcon />
    </CustomPlayButton>
  );
}