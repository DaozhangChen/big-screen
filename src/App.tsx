import '@style/App.scss'
import FujianMapChart from './charts/fujianMapChart'
import LeftLeftPieChart from './charts/leftLeftPieChart'
import LeftLineChart from './charts/leftLineChart'
import LeftRightPieChart from './charts/leftRightPieChart'
import MidBarChart from './charts/midBarChart'
import MidLeftPieChart from './charts/midLeftPieChart'
import MidRightPieChart from './charts/midRightPieChart'
import RadarChart from './charts/radarChart'
import TableChart from './charts/tableChart'
function App() {
  return (
    <div className="wrapper">
      <header className="headerWrapper">
        321
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
        <section>6</section>
        <section>7</section>
      </div>
    </div>
  )
}

export default App
