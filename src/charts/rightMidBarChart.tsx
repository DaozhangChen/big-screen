import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts";
import { remWidth } from "../helpers/remWidth";
import { randomNumber } from "../helpers/randomNumber";

const RightMidBarChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '4%',
                height: remWidth(170),
                width: remWidth(400),
                containLabel: true
            },
            tooltip: {
                valueFormatter: (value: number) => value.toFixed(2) + '万人'
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: remWidth(18),
                    color: '#fff'
                }
            },
            yAxis: {
                type: 'category',
                data: ['2021', '2011', '2001'],
                axisLabel: {
                    fontSize: remWidth(18),
                    color: '#fff'
                }
            },
            series: [
                {
                    name: '第一产业',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    stack: 'total',
                    data: [randomNumber(301, 574), randomNumber(574, 825), randomNumber(825, 850)]
                },
                {
                    name: '第二产业',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    stack: 'total',
                    data: [randomNumber(729, 824), randomNumber(453, 824), randomNumber(404, 453)]
                },
                {
                    name: '第三产业',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    stack: 'total',
                    data: [randomNumber(783, 1167), randomNumber(527, 783), randomNumber(443, 527)]
                },
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
            <h2 className='littleTitle'>就业人员构成</h2>
            <div ref={refDiv} />
        </>
    )
}

export default RightMidBarChart