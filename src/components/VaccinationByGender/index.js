import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {genderData} = props

  return (
    <div>
      <h1>Vaccination by gender</h1>

      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={genderData}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="gender" fill="#b3d23f" />
          <Cell name="count" fill="#a44c9e" />
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

export default VaccinationByGender
