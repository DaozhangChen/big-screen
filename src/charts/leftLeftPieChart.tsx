import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts/lib/echarts";
import { remWidth } from "../helpers/remWidth";

const LeftLeftPieChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: EChartOption = {
        tooltip: {
            trigger: 'item'
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
                name: 'Access From',
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
                    { value: 1048, name: '1' },
                    { value: 735, name: '2' },
                    { value: 580, name: '3' },
                    { value: 484, name: '4' },
                    { value: 300, name: '5' }
                ]
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
            <div className="LLPieChartWrapper" ref={refDiv}></div>
        </>
    )
}


export default LeftLeftPieChart