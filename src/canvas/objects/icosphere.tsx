import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as three from "three";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/ico-sphere.gltf")
  const sphere = useRef<three.Mesh>(null!)

  useFrame(() => {
    // rotate the sphere
    sphere.current!.rotation.y = sphere.current!.rotation.y + 1 / 2160
    sphere.current!.rotation.x = sphere.current!.rotation.x + 1 / 1480
  })
  
  return (
    <group dispose={null}>
      <mesh
        {...props}
        ref={sphere}
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.002"]}
      />
    </group>
  )
}

export default Model

useGLTF.preload("/ico-sphere.gltf")
