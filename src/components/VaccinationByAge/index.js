import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {ageData} = props
  return (
    <div className="age-bg">
      <h1>Vaccination by Age</h1>
      <PieChart height={200} width={400}>
        <Pie
          cx="70%"
          cy="40%"
          data={ageData}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
