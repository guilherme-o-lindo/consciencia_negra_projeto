import anime from 'animejs'

export interface RevealOptions {
  /** Elemento dentro do qual procurar elementos .reveal. */
  root?: ParentNode

  /** Distância vertical inicial da animação, em pixels. */
  distance?: number

  /** Duração da animação, em milissegundos. */
  duration?: number

  /** Limiar de visibilidade necessário para iniciar a animação. */
  threshold?: number

  /** Observa elementos adicionados posteriormente ao root. */
  observeMutations?: boolean
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Anima elementos com a classe .reveal quando entram na área visível.
 *
 * Retorna uma função de limpeza para desconectar os observers.
 */
export function observeReveals(
  options: RevealOptions = {},
): () => void {
  const {
    root = document,
    distance = 22,
    duration = 760,
    threshold = 0.12,
    observeMutations = false,
  } = options

  const motionPreference = window.matchMedia(
    REDUCED_MOTION_QUERY,
  )

  const findElements = (scope: ParentNode): HTMLElement[] =>
    Array.from(
      scope.querySelectorAll<HTMLElement>(
        '.reveal:not([data-reveal-observed])',
      ),
    )

  const revealImmediately = (elements: HTMLElement[]) => {
    elements.forEach((element) => {
      element.dataset.revealObserved = 'true'
      element.classList.add('visible')
      element.style.opacity = '1'
      element.style.transform = 'none'
    })
  }

  // Respeita a preferência do usuário por movimento reduzido.
  if (
    motionPreference.matches ||
    !('IntersectionObserver' in window)
  ) {
    revealImmediately(findElements(root))
    return () => undefined
  }

  const intersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const element = entry.target as HTMLElement

        // Não precisa observar novamente depois que apareceu.
        observer.unobserve(element)

        element.classList.add('visible')

        // Cancela qualquer animação anterior do mesmo elemento.
        anime.remove(element)

        anime({
          targets: element,
          opacity: [0, 1],
          translateY: [distance, 0],
          duration,
          easing: 'easeOutCubic',

          complete: () => {
            element.style.opacity = '1'
            element.style.transform = 'none'
          },
        })
      })
    },
    {
      threshold,
    },
  )

  const observeWithin = (scope: ParentNode) => {
    findElements(scope).forEach((element) => {
      element.dataset.revealObserved = 'true'
      intersectionObserver.observe(element)
    })
  }

  // Observa os elementos que já existem na página.
  observeWithin(root)

  // Opcional: observa elementos adicionados posteriormente.
  const mutationObserver =
    observeMutations && root instanceof Element
      ? new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (!(node instanceof Element)) return

              if (
                node.matches(
                  '.reveal:not([data-reveal-observed])',
                )
              ) {
                observeWithin(node.parentElement ?? root)
              } else {
                observeWithin(node)
              }
            })
          })
        })
      : null

  mutationObserver?.observe(root as Element, {
    childList: true,
    subtree: true,
  })

  // Função para encerrar os observers.
  return () => {
    intersectionObserver.disconnect()
    mutationObserver?.disconnect()
  }
}