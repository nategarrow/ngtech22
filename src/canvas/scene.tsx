import React, { Suspense, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { PointLight } from "three"
import IcoSphere from "./objects/icosphere"
import { Stars } from "@react-three/drei"
import { useSpring, animated, SpringValue } from "react-spring"

const Scene = () => {
  const point = useRef<PointLight>(null!)
  const sphereGroup = useRef(null!)
  let mobile: boolean = false

  useFrame((state) => {
    const et = state.clock.elapsedTime

    mobile = window.innerWidth <= 768 ? true : false
  })

  return (
    <>
      <Suspense fallback={null}>
        <group ref={sphereGroup} scale={0.3} position={[0, 2, 0]}>
          <IcoSphere position={[0, 0, 0]} scale={2.5} />
          <pointLight
            ref={point}
            color="#768b97"
            intensity={70}
            position={[4, 2, -2]}
          />
        </group>
        <Stars count={7000} factor={10} radius={800} />
      </Suspense>
    </>
  )
}

export default Scene
