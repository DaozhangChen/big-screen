import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts";
import { remWidth } from "../helpers/remWidth";

const RightMidBarChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: EChartOption = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '4%',
            height: remWidth(170),
            width: remWidth(400),
            containLabel: true
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisLabel: {
                fontSize: remWidth(18),
                color: '#fff'
            }
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                data: [320, 302, 301, 334, 390]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                data: [220, 182, 191, 234, 290]
            },
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

export default RightMidBarChart