import * as d3 from 'd3'
import { renderAxis } from '../core/axis'
import { renderAreas, AreaData, AreaOptions, defaultOptions } from '../core/area'
import { scaleLinear } from '../core/scales'
import { useRenderer, VisOptions } from '../core/renderer'

type AreaChartOpts = VisOptions & AreaOptions

const AreaChart = (container: HTMLElement, dataset: AreaData[], options: AreaChartOpts) => {
  const { renderer, dimensions } = useRenderer(container)
  if (renderer && dimensions) {
    const { rendererWidth, rendererHeight } = dimensions
    const { y1Accessor, xAccessor, color, xDomain, yDomain, curve, ...rest } = { ...defaultOptions, ...options }

    const xScale = scaleLinear(xDomain || d3.extent(dataset, xAccessor), [0, rendererWidth]).nice()
    const yScale = scaleLinear(yDomain || [0, d3.max(dataset, y1Accessor)], [rendererHeight, 0]).nice()

    const xAxis = renderAxis('x', renderer, dimensions, xScale as d3.AxisScale<d3.AxisDomain>, rest)
    const yAxis = renderAxis('y', renderer, dimensions, yScale as d3.AxisScale<d3.AxisDomain>, rest)
    renderAreas(renderer!, dataset, xScale, yScale, rest)
  }
}
export default AreaChart
