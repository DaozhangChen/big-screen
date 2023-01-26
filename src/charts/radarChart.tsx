import { useEffect, useRef } from "react"
import * as echarts from 'echarts'
import { randomNumber } from "../helpers/randomNumber";
import { remWidth } from "../helpers/remWidth";
const RadarChart = () => {
    const refDiv = useRef(null)
    const option: echarts.EChartOption = {
        legend: {
            data: ['2010年', '2020年', '2000年'],
            itemWidth: remWidth(20),
            itemHeight: remWidth(20),
            right: 0,
            orient: 'vertical',
            textStyle: {
                color: '#fff',
                fontSize: remWidth(18)
            },
        },
        radar: {
            indicator: [
                { name: '一人户', max: 30 },
                { name: '二人户', max: 30 },
                { name: '三人户', max: 25 },
                { name: '四人户', max: 25 },
                { name: '五人户', max: 16 },
                { name: '六人户', max: 10 }
            ],
            radius: "55%",
            axisNameGap: remWidth(10),
        },
        textStyle: {
            color: '#ffffff',
            fontSize: remWidth(18),
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
                        value: [randomNumber(11, 12),
                        randomNumber(15, 17),
                        randomNumber(20, 24),
                        randomNumber(15, 21),
                        randomNumber(10, 14),
                        randomNumber(0, 6)],
                        name: '2010年',
                    },
                    {
                        value: [randomNumber(25, 27),
                        randomNumber(25, 26),
                        randomNumber(15, 19.4),
                        randomNumber(10, 14),
                        randomNumber(0, 6.9),
                        randomNumber(0, 4)],
                        name: '2020年'
                    },
                    {
                        value: [randomNumber(5, 9),
                        randomNumber(10, 15),
                        randomNumber(20, 25),
                        randomNumber(20, 24),
                        randomNumber(10, 15.8),
                        randomNumber(0, 5.9)],
                        name: '2000年'
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
                <h2 className='littleTitle'>家庭户类构成</h2>
                <div ref={refDiv} className="radarChart" />
            </div>
        </>
    )
}

export default RadarChart