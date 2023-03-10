import { useEffect, useRef, useState } from "react"
import { autoSetInterval } from "../helpers/autoSetInterval"

const TableChart = () => {
    const refTbody = useRef<HTMLTableSectionElement>(null)
    const refHeight = useRef<number>()
    const refStartHeight = useRef<number>(0)
    useEffect(() => {
        if (refTbody.current) {
            const height = refTbody.current.scrollHeight
            refHeight.current = height
            autoSetInterval(refTbody.current, refStartHeight.current, refHeight.current)
        }
    }, [])

    return (
        <>
            <div>
                <h2 className='littleTitle'>各市人口占比</h2>
                <table className="tableHead">
                    <thead>
                        <tr>
                            <th>地区</th>
                            <th>人口（千人）</th>
                            <th>比例</th>
                        </tr>
                    </thead>
                </table>
                <table className="tableBody">
                    <tbody ref={refTbody}>
                        <tr>
                            <td>福州市</td>
                            <td>8500</td>
                            <td>20.36%</td>
                        </tr>
                        <tr>
                            <td>厦门市</td>
                            <td>5164</td>
                            <td>12.37%</td>
                        </tr>
                        <tr>
                            <td>泉州市</td>
                            <td>8782</td>
                            <td>21.04%</td>
                        </tr>
                        <tr>
                            <td>漳州市</td>
                            <td>5054</td>
                            <td>12.10%</td>
                        </tr>
                        <tr>
                            <td>宁德市</td>
                            <td>3146</td>
                            <td>7.54%</td>
                        </tr>
                        <tr>
                            <td>南平市</td>
                            <td>2680</td>
                            <td>6.41%</td>
                        </tr>
                        <tr>
                            <td>三明市</td>
                            <td>2486</td>
                            <td>5.96%</td>
                        </tr>
                        <tr>
                            <td>龙岩市</td>
                            <td>2723</td>
                            <td>6.52%</td>
                        </tr>
                        <tr>
                            <td>莆田市</td>
                            <td>3210</td>
                            <td>7.68%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableChart