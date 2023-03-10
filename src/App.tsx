import '@style/App.scss'
import { useEffect, useRef } from 'react'
import FujianMapChart from './charts/fujianMapChart'
import LeftLeftPieChart from './charts/leftLeftPieChart'
import LeftLineChart from './charts/leftLineChart'
import LeftRightPieChart from './charts/leftRightPieChart'
import MidBarChart from './charts/midBarChart'
import MidLeftPieChart from './charts/midLeftPieChart'
import MidRightPieChart from './charts/midRightPieChart'
import RadarChart from './charts/radarChart'
import RightLineChart from './charts/rightLineChart'
import RightMidBarChart from './charts/rightMidBarChart'
import TableChart from './charts/tableChart'
function App() {
  const debounce = () => {
    let timer: any
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        location.reload()
        timer = null
      }, 2000)
    }
  }
  const refDB = useRef(debounce())
  useEffect(() => {
    const DB = refDB.current
    window.addEventListener('resize', () => {
      DB()
    })
  }, [])
  return (
    <div className="wrapper">
      <header className="headerWrapper">
        <img src="/background.png" alt="header" />
      </header>
      <div className="itemWrapper">
        <section>
          <RadarChart />
        </section>
        <section>
          <FujianMapChart />
        </section>
        <section>
          <TableChart />
        </section>
        <section>
          <div>
            <LeftLineChart />
          </div>
          <div>
            <LeftLeftPieChart />
            <LeftRightPieChart />
          </div>
        </section>
        <section>
          <div>
            <MidLeftPieChart />
            <MidRightPieChart />
          </div>
          <div>
            <MidBarChart />
          </div>
        </section>
        <section>
          <RightMidBarChart />
        </section>
        <section>
          <RightLineChart />
        </section>
      </div>
    </div>
  )
}

export default App
