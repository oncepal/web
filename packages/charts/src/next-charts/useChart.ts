import { scaleLinear, extent, AxisScale, AxisDomain } from "d3"
import { renderAxis } from "../core/axis"
import { renderLines } from "../core/line"
import { useRenderer } from "../core/renderer"

type Options = {
    x?:{}
    y?:{}
    grid?:{}
    label?:{}
    facet?:{
        fx?:any,
        fy?:any
    }
    tooltip?:{}
    annotation?:{}
    series?:[]
    
}

const defaultOptions = {
    x:{},
    y:{},
    grid:{},
    label:{},
    facet:{},
    tooltip:{},
    annotation:{},
    series:[]
}

// const useChart = (options:Options) => {
//     const render = (
//         container: HTMLElement | string,
//     )=>{

//         const { renderer, dimensions } = useRenderer(container)
//         if (renderer && dimensions) {
//             const { rendererWidth, rendererHeight } = dimensions
//             const { series,yAccessor, xAccessor, color, xDomain, yDomain, curve, ...rest } = { ...defaultOptions, ...options }
        
//             const xScale = scaleLinear(xDomain || extent(dataset, xAccessor), [0, rendererWidth]).nice()
//             const yScale = scaleLinear(yDomain || extent(dataset, yAccessor), [rendererHeight, 0]).nice()
        
//             const xAxis = renderAxis('x', renderer, dimensions, xScale as AxisScale<AxisDomain>, rest)
//             const yAxis = renderAxis('y', renderer, dimensions, yScale as AxisScale<AxisDomain>, rest)
//             const lines = renderLines(renderer, dataset, xScale, yScale, { color, curve })
//             return [xAxis,yAxis,lines]
//         }
//         return []
//     }
//     return {render}
// };



// const chart = useChart({
// })


// chart.render('container')