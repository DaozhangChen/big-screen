import '@style/App.scss'
import FujianMapChart from './charts/fujianMapChart'
import LeftLineChart from './charts/leftLineChart'
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
          <div></div>
        </section>
        <section>5</section>
        <section>6</section>
        <section>7</section>
      </div>
    </div>
  )
}

export default App
