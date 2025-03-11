import { OrbitControls } from "@react-three/drei";
import { useThree,useFrame } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Model from "./Model";

const XrHitModel = () => {
  const reticleRef = useRef();
  // const modelRef=useRef();
  const [models, setModels] = useState([]);
  
  // useFrame((state, delta) => {
  //   modelRef.current.rotation.y += delta;
  // });

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, 5]} intensity={1.5} />
      <pointLight position={[0, 2, 2]} intensity={1.5} />
      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model scale={0.05} key={id} position={position}  />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting &&  (
            <mesh >
            <Model scale={0.08} />;
          </mesh>
          )}
    </>
  );
};

export default XrHitModel;
