import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as three from "three"

const IcoSphere = (props) => {
  const { nodes, materials } = useGLTF("/ico-sphere.gltf")
  const sphere = useRef<three.Mesh>(null!)

  useFrame(() => {
    // rotate the sphere
    sphere.current!.rotation.y = sphere.current!.rotation.y + 1 / 1260
    sphere.current!.rotation.x = sphere.current!.rotation.x + 1 / 1480
  })

  return (
    <group dispose={null}>
      {/* <mesh
        {...props}
        ref={sphere}
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.002"]}
      /> */}
      <mesh ref={sphere} {...props}>
        <icosahedronBufferGeometry attach="geometry" args={[1, 0]} />
        <meshPhongMaterial attach="material" color="red" wireframe />
      </mesh>
    </group>
  )
}

export default IcoSphere

useGLTF.preload("/ico-sphere.gltf")
