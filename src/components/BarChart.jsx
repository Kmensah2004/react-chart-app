import React from "react";
import ChartComponent from "./Chartcomponent";

const BarChart = ({ chartData }) => {
    const barChartData = {
      labels: chartData?.months,
      datasets: [
        {
          label: 'monthly Sales',
          data: chartData?.sales,
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const barChartOptions = {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'months',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales',
                },
            },
        },
    };

    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;