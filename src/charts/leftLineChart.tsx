import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import { remWidth } from "../helpers/remWidth";
import { randomNumber } from "../helpers/randomNumber";

const LeftLineChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option = (): echarts.EChartOption => {
        return {
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
                axisLabel: {
                    fontSize: remWidth(18)
                }
            },
            yAxis: {
                type: 'value',
                name: '人口（万人）',
                splitLine: {
                    lineStyle: {
                        color: '#1f2c3e'
                    }
                },
                min: 400,
                max: 890,
                axisLabel: {
                    fontSize: remWidth(18),

                },
                nameGap: remWidth(50),
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: remWidth(18)
                }
            },
            series: [
                {
                    data: [randomNumber(400, 450),
                    randomNumber(450, 500),
                    randomNumber(500, 550),
                    randomNumber(550, 600),
                    randomNumber(600, 650)],
                    type: 'line',
                    smooth: true,
                    name: '厦门'
                },
                {
                    data: [randomNumber(600, 650),
                    randomNumber(650, 700),
                    randomNumber(700, 750),
                    randomNumber(750, 720),
                    randomNumber(720, 750)],
                    type: 'line',
                    smooth: true,
                    name: '福州'
                },
                {
                    data: [randomNumber(750, 800),
                    randomNumber(800, 820),
                    randomNumber(820, 840),
                    randomNumber(840, 860),
                    randomNumber(860, 880)],
                    type: 'line',
                    smooth: true,
                    name: '泉州'
                }
            ],
            grid: {
                bottom: remWidth(40),
                left: remWidth(80),
                right: remWidth(10),
                height: remWidth(120),
                width: remWidth(370)
            }
        };
    }
    useEffect(() => {
        if (refDiv.current) {
            var myChart = echart.init(refDiv.current)
            myChart.setOption(option())
            setInterval(() => {
                myChart.setOption(option())
            }, 2000)
        }
    }, [])
    return (
        <>
            <div>
                <h2 className='littleTitle'>福厦泉人口变化趋势图</h2>
                <div ref={refDiv} className='leftLineChart' />
            </div>
        </>
    )
}

export default LeftLineChart