import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts/lib/echarts";
import { remWidth } from "../helpers/remWidth";

const MidBarChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: EChartOption = {
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
                name: '1',
                nameGap: remWidth(15),
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
                name: '2',
                splitNumber: 4,
                nameGap: remWidth(15),
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
            height: remWidth(110),
            width: remWidth(630)
        },
        series: [
            {
                name: '1',
                data: [120, 200, 150, 80, 70],
                type: 'bar',
            },
            {
                name: '2',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3],
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

export default MidBarChart
