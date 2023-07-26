"use client";
import React from "react";
import { CommonColumnQueriesQuery } from "@/graphql/__generated__/graphql";
import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';

function TrendingLineChart() {
  Chart.register(...registerables);

  const data = {
    "labels": ["label1", "label2", "label3", "label4"],
    "datasets": [{
      "label": "Sample dataset",
      "data": [45, 23, 56, 55],
      "pointBackgroundColor": ["red", "brown", "green", "yellow"],
      "borderColor": "brown",
      "fill": false
    }],
  }
  return (
    <div>
      <Line data={data}/>
    </div>
  );
}

export default TrendingLineChart;
