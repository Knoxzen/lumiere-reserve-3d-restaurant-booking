"use client";

import { Environment, SoftShadows } from "@react-three/drei";
import { FloorMap } from "./FloorMap";

export function RestaurantMap({status}: {status: Record<string, string>}) {

    return (
        <group>
            {/* <SoftShadows size={10} samples={10} focus={0.5} /> */}

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize={2048}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-5, 5, -5]} intensity={2} distance={20} color="#fcd34d" />
            <pointLight position={[5, 5, 5]} intensity={2} distance={20} color="#fcd34d" />

            <FloorMap url="/floor.glb" status={status}  />

            {/* Environment for premium reflections */}
            <Environment preset="city" />
        </group>
    );
}
