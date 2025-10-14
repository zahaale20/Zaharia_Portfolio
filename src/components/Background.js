import UnicornScene from "unicornstudio-react";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center; /* horizontal center */
  align-items: flex-end;   /* vertical bottom */
  overflow: hidden;
  transition: filter 1.5s ease-in-out;
  z-index: 0;
  /* Optional theme inversion */
  ${({ themeMode }) =>
    themeMode === "light" ? "filter: invert(1) brightness(1.2);" : ""}
`;

const Background = ({ theme, handleSceneLoad }) => {
  return (
    <BackgroundWrapper themeMode={theme}>
      <UnicornScene
        jsonFilePath="/unicorn/lightsScene.json"
        width="3440px"
        height="1400px"
        scale={1}
        dpi={1}
        lazyLoad={false}
        production={true}
        altText="Lights Scene"
        style={{ display: "block" }}
        onLoad={handleSceneLoad}
        onError={(err) => console.error("Error loading lights scene", err)}
      />
    </BackgroundWrapper>
  );
};

export default Background;
