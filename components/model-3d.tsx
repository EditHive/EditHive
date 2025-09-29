"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import type * as THREE from "three"

export function Model3D() {
  const meshRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/geometric-metallic.glb")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Rotate the model continuously
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 // Slow rotation left to right
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 // Subtle vertical movement
    }
  })

  const scale = isMobile ? [1.2, 1.2, 1.2] : [2, 2, 2]

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}

// Preload the model
useGLTF.preload("/models/geometric-metallic.glb")
