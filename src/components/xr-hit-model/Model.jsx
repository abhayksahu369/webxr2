import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useRef } from "react";

const Model = ({ position }) => {
    const gltf = useLoader(GLTFLoader, "factory.glb"); // Load 3D model
    const modelRef = useRef();
    const lastTouchX = useRef(null); // Store last touch position
    const [rotationY, setRotationY] = useState(0); // Track rotation

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y = rotationY; // Apply rotation
        }
    });

    // 🔥 Handle Touch/Mouse Drag to Rotate
    const handlePointerDown = (e) => {
        e.stopPropagation();
        lastTouchX.current = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handlePointerMove = (e) => {
        if (!lastTouchX.current) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = (currentX - lastTouchX.current) * 0.01; // Adjust sensitivity
        setRotationY((prev) => prev + deltaX);
        lastTouchX.current = currentX;
    };

    const handlePointerUp = () => {
        lastTouchX.current = null;
    };

    // 🖱️ Handle Click to Highlight a Part
    const handleClick = (e) => {
        e.stopPropagation();
        e.object.material = e.object.material.clone();
        e.object.material.color.set("red"); // Highlight the clicked part
    };

    return (
        <group 
            ref={modelRef} 
            position={position} 
            scale={0.3}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
        >
            {gltf.scene.children.map((child) => (
                <primitive 
                    key={child.name} 
                    object={child} 
                    onPointerDown={handleClick} // Click to highlight
                />
            ))}
        </group>
    );
};

export default Model;




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
