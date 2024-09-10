import { AxisDomain, AxisScale, extent } from 'd3'
import { renderAxis } from '../core/axis'
import { scaleBand, scaleLinear } from '../core/scales'
import { useRenderer, VisOptions } from '../core/renderer'
import { renderBars, BarData, defaultOptions } from '../core/bar'

type BarChartOptions = VisOptions & {
  yAccessor: (d: BarData) => number
  xAccessor: (d: BarData) => string
  color: string
  horizontal: boolean
  gap: number
}

const BarChart = (container: HTMLElement, dataset: BarData[], options: BarChartOptions) => {
  const { renderer, dimensions } = useRenderer(container)
  if (renderer && dimensions) {
    const ops = { ...defaultOptions, ...options }
    const { horizontal, yAccessor, xAccessor, ...rest } = ops

    const xScale = !horizontal
      ? scaleBand(dataset.map(xAccessor), [0, dimensions.rendererWidth])
      : scaleLinear(extent(dataset, yAccessor) as [number, number], [0, dimensions.rendererWidth]).nice()

    const yScale = !horizontal
      ? scaleLinear(extent(dataset, yAccessor) as [number, number], [dimensions.rendererHeight, 0]).nice()
      : scaleBand(dataset.map(xAccessor), [0, dimensions.rendererHeight])

    const xAxis = renderAxis('x', renderer, dimensions, xScale as AxisScale<AxisDomain>, rest)
    const yAxis = renderAxis('y', renderer, dimensions, yScale as AxisScale<AxisDomain>, rest)
    renderBars(renderer, dimensions, dataset, xScale, yScale, ops)
  }
}
export default BarChart
