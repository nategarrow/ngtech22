import React from "react"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import Scene from "./scene"
import { PerspectiveCamera } from "@react-three/drei"
import styled from "styled-components"

const CanvasBG = ({ home = false }) => {
  return (
    <CanvasContainer>
      <Canvas shadows={true} dpr={[1, 1.5]}>
        <Scene home={home} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <EffectComposer multisampling={2}>
          <Bloom
            kernelSize={2}
            luminanceThreshold={0.15}
            luminanceSmoothing={6}
            intensity={1}
          />
        </EffectComposer>
      </Canvas>
    </CanvasContainer>
  )
}

export default CanvasBG

const CanvasContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`
