import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {genderData} = props

  return (
    <div className="age-bg">
      <h1>Vaccination by gender</h1>

      <PieChart height={200} width={400}>
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
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
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
