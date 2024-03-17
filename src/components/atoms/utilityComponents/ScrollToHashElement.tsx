import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/*
* Modified version of
* https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
*/

export function ScrollToHashElement() {
  const location = useLocation()
  const lastHash = useRef('')

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1)
    } else {
      window.scrollTo(0, 0)
    }
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        lastHash.current = ''
      }, 50)
    }
  }, [location])

  return null
}