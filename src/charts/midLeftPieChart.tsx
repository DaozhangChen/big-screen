import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { remWidth } from "../helpers/remWidth";

const MidLeftPieChart = () => {

    const refDiv = useRef<HTMLDivElement>(null)
    const option: echart.EChartOption = {
        legend: {
            orient: 'vertical',
            left: 'right',
            textStyle: { color: '#fff', fontSize: remWidth(18) },
            itemWidth: remWidth(15),
            itemHeight: remWidth(15),
            itemGap: remWidth(10),
            top: '10%'
        },
        series: [
            {
                right: '20%',
                name: 'Access From',
                type: 'pie',
                radius: '35%',
                data: [
                    { value: 1048, name: '1' },
                    { value: 735, name: '2' },
                    { value: 580, name: '3' },
                    { value: 484, name: '4' },
                    { value: 300, name: '5' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    useEffect(() => {
        if (refDiv.current) {
            const myChart = echart.init(refDiv.current)
            myChart.setOption(option)
        }
    }, [])

    return (<div className="MLPieChartWrapper">

        <h2 className='littleTitle'>标题</h2>
        <div ref={refDiv}></div>

    </div>
    )
}

export default MidLeftPieChart