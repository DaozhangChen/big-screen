import { useEffect, useRef } from "react"
import * as echart from 'echarts'
import fujianJson from '../mapJson/福建省.json'
import { EChartOption } from "echarts/lib/echarts"
import { remWidth } from "../helpers/remWidth"

const FujianMapChart = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const option: EChartOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>人口约为 {c} 千人',
            showContent: true,
            textStyle: { color: '#666', fontSize: remWidth(20) }

        },
        title: {
            text: '福建省人口示例图',
            right: remWidth(15),
            top: remWidth(10),
            textStyle: { color: '#fff', fontSize: remWidth(30), fontStyle: 'italic' }
        },
        series: [
            {
                type: 'map',
                map: 'FuJian',
                zoom: 1.1,
                data: [
                    { name: '福州市', value: 8500 },
                    { name: '宁德市', value: 3146 },
                    { name: '南平市', value: 2680 },
                    { name: '厦门市', value: 5164 },
                    { name: '龙岩市', value: 2723 },
                    { name: '莆田市', value: 3210 },
                    { name: '三明市', value: 2486 },
                    { name: '漳州市', value: 5054 },
                    { name: '泉州市', value: 8782 },
                ],

            }
        ],
        visualMap: [{
            min: 2000,
            max: 9000,
            text: ['Low', 'High'],
            calculable: true,
            inRange: { color: ['#13d4fe', '#fea312', '#fe0000'] },
            left: remWidth(10),
            bottom: remWidth(15),
            itemWidth: remWidth(25),
            itemHeight: remWidth(180),
            textStyle: { color: '#ffffff', fontSize: remWidth(18) }
        }]
    }
    useEffect(() => {
        if (refDiv.current) {
            var myChart = echart.init(refDiv.current)
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