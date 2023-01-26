import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts/lib/echarts";
import { remWidth } from "../helpers/remWidth";

const RightLineChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: EChartOption = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: remWidth(170),
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    fontSize: remWidth(18),
                    color: '#fff'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: remWidth(18),
                    color: '#fff'
                }

            }
        ],
        series: [
            {
                name: 'Line 1',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: 'Line 2',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(0, 221, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(77, 119, 255)'
                        }
                    ])
                },
                data: [120, 282, 111, 234, 220, 340, 310]
            },
            {
                name: 'Line 3',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(55, 162, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(116, 21, 219)'
                        }
                    ])
                },
                data: [320, 132, 201, 334, 190, 130, 220]
            }
        ]
    };

    useEffect(() => {
        if (refDiv.current) {
            const myChart = echart.init(refDiv.current)
            myChart.setOption(option)
        }
    }, [])
    return (
        <>
            <h2 className='littleTitle'>标题</h2>
            <div ref={refDiv}></div>
        </>
    )
}

export default RightLineChart