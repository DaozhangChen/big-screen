import { useEffect, useRef } from "react"
import * as echarts from 'echarts'
import { randomNumber } from "../helpers/randomNumber";
const RadarChart = () => {
    const refDiv = useRef(null)
    const option: echarts.EChartOption = {
        legend: {
            data: ['one', 'two'],
            itemWidth: 10,
            itemHeight: 10,
            right: 0,
            orient: 'vertical'
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '1', max: 100 },
                { name: '2', max: 100 },
                { name: '3', max: 100 },
                { name: '4', max: 100 },
                { name: '5', max: 100 },
                { name: '6', max: 100 }
            ],
            radius: "55%",
            axisNameGap: 5
        },
        textStyle: {
            fontSize: 14,
        },
        series: [
            {
                name: 'name',
                type: 'radar',
                lineStyle: {
                    width: 1
                },
                data: [
                    {
                        value: [randomNumber(100),
                        randomNumber(100),
                        randomNumber(100),
                        randomNumber(100),
                        randomNumber(100),
                        randomNumber(100)],
                        name: 'one',
                    },
                    {
                        value: [randomNumber(100),
                        randomNumber(100),
                        randomNumber(100),
                        randomNumber(100),
                        randomNumber(100),
                        randomNumber(100)],
                        name: 'two'
                    }
                ],
            }
        ],
    };

    useEffect(() => {
        if (refDiv.current) {
            const myChart = echarts.init(refDiv.current)
            myChart.setOption(option)
        }
    }, [])

    return (
        <>
            <div>
                <h2 className='littleTitle'>标题</h2>
                <div ref={refDiv} className="radarChart" />
            </div>
        </>
    )
}

export default RadarChart