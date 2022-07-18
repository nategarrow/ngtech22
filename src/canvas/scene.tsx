import React, { Suspense, useRef } from "react"
import { PointLight } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { a } from '@react-spring/three'
import { useSpring } from "react-spring"

import D20 from "./objects/icosahedron"
import { colors } from "../styles/variables"

const Scene = ({ home = false }) => {
  const point = useRef<PointLight>(null!)
  const sphereGroup = useRef(null!)
  const { viewport } = useThree()

  useFrame(({ mouse, clock }) => {
    const et = clock.elapsedTime

    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2

    if (point.current && point.current !== null) {
      point.current.position.x = x
      point.current.position.y = y
    }
  })

  const anim = useSpring({
    position: home ? [0, 0, 0] : [0, 6, 0],
    scale: home ? 1 : 1.5
  })

  return (
    <>
      <ambientLight intensity={0.1} color={colors.red} />
      <Suspense fallback={null}>
        <a.group ref={sphereGroup} scale={anim.scale} position={anim.position}>
          <D20 position={[0, 0, 0]} scale={2} home={home} />
          <pointLight
            ref={point}
            color={colors.blue}
            intensity={40}
            position={[4, 2, -4]}
          />
        </a.group>
        <Stars count={6000} factor={10} radius={800} />
      </Suspense>
    </>
  )
}

export default Scene
