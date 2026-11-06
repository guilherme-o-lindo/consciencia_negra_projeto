import * as THREE from 'three'
import type { MuseumInstance } from './types'

export function createMuseum(canvas: HTMLCanvasElement): MuseumInstance {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x101820)

  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000)
  camera.position.set(0, 1.7, 5)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const light = new THREE.HemisphereLight(0xffffff, 0x303040, 2)
  scene.add(light)

  // Objeto provisório para confirmar que o Three.js está funcionando.
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshStandardMaterial({ color: 0x4b83a6 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  let animationFrame = 0
  let running = false

  function resize() {
    const width = canvas.clientWidth || window.innerWidth
    const height = canvas.clientHeight || window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  function animate() {
    if (!running) return
    cube.rotation.y += 0.005
    renderer.render(scene, camera)
    animationFrame = requestAnimationFrame(animate)
  }

  window.addEventListener('resize', resize)

  return {
    start() {
      if (running) return
      running = true
      resize()
      animate()
    },
    dispose() {
      running = false
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    },
  }
}
