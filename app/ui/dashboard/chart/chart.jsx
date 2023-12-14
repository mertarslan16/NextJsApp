"use client"
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import styles from "../chart/chart.module.css"

const data = [
    {
        name: 'Mon',
        visit: 3000,
        click: 2145,
    },
    {
        name: 'Tue',
        visit: 2000,
        click: 2224,
    },
    {
        name: 'Wed',
        visit: 2260,
        click: 2400,
    },
    {
        name: 'Thu',
        visit: 1000,
        click: 1400,
    },
    {
        name: 'Fri',
        visit: 3000,
        click: 1400,
    },
    {
        name: 'Sat',
        visit: 2000,
        click: 3400,
    },
    {
        name: 'Sun',
        visit: 1000,
        click: 1400,
    },

];
const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:"#151c2c",border:"none"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart