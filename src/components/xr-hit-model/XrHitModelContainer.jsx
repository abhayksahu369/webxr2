import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";




const XrHitModelContainer = () => {
  return (
    <>
      <ARButton/>
      <Canvas>
        <XR>
          <XrHitModel/>
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
