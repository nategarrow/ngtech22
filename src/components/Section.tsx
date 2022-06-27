import React, { useRef, useEffect, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  title?: string
  children: ReactNode
  short: boolean
}

const Section = ({ title, children, short = false }: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 0.3,
      scrollTrigger: {
        trigger: ref.current,
        start: short ? "top 90%" : "top 75%",
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
