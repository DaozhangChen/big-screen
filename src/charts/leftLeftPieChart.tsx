import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { EChartOption } from "echarts/lib/echarts";
import { remWidth } from "../helpers/remWidth";

const LeftLeftPieChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
            tooltip: {
                trigger: 'item',
                position: function (point) {
                    return [+point[0] + 50, '30%'];
                },
                valueFormatter: (value: number) => value + '%'
            },
            legend: {
                bottom: '5%',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: remWidth(18)
                },
                itemWidth: remWidth(20),
                itemHeight: remWidth(20),
            },
            series: [
                {
                    name: '男女人口比例',
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
                        { value: 50.89, name: '男性人口' },
                        { value: 49.11, name: '女性人口' },
                    ]
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
            <div className="LLPieChartWrapper" ref={refDiv} />
        </>
    )
}


export default LeftLeftPieChart