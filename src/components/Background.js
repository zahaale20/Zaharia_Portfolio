import UnicornScene from "unicornstudio-react";

const Background = ({ theme, handleSceneLoad }) => {
  return (
    <div
      className={`absolute inset-0 z-0 transition-filter duration-1500 ease-in-out ${theme === "light" ? "filter-invert-and-brighten" : ""}`}
      style={{
        height: `${window.innerHeight}px`
      }}
    >
      <UnicornScene
        jsonFilePath="/unicorn/lightsScene.json"
        width="3440px"  // keep fixed
        height="1400px" // keep fixed
        scale={1}
        dpi={1}
        lazyLoad={false}
        production={true}
        altText="Lights Scene"
        style={{ display: "block", margin: "0 auto" }} // center horizontally
        onLoad={handleSceneLoad}
        onError={(err) => console.error("Error loading lights scene", err)}
      />
    </div>
  );
};

export default Background;
