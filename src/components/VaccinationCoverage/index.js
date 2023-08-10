import './index.css'

const VaccinationCoverage = props => {
  const {vaccinInfo, chart} = props
  const {vaccinationDate} = vaccinInfo

  return (
    <div>
      {chart}
      <h1>{vaccinationDate}</h1>
    </div>
  )
}

export default VaccinationCoverage
