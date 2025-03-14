import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

const XrHitModel = () => {

  // const modelRef=useRef();
 
  
  // useFrame((state, delta) => {
  //   modelRef.current.rotation.y += delta;
  // });


  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, 5]} intensity={1.5} />
      <pointLight position={[0, 2, 2]} intensity={1.5} />
      <Model position={[0,0,-2]}/>
     
    </>
  );
};

export default XrHitModel;
