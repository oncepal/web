import { AxisDomain, AxisScale, extent } from 'd3'
import { renderAxis } from '../core/axis'
import { renderHeatMap, HeatMapData, HeatMapOptions, defaultOptions } from '../core/heatMap'
import { scaleBand, scaleLinear } from '../core/scales'
import { useRenderer, VisOptions } from '../core/renderer'

type lineChartOpts = VisOptions & HeatMapOptions

const HeatMap = (container: HTMLElement, dataset: HeatMapData[], opts: lineChartOpts) => {
  const { renderer, dimensions } = useRenderer(container)
  if (renderer && dimensions) {
    const { rendererWidth, rendererHeight } = dimensions
    const { yAccessor, xAccessor, color, xDomain, yDomain, ...rest } = { ...defaultOptions, ...opts }

    const xScale = scaleBand(xDomain || extent(dataset, xAccessor), [0, rendererWidth])
    const yScale = scaleBand(yDomain || extent(dataset, yAccessor), [rendererHeight, 0])

    const xAxis = renderAxis('x', renderer, dimensions, xScale as AxisScale<AxisDomain>, rest)
    const yAxis = renderAxis('y', renderer, dimensions, yScale as AxisScale<AxisDomain>, rest)
    renderHeatMap(renderer, dataset, xScale, yScale, { color })
  }
}
export default HeatMap
