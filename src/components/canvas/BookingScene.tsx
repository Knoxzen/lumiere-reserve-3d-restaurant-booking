"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RestaurantMap } from "./RestaurantMap";
import { Suspense } from "react";

import { Selection, EffectComposer, Outline } from "@react-three/postprocessing";

interface BookingSceneProps {
    status: Record<string, string>;
    onTableSelect: (tableId: string) => void;
}

export function BookingScene({status, onTableSelect}: BookingSceneProps) {
    return (
        <Canvas className="h-full w-full" shadows camera={{ position: [0, 12, 16], fov: 45 }}>
            <Suspense fallback={null}>
                <Selection>
                    <EffectComposer autoClear={false}>
                        <Outline blur visibleEdgeColor={0xffffff} edgeStrength={100} width={1000} />
                    </EffectComposer>
                    <RestaurantMap status={status} onTableSelect={onTableSelect}/>
                </Selection>
                <OrbitControls
                    makeDefault
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI / 2 - 0.1}
                    minDistance={8}
                    maxDistance={30}
                    enableDamping
                    dampingFactor={0.05}
                />
            </Suspense>
        </Canvas>
    );
}
