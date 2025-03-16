import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals'

export function reportWebVitals() {
  onCLS(console.log)
  onFCP(console.log)
  onTTFB(console.log)
  onLCP(console.log)
}
