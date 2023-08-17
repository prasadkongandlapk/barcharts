import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="age-bg">
      <h1>Vaccination Coverage</h1>
      <BarChart data={vaccinData} width={800} height={300} margin={{top: 5}}>
        <XAxis
          dataKey="vaccine_date"
          tick={{stroke: 'gray', strokeWidth: 0.5}}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose_1" name="dose_1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose_2" name="dose_2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
