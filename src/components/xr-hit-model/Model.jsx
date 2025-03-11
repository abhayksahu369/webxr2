import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/factory.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[6.28, 12.123, -5.808]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder4_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-5.829, 6.954, 0.021]}
          scale={[1.19, 1.68, 1.19]}
        />
      </group>
      <group position={[0, 0, 2.869]}>
        <group position={[6.28, 12.123, -5.808]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pasted__pCylinder4_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-5.829, 6.954, 0.021]}
            scale={[1.19, 1.68, 1.19]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder2_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-1.702, 7.667, 0]}
          scale={[1, 4.116, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder4_lambert1_0_1.geometry}
          material={materials.lambert1}
          position={[-5.829, 5.311, 0.021]}
          scale={[1.19, 2.976, 1.19]}
        />
      </group>
      <group position={[0, 0, 5.659]}>
        <group position={[6.28, 12.123, -5.808]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pasted__pCylinder4_lambert1_0_1.geometry}
            material={materials.lambert1}
            position={[-5.829, 6.954, 0.021]}
            scale={[1.19, 1.68, 1.19]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder2_lambert1_0_1.geometry}
          material={materials.lambert1}
          position={[-1.702, 7.667, 0]}
          scale={[1, 4.116, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder4_lambert1_0_2.geometry}
          material={materials.lambert1}
          position={[-5.829, 5.311, 0.021]}
          scale={[1.19, 2.976, 1.19]}
        />
      </group>
      <group position={[-0.108, 9.302, 2.336]} scale={[1.211, 0.125, 1.211]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder5_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0.511, 10.627, -4.233]}
          scale={[0.786, 2.476, 0.786]}
        />
      </group>
      <group position={[-0.002, -7.75, -1.354]} scale={[1.004, 1.729, 1.004]}>
        <group position={[-0.108, 9.302, 2.336]} scale={[1.211, 0.125, 1.211]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pasted__pCylinder5_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0.511, 10.627, -3.106]}
            scale={[0.6, 5.212, 0.6]}
          />
        </group>
      </group>
      <group position={[0, -1.025, -2.167]}>
        <group position={[-0.108, 9.302, 2.336]} scale={[1.211, 0.125, 1.211]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__pasted__pCylinder5_lambert1_0_1.geometry}
            material={materials.lambert1}
            position={[0.511, 10.627, -4.233]}
            scale={[0.786, 2.476, 0.786]}
          />
        </group>
        <group position={[-0.002, -7.75, -1.354]} scale={[1.004, 1.729, 1.004]}>
          <group position={[-0.108, 9.302, 2.336]} scale={[1.211, 0.125, 1.211]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pasted__pasted__pasted__pCylinder5_lambert1_0.geometry}
              material={materials.lambert1}
              position={[0.511, 10.627, -3.106]}
              scale={[0.6, 5.212, 0.6]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder5_lambert1_0_1.geometry}
          material={materials.lambert1}
          position={[0.511, 10.627, -2.783]}
          scale={[0.597, 3.014, 0.597]}
        />
      </group>
      <group position={[2.034, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder9_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-0.543, 16.046, 1.963]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.713, 3.484, 0.713]}
        />
      </group>
      <group position={[0.249, -6.652, -4.948]} scale={[0.524, 1.623, 1.623]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder12_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0.523, 10.675, 7.939]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.512, 1.017, 0.512]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder2_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-1.702, 7.667, 0]}
        scale={[1, 4.116, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder3_lambert1_0.geometry}
        material={materials.lambert1}
        position={[2.696, 10.728, 2.921]}
        scale={[2.663, 3.632, 4.145]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder4_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-5.829, 5.311, 0.021]}
        scale={[1.19, 2.976, 1.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder5_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0.511, 10.627, -2.783]}
        scale={[0.597, 3.014, 0.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube2_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-0.543, 16.046, 1.963]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.713, 3.484, 0.713]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube3_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0.482, 4.538, 0.364]}
        scale={[6.801, 1.227, 15.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder12_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0.523, 10.675, 7.939]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.512, 1.017, 0.512]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group21_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0, 2.317, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube5_lambert1_0.geometry}
        material={materials.lambert1}
        position={[3.843, 4.022, -7.133]}
        scale={[2.155, 0.273, 2.155]}
      />
      <group position={[0, 1.644, 0.354]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pasted__pCylinder11_lambert1_0_1.geometry}
          material={materials.lambert1}
          position={[0.833, 3.524, -5.069]}
          rotation={[Math.PI / 2, -0.486, -Math.PI]}
          scale={0.229}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pasted__pasted__pCylinder11_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-0.441, 3.286, -5.069]}
          rotation={[Math.PI / 2, 0.197, Math.PI]}
          scale={0.229}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__pCylinder11_lambert1_0.geometry}
        material={materials.lambert1}
        position={[3.123, 3.515, -5.069]}
        rotation={[Math.PI / 2, 0.478, -Math.PI]}
        scale={0.229}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__pasted__pCylinder11_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-3.293, 5.006, -5.069]}
        rotation={[Math.PI / 2, -1.283, -Math.PI]}
        scale={0.229}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_lambert1_0.geometry}
        material={materials.lambert1}
        position={[1.247, 2.723, -2.916]}
        scale={0.527}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group24_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-6.725, 0.146, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group26_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0, 0.146, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__group21_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0, -2.229, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__group21_lambert1_0_1.geometry}
        material={materials.lambert1}
        position={[0, 0.016, 0]}
      />
    </group>
  )
}

useGLTF.preload('/factory.glb')





// import { useLoader } from "@react-three/fiber";
// import { Suspense } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = ({ position }) => {
//   const gltf = useLoader(GLTFLoader, "/models/druid.gltf");
//   return (
//     <Suspense fallback={null}>
//       <primitive position={position} object={gltf.scene} />
//     </Suspense>
//   );
// };

// export default Model;
