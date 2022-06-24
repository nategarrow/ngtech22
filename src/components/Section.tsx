import React, { useRef, useEffect, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  title?: string
  children: ReactNode
}

const Section = ({ title, children }: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 0.3,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        once: true,
        toggleClass: "show",
      },
    })
  }, [])
  return (
    <section>
      {title && (
        <h2 ref={ref} className="fade-in">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default Section
