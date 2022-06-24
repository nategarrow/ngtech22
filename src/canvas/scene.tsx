import React, { Suspense, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { PointLight } from "three"
import D20 from "./objects/icosahedron"
import { Stars } from "@react-three/drei"
import { useSpring, animated, SpringValue } from "react-spring"
import { colors } from "../styles/variables"

const Scene = () => {
  const point = useRef<PointLight>(null!)
  const sphereGroup = useRef(null!)
  const { viewport } = useThree()

  useFrame(({ mouse, clock }) => {
    const et = clock.elapsedTime

    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2

    point.current.position.x = x
    point.current.position.y = y
  })

  return (
    <>
      <ambientLight intensity={0.1} color={colors.red} />
      <Suspense fallback={null}>
        <group ref={sphereGroup} scale={0.3} position={[0, 2, 0]}>
          <D20 position={[0, 0, 0]} scale={4} />
          <pointLight
            ref={point}
            color={colors.blue}
            intensity={40}
            position={[4, 2, -4]}
          />
        </group>
        <Stars count={7000} factor={10} radius={800} />
      </Suspense>
    </>
  )
}

export default Scene
