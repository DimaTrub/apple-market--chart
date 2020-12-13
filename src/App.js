import './App.css'
import ChartTabs from "./components/ChartTabs"
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <h1>Apple Inc. (AAPL)</h1>
      </div>
      <div className="app_body">
        <ChartTabs />
      </div>
      <div className="app_footer">
        <h6>Created by Dima Trubnyakov</h6>
      </div>
    </div>
  )
}
export default App