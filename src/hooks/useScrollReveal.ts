import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('visible'))
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    return () => {
      revealObserver.disconnect()
    }
  }, [])
}
