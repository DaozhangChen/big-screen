import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { remWidth } from "../helpers/remWidth";

const MidLeftPieChart = () => {

    const refDiv = useRef<HTMLDivElement>(null)
    const option: echart.EChartOption = {
        legend: {
            orient: 'vertical',
            left: 'right',
            textStyle: { color: '#fff', fontSize: remWidth(15) },
            itemWidth: remWidth(15),
            itemHeight: remWidth(15),
            itemGap: remWidth(10),
            top: '10%'
        },
        tooltip: {
            trigger: 'item',
            valueFormatter: (value: number) => value + '%'
        },
        series: [
            {
                right: '20%',
                name: '各年龄组人口比重',
                type: 'pie',
                radius: '40%',
                label: {
                    show: false
                },
                data: [
                    { value: 9.2, name: '0-6岁' },
                    { value: 11.7, name: '7-15岁' },
                    { value: 33.1, name: '男（16-59岁）' },
                    { value: 27.2, name: '女（16-54岁）' },
                    { value: 7.7, name: '男（60岁及以上）' },
                    { value: 11.8, name: '女（55岁及以上）' }
                ],
                emphasis: {
                    label: {
                        show: true
                    },
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