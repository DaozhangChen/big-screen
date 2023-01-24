import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { remWidth } from "../helpers/remWidth";

const LeftLineChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: echart.EChartOption = {
        textStyle: {
            color: '#fff',
        },
        legend: {
            top: remWidth(-5),
            itemWidth: remWidth(20),
            itemHeight: remWidth(20),
            textStyle: {
                color: '#fff',
                fontSize: remWidth(18)
            },
            itemGap: remWidth(20)
        },
        xAxis: {
            type: 'category',
            data: ['2017', '2018', '2019', '2020', '2021'],
        },
        yAxis: {
            type: 'value',

        },
        series: [
            {
                data: [820, 932, 901, 934, 1290],
                type: 'line',
                smooth: true,
                name: '厦门'
            },
            {
                data: [720, 832, 501, 1034, 690],
                type: 'line',
                smooth: true,
                name: '福州'
            },
            {
                data: [620, 1032, 801, 634, 590],
                type: 'line',
                smooth: true,
                name: '泉州'
            }
        ],
        grid: {
            bottom: remWidth(40),
            left: remWidth(70),
            right: remWidth(10),
            height: remWidth(120),
            width: remWidth(370)
        }
    };
    useEffect(() => {
        if (refDiv.current) {
            const myChart = echart.init(refDiv.current)
            myChart.setOption(option)
        }
    }, [])
    return (
        <>
            <div>
                <h2 className='littleTitle'>标题</h2>
                <div ref={refDiv} className='leftLineChart' />
            </div>
        </>
    )
}

export default LeftLineChart