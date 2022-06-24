import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as three from "three"

export default function D20({ ...props }) {
  const { nodes, materials } = useGLTF("/icosahedron.gltf")
  const sphere = useRef<three.Mesh>(null!)

  useFrame(() => {
    // rotate the sphere
    sphere.current!.rotation.y = sphere.current!.rotation.y + 1 / 1260
    sphere.current!.rotation.x = sphere.current!.rotation.x + 1 / 1480
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={sphere}
        name="Icosphere"
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.001"]}
      />
    </group>
  )
}

useGLTF.preload("/icosahedron.gltf")
