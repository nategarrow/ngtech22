import { useState, useEffect } from "react"

const useScrollPosition = (scrollFactor = 0): number => {
  const [position, setPosition] = useState(0)

  const onScroll = (): void => {
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return position * scrollFactor
}

export default useScrollPosition
