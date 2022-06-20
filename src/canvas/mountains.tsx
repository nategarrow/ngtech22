import React from "react"
import styled from "styled-components"

const MountainBg = () => {
  return (
    <>
      {/* <pointLight intensity={10} /> */}
      <group>
        <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2.1, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[25, 4]} />
          <meshBasicMaterial attach="material" color={"red"} />
        </mesh>
      </group>
    </>
  )
}

export default MountainBg
