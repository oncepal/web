import { AxisDomain, AxisScale, extent } from 'd3'
import { renderAxis } from '../core/axis'
import { renderLines, LineData, LineOptions, defaultOptions } from '../core/line'
import { scaleLinear } from '../core/scales'
import { useRenderer, VisOptions } from '../core/renderer'

type lineChartOpts = VisOptions & LineOptions

const LineChart = (container: HTMLElement, dataset: LineData[], opts: lineChartOpts) => {
  const { renderer, dimensions } = useRenderer(container)
  if (renderer && dimensions) {
    const { rendererWidth, rendererHeight } = dimensions
    const { yAccessor, xAccessor, color, xDomain, yDomain, curve, ...rest } = { ...defaultOptions, ...opts }

    const xScale = scaleLinear(xDomain || extent(dataset, xAccessor), [0, rendererWidth]).nice()
    const yScale = scaleLinear(yDomain || extent(dataset, yAccessor), [rendererHeight, 0]).nice()

    const xAxis = renderAxis('x', renderer, dimensions, xScale as AxisScale<AxisDomain>, rest)
    const yAxis = renderAxis('y', renderer, dimensions, yScale as AxisScale<AxisDomain>, rest)
    renderLines(renderer, dataset, xScale, yScale, { color, curve })
  }
}
export default LineChart
