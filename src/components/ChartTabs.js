
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import Chart from "./Chart"
import { getData } from '../DAL/CartData'
import './styles/ChartTabs.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

function ChartTabs() {
    const classes = useStyles()
    //5 minutes by default
    const [timestampValue, setTimestampValue] = useState('2')
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        getChartData()

    }, [timestampValue])

    const getChartData = async () => {
        let period
        let precision
        switch (timestampValue) {
            case "1":
                period = 1
                precision = "Minutes"
                break
            case "2":
                period = 5
                precision = "Minutes"
                break
            case "3":
                period = 1
                precision = "Hour"
                break
            case "4":
                //In one week there is 168 hours
                period = 168
                precision = "Hour"
                break
        }
        const dataJSON = await getData(period, precision)
        setChartData(dataJSON.data)
    }

    //Skipping first html argument (hight order component)
    const handleChange = (_, newTimestampValue) => {
        setTimestampValue(newTimestampValue)
    }



    const chartRender = () => {

        if (Object.keys(chartData).length === 0) {
            return (
                <h1>Loading Data...</h1>
            )
        }
        else {
            return (
                <Chart data={chartData} />
            )
        }
    }

    return (
        <div className={classes.root}>
            <TabContext value={timestampValue}>
                <div className="chart_tabs">
                    <AppBar>
                        <TabList onChange={handleChange} >
                            <Tab value="1" label="1 minutes" />
                            <Tab value="2" label="5 minutes" />
                            <Tab value="3" label="1 hour" />
                            <Tab value="4" label="1 week" />
                        </TabList>
                    </AppBar>
                </div>

                <div className="chart">
                    <TabPanel value={timestampValue}>
                        {
                            chartRender()
                        }
                    </TabPanel>
                </div>
            </TabContext>
        </div>
    )
}
export default ChartTabs