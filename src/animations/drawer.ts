import anime from 'animejs'

export interface DrawerAnimationOptions {
  /** Elemento do painel lateral. */
  drawer: HTMLElement

  /** Elemento do fundo escurecido. */
  backdrop: HTMLElement

  /** true abre o painel; false fecha. */
  open: boolean

  /** Duração da animação em milissegundos. */
  duration?: number

  /** Executado quando a animação termina. */
  onComplete?: () => void
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Controla a animação de abertura e fechamento do painel lateral.
 *
 * O estado do painel continua sendo responsabilidade do Vue.
 * Esta função cuida somente da animação visual.
 */
export function animateDrawer({
  drawer,
  backdrop,
  open,
  duration = 520,
  onComplete,
}: DrawerAnimationOptions): void {
  const prefersReducedMotion = window.matchMedia(
    REDUCED_MOTION_QUERY,
  ).matches

  // Interrompe animações anteriores.
  // Útil quando o usuário abre e fecha rapidamente.
  anime.remove([drawer, backdrop])

  drawer.setAttribute('aria-hidden', String(!open))
  backdrop.setAttribute('aria-hidden', String(!open))

  if (open) {
    drawer.style.visibility = 'visible'
    backdrop.style.visibility = 'visible'

    drawer.style.pointerEvents = 'auto'
    backdrop.style.pointerEvents = 'auto'
  }

  const finish = () => {
    if (!open) {
      drawer.style.visibility = 'hidden'
      backdrop.style.visibility = 'hidden'

      drawer.style.pointerEvents = 'none'
      backdrop.style.pointerEvents = 'none'
    }

    onComplete?.()
  }

  // Se o usuário prefere movimento reduzido,
  // altera os estados sem executar animações.
  if (prefersReducedMotion) {
    drawer.style.transform = open
      ? 'translateX(0)'
      : 'translateX(102%)'

    backdrop.style.opacity = open ? '1' : '0'

    finish()
    return
  }

  // Anima o fundo escurecido.
  anime({
    targets: backdrop,
    opacity: open ? [0, 1] : [1, 0],
    duration: open
      ? duration * 0.8
      : duration * 0.65,
    easing: 'easeOutQuad',
  })

  // Anima o painel lateral.
  anime({
    targets: drawer,
    translateX: open
      ? ['102%', '0%']
      : ['0%', '102%'],
    duration,
    easing: open
      ? 'easeOutCubic'
      : 'easeInCubic',

    complete: finish,
  })
}