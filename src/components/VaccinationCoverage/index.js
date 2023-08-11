import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinInfo} = props
  const {id, dose1, dose2, vaccinationDate} = vaccinInfo

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div>
      <ResponsiveContainer width="100$" height={500} />
      <BarChart data={vaccinInfo} margin={{top: 5}}>
        <XAxis dataKey={id} tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey={dose1} name={dose1} fill={dose1} barSize="20%" />
        <Bar dataKey={dose2} name={dose2} fill={dose2} barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
