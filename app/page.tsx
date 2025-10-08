"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model3D } from "@/components/model-3d"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { WhatMakesUsDifferentSection } from "@/components/what-makes-us-different-section"
import { EditingArsenalSection } from "@/components/editing-arsenal-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Head from "next/head" // Import Head from next/head

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="RIpeAJrAyIDgpHXTWevo5AT45gMepH_n6p25fdvajXI"
        />
      </Head>

      <div className="relative min-h-screen bg-[#0d0d0d] text-white">
        {/* Fixed 3D Background */}
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[10, 10, 5]} intensity={0.9} />
              <pointLight position={[-10, -10, -5]} intensity={0.3} />
              <Model3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <WorkSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <WhatMakesUsDifferentSection />
            <EditingArsenalSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
