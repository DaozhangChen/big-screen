import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts/lib/echarts";
import { remWidth } from "../helpers/remWidth";
import { randomNumber } from "../helpers/randomNumber";

const MidBarChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
            color: ['#f6f7d7', '#ff165d'],
            xAxis: {
                type: 'category',
                data: ['2017', '2018', '2019', '2020', '2021'],
                axisLabel: {
                    fontSize: remWidth(18),
                    color: '#fff'
                }
            },
            yAxis: [
                {
                    type: 'value',
                    name: '出生率',
                    nameGap: remWidth(20),
                    nameTextStyle: {
                        fontSize: remWidth(18),
                        color: '#fff'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#1f2c3e'
                        }
                    },
                    axisLabel: {
                        fontSize: remWidth(18),

                        color: '#fff'
                    }
                },
                {
                    type: 'value',
                    name: '自然增长率',
                    splitNumber: 4,
                    nameGap: remWidth(20),
                    nameTextStyle: {
                        fontSize: remWidth(18),
                        color: '#fff'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: remWidth(18),
                        color: '#fff'
                    }
                }
            ],
            grid: {
                top: '20%',
                right: '8%',
                height: remWidth(110),
                width: remWidth(630),
            },
            series: [
                {
                    name: '人口出生率',
                    data: [randomNumber(14, 15),
                    randomNumber(13, 15),
                    randomNumber(12, 13),
                    randomNumber(9, 12),
                    randomNumber(8, 9)],
                    type: 'bar',
                },
                {
                    name: '人口自然增长率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [randomNumber(7, 9),
                    randomNumber(7, 8),
                    randomNumber(6, 7),
                    randomNumber(3, 6),
                    randomNumber(2, 3)],
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
            }, 2000)
        }
    }, [])
    return (
        <>
            <h2 className='littleTitle'>人口出生率与自然增长率</h2>
            <div ref={refDiv} />
        </>
    )
}

export default MidBarChart
