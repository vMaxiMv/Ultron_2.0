import React from 'react';
import {Bar} from "react-chartjs-2";
import bar from "./BarCharts.module.scss"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
)

function BarCharts({ chartData, options }:any) {
    return (
        <div>
            <Bar className={bar.bar_diagramm_bar} data={chartData} options={options}/>
        </div>
    );
}

export default BarCharts;