"use client";

import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three"

interface FloorMapProps {
    /**
     * URL to the GLB/GLTF model.
     * Ensure the model is placed in the public folder, e.g., public/models/floor.glb
     */
    url?: string;
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number | [number, number, number];
    status?: Record<string, string>;
    onTableSelect: (tableId: string) => void;
}

export function FloorMap({
    url = "/floor.glb",
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,
    status = {},
    onTableSelect,
}: FloorMapProps) {

    const { scene } = useGLTF(url);
    const [hovered, setHovered] = useState<string | null>(null);
    const { nodes, materials } = useGLTF(url);
    const [tabelStatus, setTabelStatus] = useState(status);

    const tables = [
        "table010",
        "table020",
        "table030",
        "table040",
        "table050",
        "table060",
    ]

    const getMaterialProps = (id: string) => {
        const isHovered = hovered === id
        const isBooked = tabelStatus[id] === "booked"

        if (isBooked) {
            return {
                color: "#777777",
                emissive: "#000000",
                transparent: true,
                opacity: 0.9,
            }
        }

        if (isHovered) {
            return {
                color: "hotpink",
                emissive: "hotpink",
                emissiveIntensity: 0.5,
            }
        }

        return {}
    }

    return (
        <>

            {tables.map((id) => (
                <mesh
                    key={id}
                    geometry={(nodes[id] as THREE.Mesh).geometry}
                    material={materials[id]}
                    castShadow
                    onPointerOver={(e) => {
                        if (status[id] === "booked") return
                        setHovered(id)
                        document.body.style.cursor = "pointer"
                    }}
                    onPointerOut={() => {
                        setHovered(null)
                        document.body.style.cursor = "default"
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        onTableSelect(id)
                    }}
                >
                    <meshStandardMaterial {...getMaterialProps(id)} />
                </mesh>
            ))}

            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}> <planeGeometry args={[10, 10]} /> <meshStandardMaterial color="gray" /> </mesh>
        </>
    )
}

useGLTF.preload("/floor.glb");
