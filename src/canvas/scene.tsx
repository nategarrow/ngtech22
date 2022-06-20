import React, { Suspense, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { PointLight } from "three"
import IcoSphere from "./objects/icosphere"
import { Stars } from "@react-three/drei"
import { useSpring, animated, SpringValue } from "react-spring"
import MountainBg from "./mountains"

const Scene = () => {
  const point = useRef<PointLight>(null!)
  const sphereGroup = useRef(null!)
  let mobile: boolean = false

  useFrame((state) => {
    const et = state.clock.elapsedTime

    mobile = window.innerWidth <= 768 ? true : false
  })

  // const { position: SpringValue } = useSpring({
  //   to: {
  //     position: mobile ? [2, 3, -1] : [3, 3, -1],
  //   },
  //   from: {
  //     position: mobile ? [2, 3, -1] : [3, 3, -1],
  //   },
  // })

  return (
    <>
      <Suspense fallback={null}>
        <group ref={sphereGroup} scale={0.3} position={[2, 3, -1]}>
          <IcoSphere position={[0, 0, 0]} scale={1.3} />
          <pointLight
            ref={point}
            color="#768b97"
            intensity={50}
            position={[2, 0, -4]}
          />
        </group>
        <MountainBg />
        <Stars count={7000} factor={10} radius={800} />
      </Suspense>
    </>
  )
}

export default Scene
