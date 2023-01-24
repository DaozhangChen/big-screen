import '@style/App.scss'
import FujianMapChart from './charts/fujianMapChart'
import RadarChart from './charts/radarChart'
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
        <section>3</section>
        <section>4</section>
        <section>5</section>
        <section>6</section>
        <section>7</section>
      </div>
    </div>
  )
}

export default App
