import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales for 2020 (M)',
            data: [3, 2, 2, 1, 5],
            fill: true,
            backgroundColor: ['rgb(255, 99, 132)'],
            borderColor: ['rgba(255, 99, 132, 0.2)'],
            pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
            pointBorderColor: 'rgba(255, 99, 132, 0.2)'
          },
          { 
            label: 'Sales for 2019 (M)',
            data: [5,1,3,4,2],
            fill: true,
            backgroundColor: ['rgb(54, 162, 235, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
            pointBorderColor: 'rgba(54, 162, 235, 0.2)'
          }       
        ]
      }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return <Line data={data} options={options} />
}

export default LineChart
