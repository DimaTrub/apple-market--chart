import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import './styles/Chart.css'

function Chart(props) {
    return (
        <div className="chart" >
            <LineChart
                width={1000}
                height={400}
                data={props.data}
                margin={{
                    top: 5, right: 30, left: 30, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Close" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    )
}
export default Chart
