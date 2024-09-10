import { extent } from 'd3'
import { renderAxis } from '../core/axis'
import { renderCircles, CircleData, CircleOptions, defaultOptions } from '../core/circle'
import { scaleLinear } from '../core/scales'
import { useRenderer, VisOptions } from '../core/renderer'

type ScatterChartOpts = VisOptions & CircleOptions

const ScatterChart = (container: HTMLElement, dataset: CircleData[], opts: ScatterChartOpts) => {
  const { renderer, dimensions } = useRenderer(container)
  if (renderer && dimensions) {
    const { rendererWidth, rendererHeight } = dimensions
    const { yAccessor, xAccessor, color, xDomain, yDomain, ...rest } = { ...defaultOptions, ...opts }

    const xScale = scaleLinear(xDomain || extent(dataset, xAccessor), [0, rendererWidth]).nice()
    const yScale = scaleLinear(yDomain || extent(dataset, yAccessor), [rendererHeight, 0]).nice()

    const xAxis = renderAxis('x', renderer, dimensions, xScale as d3.AxisScale<d3.AxisDomain>, rest)
    const yAxis = renderAxis('y', renderer, dimensions, yScale as d3.AxisScale<d3.AxisDomain>, rest)
    renderCircles(renderer, dataset, xScale, yScale, { color })
  }
}
export default ScatterChart
