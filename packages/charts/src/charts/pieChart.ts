import { renderArcs, ArcData, ArcOptions, defaultOptions } from '../core/arc'
import { useRenderer, VisOptions } from '../core/renderer'

type ArcChartOpts = VisOptions & ArcOptions

const PieChart = (container: HTMLElement, dataset: ArcData[], opts: ArcChartOpts) => {
  const { renderer, dimensions } = useRenderer(container)
  if (renderer && dimensions) {
    const { xDomain, yDomain, ...rest } = { ...defaultOptions, ...opts }
    renderArcs(renderer, dataset,opts)
  }
}
export default PieChart
