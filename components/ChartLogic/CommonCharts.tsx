import React from 'react';
import {} from "@/hooks/queryHooks";

function CommonCharts() {
   // const {mutateAsync, isLoading, isError, data,isSuccess } = useGetActvityData()
    const options = {
        //onClick: (event, elements)=>handleChartClick(elements),
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid:{
                    color: 'white'
                },
                ticks:{
                    color: 'white',
                    font:{
                        size:16
                    }
                }
            },
            y: {
                beginAtZero: true, // Начало оси Y с 0
                grid:{
                    color: 'white'
                },
                ticks:{
                    color: 'white',
                    font:{
                        size:16
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    render: 'value',
                    color: 'white' // Изменение цвета шрифта на черный
                }
            },
            tooltip: {

                enabled: false,
                external: 'white',
            },
        },
    }
    return (
        <div></div>
    );
}

export default CommonCharts;