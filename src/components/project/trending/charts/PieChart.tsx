"use client";
import React from "react";
import { CommonColumnQueriesQuery } from "@/graphql/__generated__/graphql";
import { Pie } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';

function TrendingPieChart({pieData, pieLabels} : {pieData: number[], pieLabels: string[]}) {
  Chart.register(...registerables);

  const data = {
    labels: pieLabels,
    datasets: [
      {
        label: 'Sample Pie Chart',
        data: pieData,
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange',
        ],
        borderWidth: 0,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default TrendingPieChart;
