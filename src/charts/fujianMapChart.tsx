import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import fujianJson from '../mapJson/福建省.json'
import { EChartOption } from "echarts/lib/echarts"

const FujianMapChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: EChartOption = {
        series: [
            {
                type: 'map',
                map: 'FuJian',
                data: [
                    { name: '福州市', value: 20057.34 },
                    { name: '宁德市', value: 15477.48 },
                    { name: '南平市', value: 31686.1 },
                    { name: '厦门市', value: 6992.6 },
                    { name: '龙岩市', value: 44045.49 },
                    { name: '莆田市', value: 40689.64 },
                    { name: '三明市', value: 37659.78 },
                    { name: '漳州市', value: 45180.97 },
                    { name: '泉州市', value: 55204.26 },
                ],
            }
        ]
    }
    useEffect(() => {
        if (refDiv.current) {
            const myChart = echart.init(refDiv.current)
            echart.registerMap('FuJian', fujianJson)
            myChart.setOption(option)
        }
    }, [])
    return (
        <>
            <div>
                <div ref={refDiv} className="geoChart" ></div>
            </div>
        </>
    )
}

export default FujianMapChart