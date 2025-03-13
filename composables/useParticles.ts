import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export const useParticles = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')
  const particles = ref<Particle[]>([])
  const animationFrameId = ref<number>()

  const createParticle = (x: number, y: number): Particle => ({
    x,
    y,
    size: Math.random() * 2 + 1,
    speedX: Math.random() * 0.5 - 0.25,
    speedY: Math.random() * 0.5 - 0.25,
    opacity: Math.random() * 0.5 + 0.2
  })

  const initParticles = () => {
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
    for (let i = 0; i < particleCount; i++) {
      particles.value.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ))
    }
  }

  const updateParticle = (particle: Particle) => {
    particle.x += particle.speedX
    particle.y += particle.speedY

    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
  }

  const drawParticle = (particle: Particle) => {
    if (!ctx) return
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
    ctx.fill()
  }

  const animate = () => {
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.value.forEach(particle => {
      updateParticle(particle)
      drawParticle(particle)
    })

    animationFrameId.value = requestAnimationFrame(animate)
  }

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    particles.value = []
    initParticles()
  }

  onMounted(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
    if (animationFrameId.value) {
      cancelAnimationFrame(animationFrameId.value)
    }
  })

  return {
    particles,
    resizeCanvas
  }
} 