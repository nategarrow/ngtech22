import React from "react"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import Scene from "./scene"
import {
  PerspectiveCamera,
  Stars,
  MeshReflectorMaterial,
} from "@react-three/drei"
import styled from "styled-components"

const CanvasBG = () => {
  return (
    <CanvasContainer>
      <Canvas shadows dpr={[1, 1.5]}>
        <Scene />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <EffectComposer multisampling={2}>
          <Bloom
            kernelSize={4}
            luminanceThreshold={0.1}
            luminanceSmoothing={1}
            intensity={1}
          />
        </EffectComposer>
      </Canvas>
    </CanvasContainer>
  )
}

export default CanvasBG

const CanvasContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  margin: 0;
`
