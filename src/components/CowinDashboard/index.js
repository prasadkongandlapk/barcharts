import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import {BarCharts} from 'react-recharts'

class CowinDashboard extends Component {
  state = {data: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const last7Days = data.last_7_days_vaccination
    const filteredData = last7Days.map(each => ({
      vaccinationDate: each.vaccination_date,
      dose1: each.dose_1,
      dose2: each.dose_2,
      id: uuidv4(),
    }))
    this.setState({data: filteredData})
  }

  render() {
    const {data} = this.state
    return (
      <div className="bg">
        <div className="fkljads">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p>Co-Win</p>
        </div>
        <h1>Cowin Vaccination in india</h1>
        <p className="p">Vaccination Coverage</p>
        <ul>
          {data.map(each => (
            <VaccinationCoverage
              vaccinInfo={each}
              key={each.id}
              chart={<BarCharts />}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CowinDashboard
