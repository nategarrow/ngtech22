import React, { useRef, useEffect, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { transition } from '../styles/variables';

gsap.registerPlugin(ScrollTrigger)

type Props = {
  title?: string
  children: ReactNode
  short?: boolean
  center?: boolean
}

const Section = ({ title, children, short = false, center = false }: Props) => {
  const ref = useRef(null)
  const page = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      duration: `${transition}ms`,
      scrollTrigger: {
        trigger: ref.current,
        start: short ? "top 95%" : "top 75%",
        once: true,
        toggleClass: "show",
      },
    })
  }, [])
  return (
    <section ref={ref} className="fade-children">
      {title && (
        <h2 ref={ref} className="fade fade-right" style={{ textAlign: center ? "center" : "inherit" }}>
          {title}
        </h2>
      )}
      <div className="delayed fade">
        {children}
      </div>
    </section>
  )
}

export default Section

