import React from 'react';
import {} from "@/hooks/queryHooks";
import { TUserDataObj } from '@/types/MyTypes';
import BarCharts from '@/components/ChartLogic/BarCharts/BarCharts';
import { useUserData } from '@/store/store';
import { useChartData } from '@/hooks/customHooks';
import { externalTooltipHandler } from '@/components/ChartLogic/BarFunctions/tooltipFunction';


function CommonCharts() {
    const whiteColor:string = '#fff'
   // const {mutateAsync, isLoading, isError, data,isSuccess } = useGetActvityData()
    const UserData = useUserData(state => state.UserData)

    const chartData = useChartData(UserData, 'YourName')
    const handleTooltip = (context:any) => {
        externalTooltipHandler(context);
        console.log(context)
    }
    const options = {
        //onClick: (event, elements)=>handleChartClick(elements),
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: [{
                type: 'category', // Используем 'linear' вместо 'category'
                labels: UserData.date,
                grid:{
                    color: whiteColor
                },
                ticks:{
                    color: whiteColor,
                    font:{
                        size:16
                    }
                }
            }],
            y: [{
                beginAtZero: true, // Начало оси Y с 0
                grid:{
                    color: whiteColor
                },
                ticks:{
                    color: whiteColor,
                    font:{
                        size:16
                    }
                }
            }]
        },
        plugins: {
            legend: {
                labels: {
                    render: 'value',
                    color: whiteColor  // Изменение цвета шрифта на черный
                }
            },
            tooltip: {

                enabled: false,
                external: handleTooltip,
            },
        },
    }
    return (
        <div>
            <BarCharts chartData={chartData} options={options}/>
        </div>
    );
}

export default CommonCharts;