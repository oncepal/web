import { useEffect, useRef, useState } from "react";
import { vis } from "@oncepal/charts";
import {
  barDataset,
  areaDataset,
  scatterDataset,
  lineDataset,
  pieDataset,
  stackBarDataset,
  heatMapDataset,
} from "../constants";
import { Grid } from "@oncepal/ui";
export default function App() {
  useEffect(() => {
    vis.renderStackedBarChart("root1", stackBarDataset, {
      colors: ["#DE834D", "#A3423C", "#5356FB","#128341"],

      //   noXAxisLine: true,
      //   noYAxisLine: true,
      //   noXAxisTick: true,
      //   noYAxisTick: true,
      xAccessor: (d) => d.group,
    });

    
    vis.renderLineChart(document.getElementById("root2")!, lineDataset, {
      color: "#5356FB",
    });
vis.renderHeatMap(document.getElementById("root3")!, heatMapDataset, {
      color: ["#5356FB", "#110C2F"],
      paddingInnerX: 0.1,
      paddingInnerY: 0.1,
    });
    // vis.renderPieChart(document.getElementById("root3")!, pieDataset, {
    //   colors: ["#DE834D", "#A3423C", "#5356FB","#128341"],
    // });
   
    vis.renderAreaChart(
      document.getElementById("root4"),

      areaDataset,
      { fillColor: "#A3423C", strokeColor: "#A3423C" }
    );
    vis.renderBarChart(document.getElementById("root5"), barDataset, {
      horizontal: false,
      color: "#A3423C",
    }); vis.renderScatterPlot(document.getElementById("root6")!, scatterDataset, {
      color: "#A3423C",
    });
  }, []);

  return (
    <Grid col={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
        <Grid.Item id={"root" + v} span={((v==6||v==3)?2:1)+''}></Grid.Item>
      ))}
    </Grid>
  );
}
