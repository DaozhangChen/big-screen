import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { remWidth } from "../helpers/remWidth";
import { randomNumber } from "../helpers/randomNumber";

const MidLeftPieChart = () => {

    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
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
                valueFormatter: (value: number) => value.toFixed(2) + '%'
            },
            series: [
                {
                    right: '40%',
                    name: '各年龄组人口比重',
                    type: 'pie',
                    radius: '70%',
                    itemStyle: {
                        borderRadius: 1
                    },
                    label: {
                        show: false
                    },
                    data: [
                        { value: randomNumber(9.2, 16), name: '0-6岁' },
                        { value: randomNumber(11.7, 23), name: '7-15岁' },
                        { value: randomNumber(28.4, 33.1), name: '男（16-59岁）' },
                        { value: randomNumber(24.3, 27.2), name: '女（16-54岁）' },
                        { value: randomNumber(3, 7.7), name: '男（60岁及以上）' },
                        { value: randomNumber(5.5, 11.8), name: '女（55岁及以上）' }
                    ],
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

    return (<div className="MLPieChartWrapper">

        <h2 className='littleTitle'>各年龄组占比</h2>
        <div ref={refDiv} />

    </div>
    )
}

export default MidLeftPieChart