import * as d3 from 'd3'
import { Dimensions } from './dimensions'
import vars from '../theme/tokens'

type AxisOptions = Partial<{
  noLine: boolean
  showGrid: boolean
  gridColor: string
  label: string
  noTick: boolean
  color: string
  fontSize: string
}>

abstract class Axis {
  noLine = true
  showGrid = false
  gridColor = vars.color.greyLight
  color = vars.color.greyLight
  label = ''
  noTick = true
  fontSize = '1rem'
  constructor(
    public renderer: d3.Selection<SVGGElement, unknown, null, undefined>,
    public dimensions: Required<Dimensions>,
    public scale: d3.AxisScale<d3.AxisDomain>,
    options: AxisOptions,
  ) {
    for (const key of Object.keys(options)) {
      this[key] = options[key]
    }
    Object.keys(options)
  }

  abstract render: () => any
}

class XAxis extends Axis {
  render = () => {
    const { rendererHeight, rendererWidth, marginBottom } = this.dimensions
    const { noTick, noLine, showGrid, gridColor, label, fontSize, color, scale, renderer } = this
    // create axisGenerator
    const xAxisGenerator = d3.axisBottom(scale)

    // render axis & translate to correct position
    const xAxis = renderer
      .append('g')
      .call(xAxisGenerator)
      .style('color', color)
      .style('transform', `translateY(${rendererHeight}px)`)

    // if render
    if (noTick) xAxis.call((g) => g.selectAll('.tick line').remove())
    if (noLine) xAxis.call((g) => g.select('.domain').remove())
    if (showGrid) {
      const xGrid = renderer
        .append('g')
        .call(d3.axisBottom(scale).tickSize(rendererHeight))
        .call((g) => g.select('.domain').remove())
        .call((g) => g.selectAll('.tick text').remove())
        .call((g) => g.selectAll('.tick:not(:first-of-type) line').attr('stroke', gridColor))
    }
    if (label) {
      const xAxisLabel = xAxis
        .append('text')
        .attr('x', rendererWidth / 2)
        .attr('y', (marginBottom / 3) * 2)
        .attr('fill', 'black')
        .style('font-size', fontSize)
        .html(label)
    }
  }
}

class YAxis extends Axis {
  render = () => {
    const { rendererHeight, rendererWidth, marginLeft } = this.dimensions
    const { noTick, noLine, showGrid, gridColor, label, fontSize, color, scale, renderer } = this

    const yAxisGenerator = d3.axisLeft(scale)

    const yAxis = renderer.append('g').call(yAxisGenerator).style('color', color)
    if (noTick) yAxis.call((g) => g.selectAll('.tick line').remove())
    if (noLine) yAxis.call((g) => g.select('.domain').remove())
    if (showGrid) {
      const yGrid = renderer
        .append('g')
        .call(d3.axisRight(scale).tickSize(rendererWidth))
        .call((g) => g.select('.domain').remove())
        .call((g) => g.selectAll('.tick text').remove())
        .call((g) => g.selectAll('.tick:not(:first-of-type) line').attr('stroke', gridColor))
    }
    if (label) {
      const yAxisLabel = yAxis
        .append('text')
        .attr('x', -rendererHeight / 2)
        .attr('y', (-marginLeft / 3) * 2)
        .attr('fill', 'black')
        .style('font-size', fontSize)
        .text(label)
        .style('transform', 'rotate(-90deg)')
        .style('text-anchor', 'middle')
    }
  }
}
export function renderAxis(
  type: 'x' | 'y',
  renderer: d3.Selection<SVGGElement, unknown, null, undefined>,
  dimensions: Required<Dimensions>,
  scale: d3.AxisScale<d3.AxisDomain>,
  options: AxisOptions = {},
) {
  let a: Axis
  if (type == 'x') {
    a = new XAxis(renderer, dimensions, scale, options)
  } else {
    a = new YAxis(renderer, dimensions, scale, options)
  }
  a.render()
  return a
}
