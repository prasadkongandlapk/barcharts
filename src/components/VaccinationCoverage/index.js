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
    <div>
      <h1>Vaccination coverage</h1>
      <BarChart data={vaccinData} width={1000} height={300} margin={{top: 5}}>
        <XAxis
          dataKey="vaccination_date"
          tick={{stroke: 'gray', strokeWidth: 1}}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose_1" name="dose_1" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="dose_2" name="dose_2" fill="#fd7f0e" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
