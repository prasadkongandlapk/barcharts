import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {data: {}, isLoading: true}

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
    }))
    this.setState({data: filteredData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
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
        {isLoading ? (
          <div className="loader">
            <Loader type="ThreeDots" />
          </div>
        ) : (
          <ul>
            {data.map(each => (
              <VaccinationCoverage
                vaccinInfo={each}
                key={each.vaccinationDate}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default CowinDashboard
