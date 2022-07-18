import React, { useRef, useEffect, PropsWithChildren } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { transition } from '../styles/variables';

gsap.registerPlugin(ScrollTrigger)

type Props = {
  title?: string
  html?: string
  short?: boolean
  center?: boolean
}

const Section: React.FC<PropsWithChildren<Props>> = ({ title, children, html = '', short = false, center = false }) => {
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
      {html && <div className="delayed fade" dangerouslySetInnerHTML={{ __html: html }} />}

      {!html && children}
    </section>
  )
}

export default Section

