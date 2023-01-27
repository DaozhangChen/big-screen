import * as echart from 'echarts'
import { useEffect, useRef } from 'react';
import { randomNumber } from '../helpers/randomNumber';
import { remWidth } from '../helpers/remWidth';
const MidRightPieChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
            color: ['#95e1d3', '#aa96da', '#fce38a', '#f38181'],
            legend: {
                orient: 'vertical',
                left: 'right',
                textStyle: { color: '#fff', fontSize: remWidth(18) },
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
                    right: '20%',
                    bottom: '5%',
                    name: '婚姻状况构成',
                    type: 'pie',
                    radius: '70%',
                    data: [
                        { value: randomNumber(18.6, 28.4), name: '未婚' },
                        { value: randomNumber(63.4, 73.7), name: '已婚' },
                        { value: randomNumber(0.6, 2.2), name: '离婚' },
                        { value: randomNumber(5.5, 7.6), name: '丧偶' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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
        <div className="MRPieChartWrapper">
            <h2 className='littleTitle'>婚姻状况构成</h2>
            <div ref={refDiv} />
        </div>
    )
}

export default MidRightPieChart