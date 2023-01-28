import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts/lib/echarts";
import { remWidth } from "../helpers/remWidth";
import { randomNumber } from "../helpers/randomNumber";

const RightLineChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            tooltip: {
                trigger: 'axis',
                valueFormatter: (value: number) => value.toFixed(2) + '万人'
            },
            grid: {
                left: '3%',
                right: '6%',
                bottom: '3%',
                height: remWidth(170),
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['国有单位', '城镇集体单位', '其他'],
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
                    name: '2019',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
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
                    data: [randomNumber(147, 155), randomNumber(9, 11), randomNumber(483, 496)]
                },
                {
                    name: '2020',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
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
                    data: [randomNumber(174, 152), randomNumber(8.85, 9.32), randomNumber(444, 483)]
                },
                {
                    name: '2021',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
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
                    data: [randomNumber(150, 152), randomNumber(8, 9), randomNumber(420, 444)]
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
            <h2 className='littleTitle'>非私营单位就业人数</h2>
            <div ref={refDiv} />
        </>
    )
}

export default RightLineChart