import { select, Selection } from 'd3'
import { combineDimensions, Dimensions } from './dimensions'
import { Layer } from './layer'

export type VisOptions = {
  color?: string | string[] // Fill color for bars. Should be a valid CSS color string
  xLabel?: string // Label for xAxis
  yLabel?: string // Label for yAxis
  fontSize?: string
  xDomain?: [any, any]
  yDomain?: [any, any]
  zDomain?: [any, any]
  noYAxisLine?: boolean
  noXAxisLine?: boolean
  noYAxisTick?: boolean
  noXAxisTick?: boolean
  showXAxisGrid?: boolean
  showYAxisGrid?: boolean
  yAxisGridColor?: string
  xAxisGridColor?: string
  xType?: Function
  yType?: Function
  zType?: Function
  xRange?: [any, any]
  yRange?: [any, any]
  xPadding?: number
  noYAxis?: boolean
  noXAxis?: boolean
  xAxisOffset?: number
  yAxisOffset?: number
  yTicks?: number
  xTicks?: number
} & Dimensions

export type ChartData = { values: { index: number; value: number }[] }

const debounce = (fn: Function, delay: number = 500): Function => {
  let timer: any
  return function (this: any, ...args: any) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      2
      fn.apply(this, args)
    }, delay)
  }
}

export class Renderer {
  wrapper!: Selection<HTMLElement, unknown, null, undefined>
  bound!: Selection<SVGGElement, unknown, null, undefined>
  dimensions!: Required<Dimensions>
  layers: Layer[] = []
  constructor(container: HTMLElement | string, public options: Dimensions, resize: boolean = true) {
    // Init the container element
    const render = debounce(() => {
      let targetElement
      if (typeof container == 'string') {
        targetElement = document.getElementById(container)
      } else targetElement = container as HTMLElement

      if (targetElement) {
        this.dimensions = combineDimensions({
          width: targetElement.clientWidth,
          height: targetElement.clientHeight,
          ...options,
        })
        const { width, height, marginLeft, marginTop, rendererHeight, rendererWidth } = this.dimensions
        // Select the container element
        this.wrapper = select(targetElement)
        this.clear()

        // Adding an SVG element
        const svg = this.wrapper.append('svg')

        // Creating our bounding box - Renderer
        this.bound = svg.append('g')

        svg.attr('viewbox', `0 0 ${rendererWidth} ${rendererHeight}`)

        this.bound
          .style('transform', `translate(${marginLeft}px, ${marginTop}px)`)
          .attr('width', rendererWidth)
          .attr('height', rendererHeight)
      } else throw new Error('Ensure the provided element exist!')
    })

    // Render our bounding box and rerender with the window resize
    render()
    if (resize)
      window.addEventListener('resize', () => {
        render()
      })
  }

  add(layer: Layer) {
    this.layers.push(layer)
  }

  render() {
    if (this.layers.length >= 0) {
      this.clear()
      for (const preparedLayer of this.layers) {
        preparedLayer.render(this.bound, this.dimensions)
      }
    }
  }

  clear() {
    if (this.wrapper) this.wrapper.selectAll('*').remove()
  }
}

const createRenderer = (
  container: HTMLElement | string,
  fn?: (renderer: Selection<SVGGElement, unknown, null, undefined>, dimensions: Required<Dimensions>) => void,
  opts?: VisOptions,
) => {
  const render = debounce(() => {
    let ct
    if (typeof container == 'string') {
      ct = document.getElementById(container)
    } else ct = container as HTMLElement

    if (ct && opts) {
      const dimensions = combineDimensions({
        width: ct.clientWidth,
        height: ct.clientHeight,
        ...opts,
      })

      const wrapper = select(ct)

      wrapper.selectAll('*').remove()

      const svg = wrapper
        .append('svg')
        .attr('viewbox', `0 0 ${dimensions.rendererWidth} ${dimensions.rendererHeight}`)
        .style('min-width', '100%')
        .style('min-height', '100%')

      // Creating our bounding box - Renderer
      const renderer = svg
        .append('g')
        .style('transform', `translate(${dimensions.marginLeft}px, ${dimensions.marginTop}px)`)
        .attr('width', dimensions.rendererWidth)
        .attr('height', dimensions.rendererHeight)

        fn?.(renderer, dimensions)
    }
  })

  render()
  window.addEventListener('resize', () => {
    render()
  })
}

export const useRenderer = (container: HTMLElement | string, options?: Dimensions) => {
  let root

  if (typeof container == 'string') {
    root = document.getElementById(container)
  } else root = container

  if (root) {
    const dimensions = combineDimensions({
      width: root.clientWidth,
      height: root.clientHeight,
      ...options,
    })

    const { width, height, rendererHeight, marginLeft, marginTop, rendererWidth } = dimensions
    const wrapper = select(root)

    clearRenderer(wrapper)

    const svg = wrapper
      .append('svg')
      .attr('viewbox', `0 0 ${width} ${height}`)
      .style('min-width', '100%')
      .style('min-height', '100%')

    const renderer = svg
      .append('g')
      .style('transform', `translate(${marginLeft}px, ${marginTop}px)`)
      .attr('width', rendererWidth)
      .attr('height', rendererHeight)

    return { wrapper, svg, renderer, dimensions }
  }
  return {}
}

function clearRenderer(wrapper: Selection<HTMLElement, unknown, null, undefined> | undefined) {
  if (wrapper) wrapper.selectAll('*').remove()
}

export default createRenderer
