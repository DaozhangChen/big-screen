import { useEffect, useRef } from "react";
import * as echart from 'echarts'
import { remWidth } from "../helpers/remWidth";
import { randomNumber } from "../helpers/randomNumber";

const LeftRightPieChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
            color: ['#fe7f4d', '#6fa3fe'],
            tooltip: {
                trigger: 'item',
                valueFormatter: (value) => Math.floor(value) + '万人'
            },
            legend: {
                bottom: '5%',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: remWidth(18)
                },
                itemWidth: remWidth(20),
                itemHeight: remWidth(20)
            },
            series: [
                {
                    name: '城乡人口比例',
                    type: 'pie',
                    radius: ['45%', '60%'],
                    avoidLabelOverlap: false,
                    top: '-35%',
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: remWidth(20),
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: randomNumber(2700, 2856), name: '城镇人口' },
                        { value: randomNumber(1000, 1298), name: '农村人口' },
                    ],
                }
            ]
        };
    }

    useEffect(() => {
        if (refDiv.current) {
            var myChart = echart.init(refDiv.current)
            myChart.setOption(option())
            setInterval(() => {
                myChart.setOption(option())
            }, 1000)
        }
    }, [])
    return (
        <>
            <div className="LRPieChartWrapper" ref={refDiv} />
        </>
    )
}

export default LeftRightPieChart